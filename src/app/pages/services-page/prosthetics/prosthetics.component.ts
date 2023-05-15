import { Component, OnInit } from '@angular/core';
import { Observable, tap, map, switchMap, filter, concat } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { ProstheticsService } from './prosthetics.service';
import { HearingBalanceService } from '../hearing-balance/hearing-balance.service';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';

@Component({
  selector: 'app-prosthetics',
  templateUrl: './prosthetics.component.html',
  styleUrls: ['./prosthetics.component.scss'],
})
export class ProstheticsComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  HearingDepartemt$!: Observable<any>;
  HearingServices$!: Observable<any>;
  getOutpatientClinicsDepartments$!: Observable<any>;
  OutpatientClinicsDepartmentsServices$!: Observable<any>;
  active: any;
  value1: any;
  constructor(
    private _homeService: HomeService,
    private _hearingBalanceService: HearingBalanceService,
    private _outpatientClinicsService: OutpatientClinicsService
  ) {}

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
            return item.IsActive && item.TypeID === 2;
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
