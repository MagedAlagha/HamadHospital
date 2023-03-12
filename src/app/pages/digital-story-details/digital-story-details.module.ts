import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalStoryDetailsComponent } from './digital-story-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DigitalStoryDetailsComponent],
  imports: [
    CommonModule,
    GalleriaModule,
    RouterModule.forChild([
      {
        path: '',
        component: DigitalStoryDetailsComponent,
      },
    ]),
  ],
})
export class DigitalStoryDetailsModule { }
