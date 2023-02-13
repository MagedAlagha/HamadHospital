import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalArticlesComponent } from './medical-articles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MedicalArticlesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'medical-articles-main',
        component: MedicalArticlesComponent,
      },
    ]),
  ],
})
export class MedicalArticlesModule {}
