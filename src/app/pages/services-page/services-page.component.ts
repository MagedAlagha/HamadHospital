import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  active: any = 1;
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  constructor(private _homeService:HomeService) {
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.Services$ = this._homeService.Selector$('Services');


    const url = window.location.href;

    if (url.includes('medical-rehabilitation')) {
      this.active = 1;
    }else if(url.includes('prosthetics')){
      this.active = 2;
    }else if(url.includes('hearing-balance')){
      this.active = 3;
    }else if(url.includes('outpatient-clinics')){
      this.active = 4;
    }else if(url.includes('beneficiaries')){
      this.active = 6;
    }

  }
}
