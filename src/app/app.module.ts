import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { VideoPreviewModalComponent } from './pages/home/Modals/video-preview-modal/video-preview-modal.component';
import { StoriesHomeModule } from './pages/stories-home/stories-home.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { VideoPreviewSliderComponent } from './pages/home/Modals/video-preview-slider/video-preview-slider.component';
import { AutoCompleteFeildComponent } from './shared/auto-complete-feild/auto-complete-feild.component';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    VideoPreviewModalComponent,
    VideoPreviewSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    CarouselModule,
    HttpClientModule,
    ToastModule,
    DialogModule,
    StoriesHomeModule,
    YouTubePlayerModule,
    AutoCompleteFeildComponent,
    SkeletonModule,
    TooltipModule ,
    LazyLoadImageModule,
    ReactiveFormsModule,
    GalleriaModule,
    SwiperModule,
    InputTextModule,
    ScrollToModule.forRoot(),

  ],

  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
