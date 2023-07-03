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
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { RatingComponent } from './rating/rating.component';
import {CaptchaModule} from 'primeng/captcha';

@NgModule({
  declarations: [BeneficiariesServiceComponent, AppointmentBookingComponent, SuggestionComponent, RatingComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TabViewModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextareaModule,
    RatingModule,
    CaptchaModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BeneficiariesServiceComponent,
      },
    ]),
  ],
})
export class BeneficiariesServiceModule {}
