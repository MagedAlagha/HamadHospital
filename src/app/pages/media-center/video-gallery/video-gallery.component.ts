import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaCenterService } from '../media-center.service';
import { VideoGalleryService } from './video-gallery.service';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {
  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;

  constructor(private _videoGalleryService:VideoGalleryService , private _mediaCenterService:MediaCenterService) { }

  Avatar=environment.FileUrl;
  ngOnInit(): void {
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 3;
        });
      })
    );
    this.VideoDialog$ = this._videoGalleryService.Selector$('VideoDialog')
  }

  display: boolean = false;

  showVideoPreview(item:any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log(item)
  }
  openModal(item?:any){
    this._videoGalleryService.displayDialogs('VideoDialog', true, item);

  }

}
