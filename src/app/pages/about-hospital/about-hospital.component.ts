import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AboutHospitalService } from './about-hospital.service';

@Component({
  selector: 'app-about-hospital',
  templateUrl: './about-hospital.component.html',
  styleUrls: ['./about-hospital.component.scss'],
})
export class AboutHospitalComponent implements OnInit {
  active: any = 1;
  AboutHospital$!: Observable<any>;
  constructor(private _aboutHospitalService:AboutHospitalService) {}

  ngOnInit(): void {
    this._aboutHospitalService.getAboutHospital();
    this.AboutHospital$ =
            this._aboutHospitalService.Selector$('AboutHospital').pipe(tap(value=>{
              console.log(value);
            }));
  }


}
