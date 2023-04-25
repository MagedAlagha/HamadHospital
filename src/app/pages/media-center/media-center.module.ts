import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCenterComponent } from './media-center.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MediaCenterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MediaCenterComponent,
        children: [
          {
            path: 'news',
            loadChildren: () =>
              import('../media-center/news/news.module').then(
                (m) => m.NewsModule
              ),
          },
          {
            path: 'photo',
            loadChildren: () =>
              import('../media-center/photo-gallery/photo-gallery.module').then(
                (m) => m.PhotoGalleryModule
              ),
          },
          {
            path: 'video',
            loadChildren: () =>
              import('../media-center/video-gallery/video-gallery.module').then(
                (m) => m.VideoGalleryModule
              ),
          },
          {
            path: 'medical-articles',
            loadChildren: () =>
              import(
                '../media-center/medical-articles/medical-articles.module'
              ).then((m) => m.MedicalArticlesModule),
          },
          {
            path: 'press-stories',
            loadChildren: () =>
              import(
                '../media-center/visual-stories/visual-stories.module'
              ).then((m) => m.VisualStoriesModule),
          },
          {
            path: 'visual-stories',
            loadChildren: () =>
              import(
                '../media-center/written-stories/written-stories.module'
              ).then((m) => m.WrittenStoriesModule),
          },
          {
            path: 'mix',
            loadChildren: () =>
              import('./mix/mix.module').then((m) => m.MixModule),
          },
          {
            path: 'letter',
            loadChildren: () =>
              import('./newsletter/newsletter.module').then(
                (m) => m.NewsletterModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class MediaCenterModule {}
