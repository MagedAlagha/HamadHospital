import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoGalleryService } from '../../video-gallery.service';

@Component({
  selector: 'app-video-preview-modal',
  templateUrl: './video-preview-modal.component.html',
  styleUrls: ['./video-preview-modal.component.scss']
})
export class VideoPreviewModalComponent implements OnInit {

  constructor(private _videoGalleryService:VideoGalleryService) {}

  ngOnInit(): void {
  }


  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit() {
    this.videoPlayer.nativeElement.play();
  }

  playVideo() {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo() {
    this.videoPlayer.nativeElement.pause();
  }

  /* closeDialog() {
    this._videoGalleryService.displayDialogs('VideoDialog', false);
} */

}
