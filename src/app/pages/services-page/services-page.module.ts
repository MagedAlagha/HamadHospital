import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { MedicalRehabilitationComponent } from './medical-rehabilitation/medical-rehabilitation.component';

@NgModule({
  declarations: [ServicesPageComponent, MedicalRehabilitationComponent],
  imports: [
    CommonModule,
    TabViewModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesPageComponent,
        /* children: [
          {
            path: 'beneficiaries-service',
            loadChildren: () =>
              import(
                '../services-hospital/beneficiaries-service/beneficiaries-service.module'
              ).then((m) => m.BeneficiariesServiceModule),
          },

        ], */
      },
    ]),
  ],
})
export class ServicesPageModule {}
