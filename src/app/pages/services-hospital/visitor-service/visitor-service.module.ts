import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorServiceComponent } from './visitor-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VisitorServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VisitorServiceComponent,
      },
    ]),
  ],
})
export class VisitorServiceModule {}
