import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualStoriesComponent } from './visual-stories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VisualStoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisualStoriesComponent,
      },
    ]),
  ],
})
export class VisualStoriesModule {}
