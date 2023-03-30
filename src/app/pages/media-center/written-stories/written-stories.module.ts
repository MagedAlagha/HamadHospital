import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenStoriesComponent } from './written-stories.component';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    LazyLoadImageModule
  ],
})
export class WrittenStoriesModule {}
