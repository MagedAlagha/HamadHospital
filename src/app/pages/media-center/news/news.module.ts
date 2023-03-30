import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'news-main',
        component: NewsComponent,
      },
    ]),
    LazyLoadImageModule
  ],
})
export class NewsModule {}
