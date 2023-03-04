import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sliderData$!: Observable<any>;
  Services$!: Observable<any>;
  Advertisements$!: Observable<any>;
  MainInfo$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  avatar = environment?.avatar;
  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this._homeService.getSliderData();
    this._homeService.getServicesInHome();
    this._homeService.getAdvertisements();
    this._homeService.getMainInfo();
    this.sliderData$ = this._homeService.Selector$('sliderData');
    this.Services$ = this._homeService.Selector$('Services');
    this.Advertisements$ = this._homeService.Selector$('Advertisements');
    this.MainInfo$ = this._homeService.Selector$('mainInfo');
  }

  /*   .pipe(map(value=>{
    console.log("value" , value)
  }))
 */

  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    nav: true,
    dots: true,
    navSpeed: 400,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  };
}
