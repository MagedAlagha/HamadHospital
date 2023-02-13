import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from '../video-gallery/video-gallery.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VideoGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'video-main',
        component: VideoGalleryComponent,
      },
    ]),
  ],
})
export class VideoGalleryModule {}
