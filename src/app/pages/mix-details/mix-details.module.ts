import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixDetailsComponent } from './mix-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    MixDetailsComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    RouterModule.forChild([
      {
        path: '',
        component: MixDetailsComponent,
      },
    ]),
    LazyLoadImageModule
  ],
})
export class MixDetailsModule { }
