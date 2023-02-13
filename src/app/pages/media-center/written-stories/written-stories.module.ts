import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenStoriesComponent } from './written-stories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WrittenStoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WrittenStoriesComponent,
      },
    ]),
  ],
})
export class WrittenStoriesModule {}
