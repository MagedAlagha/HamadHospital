import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MediaCenterService } from 'src/app/pages/media-center/media-center.service';
import { VideoGalleryService } from 'src/app/pages/media-center/video-gallery/video-gallery.service';

@Component({
  selector: 'app-video-preview-modal',
  templateUrl: './video-preview-modal.component.html',
  styleUrls: ['./video-preview-modal.component.scss']
})
export class VideoPreviewModalComponent implements OnInit {
data:any;
  constructor(private _videoGalleryService:VideoGalleryService , private _mediaCenterService:MediaCenterService) {}

video$!:Observable<any>;
width:any = '100%';
  ngOnInit(): void {

     this.data = this._mediaCenterService.dataStore.VideoDetails ;
    if(this.data){
      console.log('datadatadatadata' , this.data)
    }
    this.video$ = this._mediaCenterService.Selector$('VideoDetails').pipe(tap(value=>{
      console.log('data3333333' , value)
    }));

  }

  /* closeDialog() {
    this._videoGalleryService.displayDialogs('VideoDialog', false);
} */

getIDFromVideo(link:any){
  return link.split("be/")[1] || link.split("shorts/")[1]
  }

}
