import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { RouterModule } from '@angular/router';
import { MedicalRehabilitationComponent } from './medical-rehabilitation/medical-rehabilitation.component';
import { ProstheticsComponent } from './prosthetics/prosthetics.component';
import { HearingBalanceComponent } from './hearing-balance/hearing-balance.component';
import { OutpatientClinicsComponent } from './outpatient-clinics/outpatient-clinics.component';

@NgModule({
  declarations: [ServicesPageComponent, ProstheticsComponent, HearingBalanceComponent, OutpatientClinicsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesPageComponent,
        children: [
          {
            path: 'medical-rehabilitation',
            component: MedicalRehabilitationComponent,
          },
          {
            path: 'prosthetics',
            component: ProstheticsComponent,
          },
        ],
      },
    ]),
  ],
})
export class ServicesPageModule {}
