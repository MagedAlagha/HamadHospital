import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-written-stories-details',
  templateUrl: './written-stories-details.component.html',
  styleUrls: ['./written-stories-details.component.scss'],
})
export class WrittenStoriesDetailsComponent implements OnInit {
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  PhotosDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService
  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }

  ngOnInit(): void {

    this._mediaCenterService.getPostId(this.ID);

    this.ImageSection$ = this._mediaCenterService.Selector$('ImageSection');

    this.MediaCenterService$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID == 2;
          });
        })
      );

    this.PhotosDetails$ = this._mediaCenterService
      .Selector$('PostInfo')
      .pipe(
        tap((value) => {
          console.log('PhotosDetails', value);
          this._mediaCenterService.getImageSection(value?.ID);
        })
      );
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ PostInfo: item });
   ;
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
}
