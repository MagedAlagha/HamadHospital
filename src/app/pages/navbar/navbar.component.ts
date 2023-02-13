import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  inActive = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('contact-us') || url.includes('home')) {
      this.inActive = true;
    } else {
      this.inActive = false;
    }
  }
}
