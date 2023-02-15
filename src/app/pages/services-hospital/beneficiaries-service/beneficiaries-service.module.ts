import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiariesServiceComponent } from './beneficiaries-service.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [BeneficiariesServiceComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TabViewModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextareaModule,
    RatingModule,
    RouterModule.forChild([
      {
        path: '',
        component: BeneficiariesServiceComponent,
      },
    ]),
  ],
})
export class BeneficiariesServiceModule {}
