import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details.component';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { TooltipModule } from 'primeng/tooltip';
import { GalleriaModule } from 'primeng/galleria';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [NewsDetailsComponent],
  imports: [
    CommonModule,
    ClipboardModule ,
    TooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsDetailsComponent,
      },
    ]),
    GalleriaModule,
    LazyLoadImageModule
  ],
})
export class NewsDetailsModule {}
