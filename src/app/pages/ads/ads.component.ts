import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  LandingPageData$!: Observable<any>;
  constructor(private _homeService: HomeService,) { }

  ngOnInit(): void {

    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo');

  }

}
