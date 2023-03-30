import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesHomeComponent } from './stories-home.component';
import { DialogModule } from 'primeng/dialog';
import { VideoPreviewModalComponent } from './Modal/video-preview-modal/video-preview-modal.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [StoriesHomeComponent , VideoPreviewModalComponent  ],
  imports: [
    CommonModule,
    DialogModule,
    YouTubePlayerModule,
    RouterModule ,
    LazyLoadImageModule
  ],
  exports: [StoriesHomeComponent],
})
export class StoriesHomeModule { }
