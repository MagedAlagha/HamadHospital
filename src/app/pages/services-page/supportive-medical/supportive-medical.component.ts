import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { HearingBalanceService } from '../hearing-balance/hearing-balance.service';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';
import { SupportiveMedicalService } from './supportive-medical.service';

@Component({
  selector: 'app-supportive-medical',
  templateUrl: './supportive-medical.component.html',
  styleUrls: ['./supportive-medical.component.scss']
})
export class SupportiveMedicalComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  SupportiveMedicalDepartments$!: Observable<any>;
  HearingServices$!: Observable<any>;
  active: any;
  getOutpatientClinicsDepartments$!: Observable<any>;
  OutpatientClinicsDepartmentsServices$!: Observable<any>;

  constructor(private _homeService:HomeService , private _outpatientClinicsService:OutpatientClinicsService) {
  }

  ngOnInit(): void {
    this._outpatientClinicsService.getOutpatientClinicsDepartments();
    this._outpatientClinicsService.getOutpatientClinicsDepartmentsServices();

    this.Services$ = this._homeService.Selector$('Services');

    this.getOutpatientClinicsDepartments$ = this._outpatientClinicsService
    .Selector$('OutpatientClinicsDepartments')
    .pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive && item.TypeID === 5;
        });
      }),
      tap((value) => {
        const firstItem = Array.isArray(value) && value?.length? value?.[0] : undefined;
        if (firstItem) {
          this.storeData(firstItem);
        }

      })
    );
  }

  storeData(item: any) {
    console.log('storeData', item);

    this._outpatientClinicsService.updateStore({ dataShow: item });
    if (item) {
      this.active = item.ID;
    }
  }

}
