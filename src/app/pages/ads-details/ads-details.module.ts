import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsDetailsComponent } from './ads-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdsDetailsComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:AdsDetailsComponent
      }
    ])
  ]
})
export class AdsDetailsModule { }
