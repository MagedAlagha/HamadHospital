import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule ,
    InputTextModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild([
      {
        path:'',
        component:SearchComponent
      }
    ])
  ]
})
export class SearchModule { }
