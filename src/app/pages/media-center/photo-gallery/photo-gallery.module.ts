import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'photo-main',
        component: PhotoGalleryComponent,
      },
    ]),
  ],
})
export class PhotoGalleryModule {}
