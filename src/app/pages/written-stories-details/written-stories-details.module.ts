import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenStoriesDetailsComponent } from './written-stories-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WrittenStoriesDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WrittenStoriesDetailsComponent,
      },
    ]),
  ],
})
export class WrittenStoriesDetailsModule {}
