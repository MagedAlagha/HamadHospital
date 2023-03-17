import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHospitalComponent } from './services-hospital.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServicesHospitalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesHospitalComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../services-hospital/beneficiaries-service/beneficiaries-service.module'
              ).then((m) => m.BeneficiariesServiceModule),
          },
          {
            path: 'beneficiaries',
            loadChildren: () =>
              import(
                '../services-hospital/beneficiaries-service/beneficiaries-service.module'
              ).then((m) => m.BeneficiariesServiceModule),
          },
          {
            path: 'visitor',
            loadChildren: () =>
              import(
                '../services-hospital/visitor-service/visitor-service.module'
              ).then((m) => m.VisitorServiceModule),
          },
          {
            path: 'institutions',
            loadChildren: () =>
              import(
                '../services-hospital/institutions-service/institutions-service.module'
              ).then((m) => m.InstitutionsServiceModule),
          },
        ],
      },
    ]),
  ],
})
export class ServicesHospitalModule {}
