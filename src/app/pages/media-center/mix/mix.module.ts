import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixComponent } from './mix.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    MixComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MixComponent,
      },
    ]),
    LazyLoadImageModule
  ],
})
export class MixModule { }
