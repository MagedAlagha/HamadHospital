import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterService } from './pages/footer/footer.service';
import { HomeService } from './pages/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HamadHospital';
  MainInfo$!: Observable<any>;
  Services$!: Observable<any>;
constructor(private _footerService:FooterService , private _homeService: HomeService){

}
  ngOnInit(): void {
    this._footerService.getStats();
    this.MainInfo$ = this._homeService.Selector$('mainInfo');
    this._homeService.getServicesInHome();


  }


  isShow!: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }





}
