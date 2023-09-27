import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { MediaCenterService } from '../media-center/media-center.service';
import { Observable, map, pipe } from 'rxjs';
import { ServicesHospitalService } from '../services-hospital/services-hospital.service';
import { FormControl } from '@angular/forms';
import { TranslationService } from 'src/assets/i18n';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fixed-top', [
      transition('hidden => shown', animate('300ms ease-in-out')),
      transition('shown => hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  navbarState = 'hidden';
  isActive = false;
  active: any  = 1;
  previousScrollPosition = 0;
  fisrt:any = 0 ;
  isEn = document.dir == 'ltr' ? true : false;
  activeNave$!:Observable<any>;
  LandingPageData$!: Observable<any>;
  constructor(
     public router: Router,
     private _mediaCenterService:MediaCenterService ,
     private _homeService:HomeService ,
     private _translationService: TranslationService,
     private _servicesHospitalService:ServicesHospitalService ,
     private el: ElementRef, private renderer: Renderer2
     ) {}

  complaint(item:any){
   this._servicesHospitalService.updateStore({complaintID:item});
   console.log("itemitemitemitem" , item)
  }

  text:any;
  search = new FormControl();

  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  saveSearch(){
    this.router.navigate(['/search/'+this.search.value]);
   this.toggleSearch();
   this.search.reset();

  }
  ngOnInit(): void {






    this._mediaCenterService.Selector$('activeNave').pipe(map(value=> this.active = value )).subscribe()
    this.active = 1

    const url = window.location.href;
    if (url.includes('home')) {
      this.active = 1;
    }else if(url.includes('sections')){
      this.active = 2;
    }else if(url.includes('media-center') || url.includes('video') || url.includes('mix-details')){
      this.active = 3;
    }else if(url.includes('about-us')){
      this.active = 4;
    }else if(url.includes('beneficiaries')){
      this.active = 6;
    }
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo');

    /*   if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }  */

  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
     if( window.scrollY > 0){
      navbar?.classList.add('header-scrolled' );
    }else{
      navbar?.classList.remove('header-scrolled' );
    }
  }

  getItem(item:any){
    console.log("item", item  );
    if(item.Type == 1){
      if(item.MediaSectionID != 3){
        this.router.navigate(['mix-details/'+item.ID])
      }else{
        this.router.navigate(['/media-center/video/video-main'],{
          queryParams:{
          path: item?.VideoPath
          }
        });
      }
    } else if(item.Type == 2){
    console.log("item :" , item)
    this.router.navigate(['ads-details/'+item.ID])
    }else{
         if(item.ID ==1){
          this.router.navigate(['sections/medical-rehabilitation'])
         }
         else if(item.ID ==2){
          this.router.navigate(['sections/prosthetics'])

         }
         else if(item.ID ==3){
          this.router.navigate(['sections/hearing-balance'])

         }
         else if(item.ID ==4){
          this.router.navigate(['sections/outpatient-clinics'])
         }
         else {
          this.router.navigate(['sections/supportive'])
         }
         this.active = 2;
    }
   }

   // Listen for the scroll event on the window
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
      console.log("window.scrollY" , window.scrollY)
      this.closeNavbar(window.scrollY)
  }

   isNavbarOpen: boolean = false;

   closeNavbar(scrollY?:any) {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar!.classList.contains('show')) {
      navbar!.classList.remove('show');
      if(scrollY < scrollY + 1000){
        navbar!.classList.remove('show');
      }
    }
   }

   lang:any ='';
   Language: string = this._translationService.getSelectedLanguage();
   setLang() {
     if (this.Language == 'en') {
       this.Language = 'ar';
       this.lang = 'AR'
     } else {
       this.Language = 'en';
       this.lang = 'EN'

     }
     this._translationService.setLanguage(this.Language);
     localStorage.getItem(this.Language);
     document.location.reload();
   }


}
