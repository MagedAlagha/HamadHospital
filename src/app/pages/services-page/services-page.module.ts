import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { RouterModule } from '@angular/router';
import { MedicalRehabilitationComponent } from './medical-rehabilitation/medical-rehabilitation.component';
import { ProstheticsComponent } from './prosthetics/prosthetics.component';
import { HearingBalanceComponent } from './hearing-balance/hearing-balance.component';
import { OutpatientClinicsComponent } from './outpatient-clinics/outpatient-clinics.component';
import { AccordionModule } from 'primeng/accordion';
import { StoriesHomeComponent } from '../stories-home/stories-home.component';
import {TooltipModule} from 'primeng/tooltip';
import { StoriesHomeModule } from '../stories-home/stories-home.module';
import { SupportiveMedicalComponent } from './supportive-medical/supportive-medical.component';
import { ServicesContentComponent } from './services-content/services-content.component';

@NgModule({
  declarations: [
    ServicesPageComponent,
    ProstheticsComponent,
    HearingBalanceComponent,
    OutpatientClinicsComponent,
    MedicalRehabilitationComponent,
    SupportiveMedicalComponent,
    ServicesContentComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    TooltipModule,
    StoriesHomeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesPageComponent,
        children: [
          {
            path: '',
            component: MedicalRehabilitationComponent,
          },
          {
            path: 'medical-rehabilitation',
            component: MedicalRehabilitationComponent,
          },
          {
            path: 'prosthetics',
            component: ProstheticsComponent,
          },
          {
            path: 'hearing-balance',
            component: HearingBalanceComponent,
          },
          {
            path: 'outpatient-clinics',
            component: OutpatientClinicsComponent,
          },
          {
            path: 'supportive',
            component: SupportiveMedicalComponent,
          },
          {
            path: 'services-content',
            component: ServicesContentComponent,
          },
        ],
      },
    ]),
  ],
})
export class ServicesPageModule {}
