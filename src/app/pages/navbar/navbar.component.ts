import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { MediaCenterService } from '../media-center/media-center.service';
import { Observable, map, pipe } from 'rxjs';

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
  activeNave$!:Observable<any>;
  constructor(public router: Router , private _mediaCenterService:MediaCenterService) {}

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


    /*   if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }  */

  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
   /*   const currentScrollPosition = window.pageYOffset;
    const isScrollingUp = currentScrollPosition < this.previousScrollPosition; */

    const navbar = document.querySelector('.navbar');
  /*   if (isScrollingUp || currentScrollPosition === 0) {
      navbar?.classList.add( 'fixed-top' , 'show');
    } else {
      navbar?.classList.remove('fixed-top', 'show');
    }
    this.previousScrollPosition = currentScrollPosition; */

     if( window.scrollY > 0){
      navbar?.classList.add('header-scrolled' );
   /*    navbar?.classList.remove( 'bg-white-opacity'); */
    }else{
      navbar?.classList.remove('header-scrolled' );
     /*  navbar?.classList.add( 'bg-white-opacity'); */
    }


  }
}
