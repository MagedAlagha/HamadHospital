import { Location } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaCenterService } from '../media-center/media-center.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  LandingPageData$!: Observable<any>;
  Services$!: Observable<any>;
  LastNews$!: Observable<any>;
  mix$!: Observable<any>;

  Advertisements$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  avatar = environment?.avatar;

  VideoDialog$!: Observable<any>;
  MediaCenterServiceNews$!: Observable<any>;
  MediaCenterService$!: Observable<any>;
  MediaCenterService2$!: Observable<any>;

  constructor(
    private _homeService: HomeService,
    private _mediaCenterService: MediaCenterService,
    private el: ElementRef,
    private location: Location
  ) {}
  dominUrl: any;
  ngOnInit(): void {
    this.dominUrl = 'http://' + location.host;
    console.log('this.dominUrl', this.dominUrl);
    /*    ;
     */

    this._homeService.getSliderData();
    this._homeService.getAdvertisements();
    this._homeService.getMainInfo();
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo').pipe(
      map((value) => {
        return {
          ...value,
          HeaderSlider: value?.HeaderSlider?.map((item: any) => {
            console.log('this.dominUrl', this.dominUrl);
            console.log(
              'item',
              item?.Link.toString()?.replace(this.dominUrl, '')
            );
            return {
              ...item,
              Link: item?.Link?.replace(this.dominUrl, ''),
            };
          }),
        };
      })
    );
    this.Services$ = this._homeService.Selector$('Services');

    this.LastNews$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID === 1;
          });
        })
      );

    this.mix$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID == 7;
        });
      })
    );

    /* ******************************************************************************************* */
    this.MediaCenterServiceNews$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID === 1;
          });
        })
      );

    this.MediaCenterService$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID === 3;
          });
        })
      );
    this.MediaCenterService2$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID === 6;
          });
        })
      );

    /* **************************************************************************************** */
  }

  /* ************************************************************************* */

  display: boolean = false;

  showVideoPreview(item: any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log(item);
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ PostInfo: item });
    console.log(item);
  }

  /* ************************************************************************* */

  showNews(item: any) {
    this._mediaCenterService.updateStore({ PostInfo: item });
    console.log(item, 'itemitemitem');
  }
  showmix(item: any) {
    this._mediaCenterService.updateStore({ PostInfo: item });
    console.log(item);
  }

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

  mix: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    nav: false,
    dots: false,
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
