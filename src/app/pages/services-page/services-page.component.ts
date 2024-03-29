import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HomeService } from '../home/home.service';
import { ServicesPageService } from './services-page.service';
import { OutpatientClinicsService } from './outpatient-clinics/outpatient-clinics.service';
import { environment } from 'src/environments/environment';

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
  baseUrl = environment.FileUrl
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
      this._servicesPageService.updateStore({ bgSection: this.Services?.MedicalRehabilitationBackgroundPath });
      this.successStory(1)
    } else if (url.includes('prosthetics')) {
      this.active = 2;
      this.successStory(2)

    } else if (url.includes('hearing-balance')) {
      this.active = 3;
      this.successStory(3)

    } else if (url.includes('outpatient-clinics')) {
      this.active = 4;
      this.successStory(4)

    } else if (url.includes('supportive')) {
      this.active = 5;
      this.successStory(5)
    }
  }
  setBackGround(active: any) {
    switch (active) {
      case 1:
        this.background = this.Services.MedicalRehabilitationBackgroundPath;
        this.successStory(1)
        break;
      case 2:
        this.background = this.Services.ProstheticsBackgroundPath
        this.successStory(2)
        break;
      case 3:
        this.background = this.Services.HearingBackgroundPath;
        this.successStory(3)
        break;
      case 4:
        this.background = this.Services.OutpatientClinicsBackgroundPath;
        this.successStory(4)
        break;
      case 5:
        this.background = this.Services.SupportiveMedicalBackgroundPath;
        this.successStory(5)
        break;
    }
  }

  successStory(id:any){
    this._servicesPageService.updateStore({successStory:id})
  }


/* changeBackgroundImage(id:any){
    console.log(this.background , "this.background")
  }*/


}
/* MedicalRehabilitationBackgroundPath
ProstheticsBackgroundPath
HearingBackgroundPath
OutpatientClinicsBackgroundPath
SupportiveMedicalBackgroundPath */
