import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule ,
    InputTextModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:AdsComponent
      }
    ])
  ]
})
export class AdsModule { }
