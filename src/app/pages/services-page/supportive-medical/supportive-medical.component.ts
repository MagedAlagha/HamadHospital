import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { HearingBalanceService } from '../hearing-balance/hearing-balance.service';
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
  constructor(private _homeService:HomeService , private _supportiveMedicalService:SupportiveMedicalService) {
  }

  ngOnInit(): void {
    this._supportiveMedicalService.getSupportiveMedicalDepartments();
    this.Services$ = this._homeService.Selector$('Services');

    this.SupportiveMedicalDepartments$ = this._supportiveMedicalService.Selector$('SupportiveMedicalDepartments').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      })
    );







  }

}
