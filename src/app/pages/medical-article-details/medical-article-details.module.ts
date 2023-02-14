import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalArticleDetailsComponent } from './medical-article-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MedicalArticleDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MedicalArticleDetailsComponent,
      },
    ]),
  ],
})
export class MedicalArticleDetailsModule {}
