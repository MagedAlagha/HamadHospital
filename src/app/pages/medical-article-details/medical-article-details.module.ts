import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalArticleDetailsComponent } from './medical-article-details.component';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { TooltipModule } from 'primeng/tooltip';

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
  ],
})
export class MedicalArticleDetailsModule {}
