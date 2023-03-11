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
    path: 'services',
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
    path: 'video-details',
    loadChildren: () =>
      import('./pages/video-details/video-details.module').then(
        (m) => m.VideoDetailsModule
      ),
  },
  {
    path: 'medical-article-details',
    loadChildren: () =>
      import(
        './pages/medical-article-details/medical-article-details.module'
      ).then((m) => m.MedicalArticleDetailsModule),
  },
  {
    path: 'visual-stories-details',
    loadChildren: () =>
      import(
        './pages/visual-stories-details/visual-stories-details.module'
      ).then((m) => m.VisualStoriesDetailsModule),
  },
  {
    path: 'written-stories-details',
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
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
