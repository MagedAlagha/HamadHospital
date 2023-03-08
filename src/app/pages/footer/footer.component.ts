import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../home/home.service';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  MainInfo$!: Observable<any>;
  Stats$!: Observable<any>;
  LandingPageData$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  constructor(
    private _homeService: HomeService,
    private _footerService: FooterService
  ) {}

  ngOnInit() {
    this.MainInfo$ = this._homeService.Selector$('mainInfo');
    this.Stats$ = this._footerService.Selector$('Stats');

    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo').pipe(map(value=>value));
  }
}
