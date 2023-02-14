import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualStoriesDetailsComponent } from './visual-stories-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VisualStoriesDetailsComponent],
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
