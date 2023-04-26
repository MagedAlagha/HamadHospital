import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaCenterService } from 'src/app/pages/media-center/media-center.service';
import { VideoGalleryService } from 'src/app/pages/media-center/video-gallery/video-gallery.service';

@Component({
  selector: 'app-video-preview-slider',
  templateUrl: './video-preview-slider.component.html',
  styleUrls: ['./video-preview-slider.component.scss'],
})
export class VideoPreviewSliderComponent implements OnInit {
  data: any;
  width: any = '100% ';
  constructor(
    private _videoGalleryService: VideoGalleryService,
    private _mediaCenterService: MediaCenterService
  ) {}

  videoSlider$!: Observable<any>;
  apiLoaded = false;
  ngOnInit(): void {
    this.data = this._mediaCenterService.dataStore.VideoSlider;
    if (this.data) {
      console.log('datadatadatadata88888888', this.data.Link);
    }
    this.videoSlider$ = this._mediaCenterService.Selector$('VideoSlider');

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  getIDFromVideo(link: any) {
    const splited = link.split('be/')[1];
    console.log('splited:', splited);

    return splited;
  }
}
