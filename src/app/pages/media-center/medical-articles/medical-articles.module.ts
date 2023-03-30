import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalArticlesComponent } from './medical-articles.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    LazyLoadImageModule
  ],
})
export class MedicalArticlesModule {}
