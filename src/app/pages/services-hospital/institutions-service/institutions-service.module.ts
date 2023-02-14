import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionsServiceComponent } from './institutions-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InstitutionsServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InstitutionsServiceComponent,
      },
    ]),
  ],
})
export class InstitutionsServiceModule {}
