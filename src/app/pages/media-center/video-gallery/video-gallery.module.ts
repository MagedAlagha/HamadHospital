import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from '../video-gallery/video-gallery.component';
import { RouterModule } from '@angular/router';
import {ImageModule} from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { VideoPreviewModalComponent } from './modal/video-preview-modal/video-preview-modal.component';

@NgModule({
  declarations: [VideoGalleryComponent, VideoPreviewModalComponent ],
  imports: [
    CommonModule,
    ImageModule,
    DialogModule,
    RouterModule.forChild([
      {
        path: 'video-main',
        component: VideoGalleryComponent,
      },
    ]),
  ],
})
export class VideoGalleryModule {}
