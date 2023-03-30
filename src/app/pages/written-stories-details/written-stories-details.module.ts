import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenStoriesDetailsComponent } from './written-stories-details.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [WrittenStoriesDetailsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild([
      {
        path: '',
        component: WrittenStoriesDetailsComponent,
      },
    ]),
    LazyLoadImageModule
  ],
})
export class WrittenStoriesDetailsModule {}
