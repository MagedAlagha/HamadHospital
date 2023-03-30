import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

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
    LazyLoadImageModule
  ],
})
export class PhotoGalleryModule {}
