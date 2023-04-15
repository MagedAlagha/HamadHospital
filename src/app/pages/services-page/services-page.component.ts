import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HomeService } from '../home/home.service';
import { ServicesPageService } from './services-page.service';
import { OutpatientClinicsService } from './outpatient-clinics/outpatient-clinics.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  active: any = 1;
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  bgSection$!: Observable<any>;
  background: any;
  bg:any;
  constructor(
    private _homeService: HomeService,
    private _servicesPageService: ServicesPageService ,
    private _outpatientClinicsService:OutpatientClinicsService
  ) {}
  Services: any;
  ngOnInit(): void {
    this._outpatientClinicsService.getOutpatientClinicsDepartmentsServices();

   ;
   /*  this.bgSection$ = this._servicesPageService.Selector$('bgSection').pipe(tap(value=>{
      console.log('value 111111111111' , value) ;
    })); */
    this.Services$ = this._homeService.Selector$('Services').pipe(
      tap((value) => {
        this.Services = value;
        console.log("value ......" , value);
         this.setBackGround(this.active);
      })
    );


    const url = window.location.href;

    if (url.includes('rehabilitation')) {
      this.active = 1;
      this._servicesPageService.updateStore({ bgSection: this.Services.MedicalRehabilitationBackgroundPath });
    } else if (url.includes('prosthetics')) {
      this.active = 2;
    } else if (url.includes('hearing-balance')) {
      this.active = 3;
    } else if (url.includes('outpatient-clinics')) {
      this.active = 4;
    } else if (url.includes('supportive')) {
      this.active = 5;
    }
  }
  setBackGround(active: any) {
    switch (active) {
      case 1:
        this.background = this.Services.MedicalRehabilitationBackgroundPath;
        break;
      case 2:
        this.background = this.Services.ProstheticsBackgroundPath
        break;
      case 3:
        this.background = this.Services.HearingBackgroundPath
        break;
      case 4:
        this.background = this.Services.OutpatientClinicsBackgroundPath;
        break;
      case 5:
        this.background = this.Services.SupportiveMedicalBackgroundPath
        break;
    }
  }


/*   changeBackgroundImage(id:any){
    console.log(this.background , "this.background")
  } */


}
/* MedicalRehabilitationBackgroundPath
ProstheticsBackgroundPath
HearingBackgroundPath
OutpatientClinicsBackgroundPath
SupportiveMedicalBackgroundPath */
