import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-services-hospital',
  templateUrl: './services-hospital.component.html',
  styleUrls: ['./services-hospital.component.scss']
})
export class ServicesHospitalComponent implements OnInit {
  LandingPageData$!:Observable<any>;
  constructor(private _homeService:HomeService) { }

  ngOnInit(): void {
    this.LandingPageData$ = this._homeService.Selector$('LandingPageInfo');
  }

}
