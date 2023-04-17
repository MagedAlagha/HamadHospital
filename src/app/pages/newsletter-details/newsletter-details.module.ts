import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterDetailsComponent } from '../newsletter-details/newsletter-details.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    NewsletterDetailsComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsletterDetailsComponent,
      },
    ]),
    LazyLoadImageModule ,
  ],
})
export class NewsletterDetailsModule { }
