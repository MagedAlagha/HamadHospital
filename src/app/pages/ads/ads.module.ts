import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule ,
    InputTextModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild([
      {
        path:'',
        component:AdsComponent
      }
    ])
  ]
})
export class AdsModule { }
