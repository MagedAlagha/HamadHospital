import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenStoriesComponent } from './written-stories.component';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [WrittenStoriesComponent],
  imports: [
    CommonModule,
    GalleriaModule,
    RouterModule.forChild([
      {
        path: '',
        component: WrittenStoriesComponent,
      },
    ]),
  ],
})
export class WrittenStoriesModule {}
