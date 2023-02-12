import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCenterComponent } from './media-center.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MediaCenterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
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
        ],
      },
    ]),
  ],
})
export class MediaCenterModule {}
