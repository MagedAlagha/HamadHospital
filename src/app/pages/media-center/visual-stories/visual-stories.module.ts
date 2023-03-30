import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualStoriesComponent } from './visual-stories.component';
import { RouterModule } from '@angular/router';
import { VisualStoriesModalComponent } from './Modal/visual-stories-modal/visual-stories-modal.component';
import { DialogModule } from 'primeng/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [VisualStoriesComponent, VisualStoriesModalComponent ],
  imports: [
    CommonModule,
    DialogModule,
    YouTubePlayerModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisualStoriesComponent,
      },
    ]),
  ],
})
export class VisualStoriesModule {}
