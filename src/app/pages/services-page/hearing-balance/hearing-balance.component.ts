import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  HearingServices$!: Observable<any>;
  constructor(private _homeService:HomeService , private _hearingBalanceService:HearingBalanceService) {
  }

  ngOnInit(): void {

    this.Services$ = this._homeService.Selector$('Services');
    this._hearingBalanceService.getServices();
    this.HearingServices$ = this._hearingBalanceService.Selector$('Services');
  }

}
