import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessStoriesComponent } from '../success-stories/success-stories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SuccessStoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'success-stories-main',
        component: SuccessStoriesComponent,
      },
    ]),
  ],
})
export class SuccessStoriesModule {}
