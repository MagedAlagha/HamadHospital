import { Component, HostListener, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FooterService } from './pages/footer/footer.service';
import { HomeService } from './pages/home/home.service';
import { MediaCenterService } from './pages/media-center/media-center.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HamadHospital';
  LandingPageData$!: Observable<any>;
  Services$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  isEn_LandingPage = document.dir == 'ltr' ? "en" : "ar";
  isScroll:boolean = false;
  constructor(
    private _footerService: FooterService,
    private _homeService: HomeService,
    private _mediaSectionsItems:MediaCenterService
  ) {}
  ngOnInit(): void {


    this._footerService.getStats();
    this._homeService.getServicesInHome();
    this._homeService.getLandingPageInfo(this.isEn_LandingPage);
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo').pipe(map(value=>value));
  }

  isShow!: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    /* console.log('[scroll]', scrollPosition); */

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
      this.isScroll = true
    } else {
      this.isShow = false;
      this.isScroll = false
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
