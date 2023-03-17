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
import { StoriesHomeComponent } from './pages/stories-home/stories-home.component';
import { InterceptorService } from './interceptor.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ParallaxComponent } from './pages/parallax/parallax.component';
import { DialogModule } from 'primeng/dialog';
import { VideoPreviewModalComponent } from './pages/home/Modals/video-preview-modal/video-preview-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ParallaxComponent,
    VideoPreviewModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    CarouselModule,
    HttpClientModule,
    StoriesHomeComponent,
    ToastModule,
    DialogModule,

  ],
  exports: [StoriesHomeComponent],
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
