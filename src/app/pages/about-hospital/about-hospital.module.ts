import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHospitalComponent } from './about-hospital.component';
import { RouterModule } from '@angular/router';
import { BeginningComponent } from './beginning/beginning.component';
import { VisionComponent } from './vision/vision.component';
import { MessageComponent } from './message/message.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  declarations: [AboutHospitalComponent],
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
          {
            path: 'vision',
            component: VisionComponent,
          },
          {
            path: 'message',
            component: MessageComponent,
          },
          {
            path: 'goals',
            component: GoalsComponent,
          },
        ],
      },
    ]),
  ],
})
export class AboutHospitalModule {}
