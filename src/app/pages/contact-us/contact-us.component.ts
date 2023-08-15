import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs';
import { ServicesHospitalService } from '../services-hospital/services-hospital.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;

  LandingPageData$!:Observable<any>;
  constructor(private _homeService:HomeService , private _servicesHospitalService:ServicesHospitalService) { }

  ngOnInit(): void {
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo');
  }

}
