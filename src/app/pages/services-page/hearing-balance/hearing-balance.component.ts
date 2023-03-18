import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';
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
  constructor(private _homeService:HomeService , private _hearingBalanceService:HearingBalanceService) {
  }

  ngOnInit(): void {
    this._hearingBalanceService.getHearingDepartemt();
    this.Services$ = this._homeService.Selector$('Services');
    this._hearingBalanceService.getServices();
    this.HearingServices$ = this._hearingBalanceService.Selector$('Services');

    this.HearingDepartemt$ = this._hearingBalanceService.Selector$('HearingDepartemt').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      })
    );


  }

}
