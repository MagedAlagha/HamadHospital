import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isActive = false;
  active: any = 1;

  constructor(public router: Router) {}

  ngOnInit(): void {
    const url = window.location.href;
    console.log('url', url);
    if (url.includes('home')) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }

    /*  if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    } */
  }
}
