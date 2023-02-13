import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsDetailsComponent,
      },
    ]),
  ],
})
export class NewsDetailsModule {}
