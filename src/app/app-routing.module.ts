import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'media-center',
    loadChildren: () =>
      import('./pages/media-center/media-center.module').then(
        (m) => m.MediaCenterModule
      ),
  },
  {
    path: 'services-form',
    loadChildren: () =>
      import('./pages/services-hospital/services-hospital.module').then(
        (m) => m.ServicesHospitalModule
      ),
  },
  {
    path: 'sections',
    loadChildren: () =>
      import('./pages/services-page/services-page.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: 'news-details/:id',
    loadChildren: () =>
      import('./pages/news-details/news-details.module').then(
        (m) => m.NewsDetailsModule
      ),
  },
  {
    path: 'photo-details/:id',
    loadChildren: () =>
      import('./pages/photo-details/photo-details.module').then(
        (m) => m.PhotoDetailsModule
      ),
  },
  {
    path: 'digital-story-details/:id',
    loadChildren: () =>
      import('./pages/digital-story-details/digital-story-details.module').then(
        (m) => m.DigitalStoryDetailsModule
      ),
  },
  {
    path: 'video-details',
    loadChildren: () =>
      import('./pages/video-details/video-details.module').then(
        (m) => m.VideoDetailsModule
      ),
  },
  {
    path: 'medical-article-details/:id',
    loadChildren: () =>
      import(
        './pages/medical-article-details/medical-article-details.module'
      ).then((m) => m.MedicalArticleDetailsModule),
  },
  {
    path: 'visual-stories-details/:id',
    loadChildren: () =>
      import(
        './pages/visual-stories-details/visual-stories-details.module'
      ).then((m) => m.VisualStoriesDetailsModule),
  },
  {
    path: 'written-stories-details/:id',
    loadChildren: () =>
      import(
        './pages/written-stories-details/written-stories-details.module'
      ).then((m) => m.WrittenStoriesDetailsModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-hospital/about-hospital.module').then(
        (m) => m.AboutHospitalModule
      ),
  },
  {
    path: 'mix-details/:id',
    loadChildren: () =>
      import('./pages/mix-details/mix-details.module').then(
        (m) => m.MixDetailsModule
      ),
  },
  {
    path: 'letter-details/:id',
    loadChildren: () =>
      import('./pages/newsletter-details/newsletter-details.module').then(
        (m) => m.NewsletterDetailsModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
