import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from '../video-gallery/video-gallery.component';
import { RouterModule } from '@angular/router';
import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [VideoGalleryComponent],
  imports: [
    CommonModule,
    ImageModule,
    RouterModule.forChild([
      {
        path: 'video-main',
        component: VideoGalleryComponent,
      },
    ]),
  ],
})
export class VideoGalleryModule {}
