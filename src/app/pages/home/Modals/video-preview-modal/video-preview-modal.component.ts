import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MediaCenterService } from 'src/app/pages/media-center/media-center.service';
import { VideoGalleryService } from 'src/app/pages/media-center/video-gallery/video-gallery.service';

@Component({
  selector: 'app-video-preview-modal',
  templateUrl: './video-preview-modal.component.html',
  styleUrls: ['./video-preview-modal.component.scss'],
})
export class VideoPreviewModalComponent implements OnInit {
  data: any;
  width: any = '100% ';
  constructor(
    private _videoGalleryService: VideoGalleryService,
    private _mediaCenterService: MediaCenterService
  ) {}

  video$!: Observable<any>;
  apiLoaded = false;
  ngOnInit(): void {
    this.data = this._mediaCenterService.dataStore.VideoDetails;
    if (this.data) {
      console.log('datadatadatadata', this.data);
    }
    this.video$ = this._mediaCenterService.Selector$('VideoDetails');

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  getIDFromVideo(item?: any) {
    return item?.split('be/')[1] || item.split("shorts/")[1];
  }
}
