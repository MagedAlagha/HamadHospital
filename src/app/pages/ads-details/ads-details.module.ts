import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsDetailsComponent } from './ads-details.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdsDetailsComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AdsDetailsComponent }]),
  ],
})
export class AdsDetailsModule {}
