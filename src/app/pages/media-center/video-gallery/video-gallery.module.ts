import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from '../video-gallery/video-gallery.component';
import { RouterModule } from '@angular/router';
import {ImageModule} from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { VideoPreviewModalComponent } from './modal/video-preview-modal/video-preview-modal.component';
import { SafePipe } from 'src/app/pages/media-center/video-gallery/safe.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [VideoGalleryComponent, VideoPreviewModalComponent ,     SafePipe  ],
  imports: [
    CommonModule,
    ImageModule,
    DialogModule,
    YouTubePlayerModule,
    RouterModule.forChild([
      {
        path: 'video-main',
        component: VideoGalleryComponent,
      },
    ]),
  ],
})
export class VideoGalleryModule {}
