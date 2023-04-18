import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/environments/environment';
import { MediaCenterService } from '../media-center/media-center.service';
import { VideoGalleryService } from '../media-center/video-gallery/video-gallery.service';
import { ServicesPageService } from '../services-page/services-page.service';

@Component({
  /* standalone: true,
  imports:[CommonModule , RouterModule ], */

  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss'],
})
export class StoriesHomeComponent implements OnInit {
  VideoDialog$!: Observable<any>;
  MediaCenterService$!: Observable<any>;
  MediaCenterService2$!: Observable<any>;
  MediaSectionsItemsVideo$!: Observable<any>;
  MediaSectionsItemsStory$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  active: any = 1;
  constructor(
    private _servicesPageService: ServicesPageService,
    private _mediaCenterService: MediaCenterService
  ) {}
  Avatar = environment.FileUrl;
  ngOnInit(): void {
    const successStoryID = this._servicesPageService.dataStore.successStory;
    if (successStoryID) {
      console.log('successStory : ', successStoryID);
    }
    const url = window.location.href;
    this._mediaCenterService.getMediaSectionsItemsVideo(3);
    this._mediaCenterService.getMediaSectionsItemsStory(5);
    if (url.includes('medical-rehabilitation')) {
      this.active = 1;
    } else if (url.includes('prosthetics')) {
      this.active = 2;
    } else if (url.includes('hearing-balance')) {
      this.active = 3;
    } else if (url.includes('outpatient-clinics')) {
      this.active = 4;
    } else if (url.includes('supportive')) {
      this.active = 5;
    }

    this.MediaSectionsItemsVideo$ = this._mediaCenterService
      .Selector$('MediaSectionsItemsVideo')
      .pipe(
        // map((val) => {
        //   return val?.filter((item: any) => {
        //     console.log('item', successStoryID);
        //     return item?.MainServiceID == successStoryID;
        //   });
        // })
      );

    this.MediaSectionsItemsStory$ = this._mediaCenterService
      .Selector$('MediaSectionsItemsStory')
      .pipe(
        // map((val) => {
        //   return val?.filter((item: any) => {
        //     console.log('item', successStoryID);
        //     return item?.MainServiceID == successStoryID;
        //   });
        // })
      );

  }

  display: boolean = false;
  showVideoPreview(item: any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log('item item item', item);
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
    console.log(item);
  }
}
