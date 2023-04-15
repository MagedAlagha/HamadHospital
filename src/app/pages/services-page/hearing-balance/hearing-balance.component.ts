import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';
import { HearingBalanceService } from './hearing-balance.service';

@Component({
  selector: 'app-hearing-balance',
  templateUrl: './hearing-balance.component.html',
  styleUrls: ['./hearing-balance.component.scss']
})
export class HearingBalanceComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  HearingDepartemt$!: Observable<any>;
  HearingServices$!: Observable<any>;
  getOutpatientClinicsDepartments$!: Observable<any>;
  OutpatientClinicsDepartmentsServices$!: Observable<any>;
  data:any
  active: any;
  constructor(private _homeService:HomeService , private _hearingBalanceService:HearingBalanceService , private _outpatientClinicsService:OutpatientClinicsService) {
  }

  ngOnInit(): void {
    this._outpatientClinicsService.getOutpatientClinicsDepartments();
    this._outpatientClinicsService.getOutpatientClinicsDepartmentsServices();
    this.Services$ = this._homeService.Selector$('Services');
    this._hearingBalanceService.getServices();

    this.getOutpatientClinicsDepartments$ = this._outpatientClinicsService.Selector$('OutpatientClinicsDepartments').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      }),
      map((val) => {
        return val?.filter((item: any) => {
          return item.TypeID === 3;
        });
      })
    );

    this.OutpatientClinicsDepartmentsServices$ = this._outpatientClinicsService.Selector$('OutpatientClinicsDepartmentsServices').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      }),
      map((val) => {
        return val?.filter((item: any) => {
          return item.OutpatientClinicsDepartmentID ;
        });
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
    this._outpatientClinicsService.updateStore({ dataShow: item });
    this.data = item;
    if (this.data) {
      this.active = this.data.ID;
    }
  }

}
