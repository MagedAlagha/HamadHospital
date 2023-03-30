import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalArticleDetailsComponent } from './medical-article-details.component';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { TooltipModule } from 'primeng/tooltip';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [MedicalArticleDetailsComponent],
  imports: [
    CommonModule,
    ClipboardModule ,
    TooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: MedicalArticleDetailsComponent,
      },
    ]),
    LazyLoadImageModule
  ],
})
export class MedicalArticleDetailsModule {}
