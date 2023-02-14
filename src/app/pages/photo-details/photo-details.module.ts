import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from '../photo-details/photo-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotoDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PhotoDetailsComponent,
      },
    ]),
  ],
})
export class PhotoDetailsModule {}
