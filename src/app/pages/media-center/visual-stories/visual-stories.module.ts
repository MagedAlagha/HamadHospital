import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualStoriesComponent } from './visual-stories.component';
import { RouterModule } from '@angular/router';
import { VisualStoriesModalComponent } from './Modal/visual-stories-modal/visual-stories-modal.component';
import { DialogModule } from 'primeng/dialog';
import { Safe2Pipe } from './safe2.pipe';

@NgModule({
  declarations: [VisualStoriesComponent, VisualStoriesModalComponent, Safe2Pipe ],
  imports: [
    CommonModule,
    DialogModule,

    RouterModule.forChild([
      {
        path: '',
        component: VisualStoriesComponent,
      },
    ]),
  ],
})
export class VisualStoriesModule {}
