import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualStoriesDetailsComponent } from './visual-stories-details.component';
import { RouterModule } from '@angular/router';
import { SafePipe } from '../../shared/pipe/safe.pipe';

@NgModule({
  declarations: [VisualStoriesDetailsComponent , SafePipe],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisualStoriesDetailsComponent,
      },
    ]),

  ],
})
export class VisualStoriesDetailsModule {}
