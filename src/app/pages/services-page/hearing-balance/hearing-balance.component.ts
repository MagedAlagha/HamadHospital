import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';
import { HearingBalanceService } from './hearing-balance.service';

@Component({
  selector: 'app-hearing-balance',
  templateUrl: './hearing-balance.component.html',
  styleUrls: ['./hearing-balance.component.scss'],
})
export class HearingBalanceComponent implements OnInit {
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
            return item.IsActive && item.TypeID === 3;
          });
        }),
        tap((value) => {
          const firstItem = Array.isArray(value) && value?.length? value?.[0] : undefined;
          this.storeData(firstItem);
          // this.OutpatientClinicsDepartmentsServices$ =
          //   this._outpatientClinicsService
          //     .Selector$('OutpatientClinicsDepartmentsServices')
          //     .pipe(
          //       map((val) => {
          //         console.log("before filter:", val)
          //         return val?.filter((item: any) => item.IsActive && item.TypeID === 3);
          //       }), tap( filteredValue => {
          //         console.log("after filter:", filteredValue)

          //       })
          //     );
        })
      );

    /*  this.HearingServices$ = this._hearingBalanceService.Selector$('Services'); */
    /*  this._hearingBalanceService.getHearingDepartemt();
    this.HearingDepartemt$ = this._hearingBalanceService.Selector$('HearingDepartemt').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      })
    ); */
  }

  storeData(item: any) {
    console.log('storeData', item);

    this._outpatientClinicsService.updateStore({ dataShow: item });
    if (item) {
      this.active = item.ID;
    }
  }
}
