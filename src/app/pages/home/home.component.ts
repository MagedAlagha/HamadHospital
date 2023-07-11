import { Location } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaCenterService } from '../media-center/media-center.service';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { SwiperComponent } from 'swiper/types';
import Swiper from "swiper/types/swiper-class";

// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;

  LandingPageData$!: Observable<any>;
  Services$!: Observable<any>;
  LastNews$!: Observable<any>;
  mix$!: Observable<any>;

  Advertisements$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  avatar = environment?.avatar;

  VideoDialog$!: Observable<any>;
  MediaSectionsItemsVideo$!: Observable<any>;
  MediaCenterServiceNews$!: Observable<any>;
  MediaSectionsItemsStory$!: Observable<any>;
  MediaSectionsItemsLastVarious$!: Observable<any>;
  MediaCenterService$!: Observable<any>;
  MediaCenterStories$!: Observable<any>;
  MediaSectionsSuceessStoryHome$!: Observable<any>;
  currentSection: number = 0;
  baseUrl = environment.FileUrl;
  constructor(
    private _homeService: HomeService,
    private _mediaCenterService: MediaCenterService,
    private router: Router
  ) {}
  dominUrl: any;
  ngOnInit(): void {
    this.dominUrl = 'http://' + location.host;
    console.log('this.dominUrl', this.dominUrl);
    /*    ;
     *//* null , 1 */
    this._mediaCenterService.getLastVarious();
    this._mediaCenterService.getMediaSectionsItems()
    this._mediaCenterService.getMediaSectionsSuceessStoryHome('5,6');
    this._mediaCenterService.getMediaSectionsItemsVideo(3);
    this._mediaCenterService.getMediaSectionsItemsStory(5);
    this._mediaCenterService.getMediaSectionsItemsStory(6);
    this._mediaCenterService.getMediaSectionsItemsLastNews(1);
    this._mediaCenterService.getMediaSectionsItemsVarious(7);
    this._homeService.getAdvertisements();
    this._homeService.getMainInfo();
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo').pipe(
      map((value) => {
        return {
          ...value,
          HeaderSlider: value?.HeaderSlider?.map((item: any) => {
            /* console.log('this.dominUrl', this.dominUrl);
            console.log(
              'item',
              item?.Link.toString()?.replace(this.dominUrl, '')
            ); */
            return {
              ...item,
              Link: item?.Link?.replace(this.dominUrl, ''),
            };
          }),
        };
      })
    );
    this.Services$ = this._homeService.Selector$('Services');
    this.MediaSectionsItemsVideo$ = this._mediaCenterService.Selector$(
      'MediaSectionsItemsVideo'
    );
    this.MediaSectionsItemsStory$ = this._mediaCenterService.Selector$(
      'MediaSectionsItemsStory'
    );

    this.LastNews$ = this._mediaCenterService.Selector$(
      'MediaSectionsItemsLastNews'
    );
    this.MediaSectionsItemsLastVarious$ = this._mediaCenterService.Selector$(
      'ShowLastVarious'
    );

    /*     this.mix$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID == 7 || item.ShowVarious;
        });
      })
    ); */

    /* ******************************************************************************************* */
    this.MediaCenterServiceNews$ =
      this._mediaCenterService.Selector$('MediaSectionsItems');

    this.MediaCenterService$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.ShowHome == true;
          });
        })
      );

    this.MediaSectionsSuceessStoryHome$ = this._mediaCenterService.Selector$('MediaSectionsSuceessStoryHome')

    /* **************************************************************************************** */
  }

  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }

  /* ************************************************************************* */

  display: boolean = false;
  displayCards: boolean = false;
  showVideoPreview(item: any) {
    this.displayCards = true;
    this._mediaCenterService.updateStore({ VideoDetails: undefined });
    setTimeout(() => {
      this._mediaCenterService.updateStore({ VideoDetails: item });
    }, 500);

    console.log('gfffffffeg', item);
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
    console.log(item);
  }

  /* ************************************************************************* */

  showNews(item: any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
    console.log(item, 'itemitemitem');
  }
  showmix(item: any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
    console.log(item);
  }
  addAvtiveNaveBar() {
    this._mediaCenterService.updateStore({ activeNave: 3 });
    console.log('activeNave : 3');
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


  /* if (item?.Link.includes('youtu')) {
    this.showVideoSlider(item);
  } else {
    this.router.navigate([item?.Link]);
  }
} */


  openLink(item: any) {

    if (item?.Link.includes('youtu')) {
      this.router.navigate(['/media-center/video/video-main'],{
        queryParams:{
        path: item?.Link
        }
      });
    } else if(item?.Link.includes('media-center') || item?.Link.includes('mix-details') ) {
      this.router.navigate([item?.Link]);
    }else{
      window.open(item?.Link, '_blank');
    }

  }

  showVideoSlider(item: any) {
    this._mediaCenterService.updateStore({ VideoSlider: undefined });
    setTimeout(() => {
      this._mediaCenterService.updateStore({ VideoSlider: item });
    }, 500);
    this.display = true;
  }
}
