import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { MedicalRehabilitationService } from './medical-rehabilitation.service';
import { HearingBalanceService } from '../hearing-balance/hearing-balance.service';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';

@Component({
  selector: 'app-medical-rehabilitation',
  templateUrl: './medical-rehabilitation.component.html',
  styleUrls: ['./medical-rehabilitation.component.scss'],
})
export class MedicalRehabilitationComponent implements OnInit {
  active: any;

  constructor(
    private _homeService: HomeService,
    private _hearingBalanceService: HearingBalanceService,
    private _outpatientClinicsService: OutpatientClinicsService
  ) {}
  getOutpatientClinicsDepartments$!: Observable<any>;
  OutpatientClinicsDepartmentsServices$!: Observable<any>;

  Services$!: Observable<any>;

  isEn = document.dir == 'ltr' ? true : false;

  ngOnInit(): void {
    this._outpatientClinicsService.getOutpatientClinicsDepartments();
    this._outpatientClinicsService.getOutpatientClinicsDepartmentsServices();
    this.Services$ = this._homeService.Selector$('Services');
    this._hearingBalanceService.getServices();

    this.getOutpatientClinicsDepartments$ = this._outpatientClinicsService
      .Selector$('OutpatientClinicsDepartments')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.IsActive && item.TypeID === 1;
          });
        }),
        tap((value) => {
          const firstItem =
            Array.isArray(value) && value?.length ? value?.[0] : undefined;
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
