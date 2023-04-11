import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/environments/environment';
import { MediaCenterService } from '../media-center/media-center.service';
import { VideoGalleryService } from '../media-center/video-gallery/video-gallery.service';

@Component({
  /* standalone: true,
  imports:[CommonModule , RouterModule ], */

  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss'],
})
export class StoriesHomeComponent implements OnInit {
  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  MediaCenterService2$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  active:any = 1;
  constructor(private _videoGalleryService:VideoGalleryService , private _mediaCenterService:MediaCenterService) { }
  Avatar=environment.FileUrl;
  ngOnInit(): void {
    const url = window.location.href;
    if (url.includes('medical-rehabilitation')) {
      this.active = 1;
    }else if(url.includes('prosthetics')){
      this.active = 2;
    }else if(url.includes('hearing-balance')){
      this.active = 3;
    }else if(url.includes('outpatient-clinics')){
      this.active = 4;
    }else if(url.includes('supportive')){
      this.active = 5;
    }

    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(

      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 3;
        });
      }),
      map((val) => {
        return val?.filter((item: any) => {
          return item.MainServiceID === this.active;
        });
      })
    );
    this.MediaCenterService2$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(

      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 5;
        });
      }),
      map((val) => {
        return val?.filter((item: any) => {
          return item.MainServiceID === this.active;
        });
      })
    );




  }

  display: boolean = false;

  showVideoPreview(item:any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log( 'item item item' , item );
   ;
  }

  showPhotosDetails(item:any){
    this._mediaCenterService.updateStore({ PhotosDetails: item });
    console.log(item)
  }
}
