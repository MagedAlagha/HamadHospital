import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../home/home.service';
import { ServicesHospitalService } from './services-hospital.service';

@Component({
  selector: 'app-services-hospital',
  templateUrl: './services-hospital.component.html',
  styleUrls: ['./services-hospital.component.scss']
})
export class ServicesHospitalComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  LandingPageData$!:Observable<any>;
  constructor(private _homeService:HomeService , private _servicesHospitalService:ServicesHospitalService) { }

  ngOnInit(): void {
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo');
  }

}
