import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalStoryDetailsComponent } from './digital-story-details.component';
import { GalleriaModule } from 'primeng/galleria';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';


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
    LazyLoadImageModule
  ],
})
export class DigitalStoryDetailsModule { }
