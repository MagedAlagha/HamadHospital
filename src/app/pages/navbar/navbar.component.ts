import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

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
  active: any = 1;
  previousScrollPosition = 0;
  fisrt:any = 0 ;
  constructor(public router: Router) {}

  ngOnInit(): void {

    const url = window.location.href;
    if (url.includes('home')) {
      this.active = 1;
    }else if(url.includes('sections')){
      this.active = 2;
    }else if(url.includes('media-center')){
      this.active = 3;
    }else if(url.includes('about-us')){
      this.active = 4;
    }else if(url.includes('beneficiaries')){
      this.active = 6;
    }


      /*  if (window.scrollY > 100) {
      navbar.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }
 */
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
     const currentScrollPosition = window.pageYOffset;
    const isScrollingUp = currentScrollPosition < this.previousScrollPosition;

    /* const navbar = document.querySelector('.navbar');
    if (isScrollingUp || currentScrollPosition === 0) {
      navbar?.classList.add('fixed-top', 'show');
    } else {
      navbar?.classList.remove('fixed-top', 'show');
    }

    this.previousScrollPosition = currentScrollPosition; */

  }
}
