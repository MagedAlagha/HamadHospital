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
  LastNews$!:Observable<any>;

  Advertisements$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  avatar = environment?.avatar;

  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  MediaCenterService2$!:Observable<any>;


  constructor(private _homeService: HomeService , private _mediaCenterService:MediaCenterService , private el: ElementRef) {}

  ngOnInit(): void {
    this._homeService.getSliderData();
    this._homeService.getAdvertisements();
    this._homeService.getMainInfo();
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo').pipe(map(value=>value));
    this.Services$ = this._homeService.Selector$('Services');
    /* this.Advertisements$ = this._homeService.Selector$('Advertisements').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      })
    ); */

    this.LastNews$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 1;
        });
      })
    );

/* ******************************************************************************************* */
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 3;
        });
      })
    );
    this.MediaCenterService2$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 2;
        });
      })
    );

/* **************************************************************************************** */

  }

  /* ************************************************************************* */

  display: boolean = false;

  showVideoPreview(item:any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showPhotosDetails(item:any){
    this._mediaCenterService.updateStore({ PhotosDetails: item });
    console.log(item)
  }

  /* ************************************************************************* */







  showNews(item:any){
    this._mediaCenterService.updateStore({ showNews: item });
    console.log(item)
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
