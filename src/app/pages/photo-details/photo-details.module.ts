import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from '../photo-details/photo-details.component';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [PhotoDetailsComponent],
  imports: [
    CommonModule,
    GalleriaModule,
    RouterModule.forChild([
      {
        path: '',
        component: PhotoDetailsComponent,
      },
    ]),
  ],
})
export class PhotoDetailsModule {}
