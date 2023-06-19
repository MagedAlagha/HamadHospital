import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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

    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo').pipe(map(value=>value));
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    rtl: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: false,
    nav: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],

    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  };



}
