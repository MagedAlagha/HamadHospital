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
    path: 'news-details',
    loadChildren: () =>
      import('./pages/news-details/news-details.module').then(
        (m) => m.NewsDetailsModule
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
