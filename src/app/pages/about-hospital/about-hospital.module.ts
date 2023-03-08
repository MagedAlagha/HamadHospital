import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHospitalComponent } from './about-hospital.component';
import { RouterModule } from '@angular/router';
import { BeginningComponent } from './beginning/beginning.component';

@NgModule({
  declarations: [AboutHospitalComponent , BeginningComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutHospitalComponent,
        children: [
          {
            path: '',
            component: BeginningComponent,
          },
          {
            path: 'beginning',
            component: BeginningComponent,
          },
        ],
      },
    ]),
  ],
})
export class AboutHospitalModule {}
