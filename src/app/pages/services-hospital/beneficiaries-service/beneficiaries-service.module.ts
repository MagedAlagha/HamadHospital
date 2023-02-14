import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiariesServiceComponent } from './beneficiaries-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BeneficiariesServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BeneficiariesServiceComponent,
      },
    ]),
  ],
})
export class BeneficiariesServiceModule {}
