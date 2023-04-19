import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { OutpatientClinicsService } from './outpatient-clinics.service';

@Component({
  selector: 'app-outpatient-clinics',
  templateUrl: './outpatient-clinics.component.html',
  styleUrls: ['./outpatient-clinics.component.scss']
})
export class OutpatientClinicsComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  getOutpatientClinicsDepartments$!: Observable<any>;
  OutpatientClinicsDepartmentsServices$!: Observable<any>;
  HearingServices$!: Observable<any>;
  m:any;
  active: any;
  widthToolTip:any = '100%';
  constructor(private _homeService:HomeService , private _outpatientClinicsService:OutpatientClinicsService) {
  }

  ngOnInit(): void {
    this._outpatientClinicsService.getServices();
    this._outpatientClinicsService.getOutpatientClinicsDepartments();
    this._outpatientClinicsService.getOutpatientClinicsDepartmentsServices();
    this.Services$ = this._homeService.Selector$('Services');
    this.HearingServices$ = this._outpatientClinicsService.Selector$('Services');

    this.getOutpatientClinicsDepartments$ = this._outpatientClinicsService
    .Selector$('OutpatientClinicsDepartments')
    .pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive && item.TypeID === 4;
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
