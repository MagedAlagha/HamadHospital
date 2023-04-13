import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsletterComponent,
      },
    ]),
    LazyLoadImageModule
  ],
})
export class NewsletterModule { }
