import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionsServiceComponent } from './institutions-service.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import {CaptchaModule} from 'primeng/captcha';

@NgModule({
  declarations: [InstitutionsServiceComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TabViewModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    InputTextareaModule,
    CaptchaModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: InstitutionsServiceComponent,
      },
    ]),
  ],
})
export class InstitutionsServiceModule {}
