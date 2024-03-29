import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorServiceComponent } from './visitor-service.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule } from '@angular/forms';
import {CaptchaModule} from 'primeng/captcha';

@NgModule({
  declarations: [VisitorServiceComponent],
  imports: [
    CommonModule,
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
        component: VisitorServiceComponent,
      },
    ]),
  ],
})
export class VisitorServiceModule {}
