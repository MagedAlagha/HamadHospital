import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AboutHospitalService } from '../about-hospital.service';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  isEn = document.dir == 'ltr' ? true : false;
  constructor(private _aboutHospitalService:AboutHospitalService) { }
  AboutHospital$!: Observable<any>;
  ngOnInit(): void {
    this.AboutHospital$ =
    this._aboutHospitalService.Selector$('AboutHospital').pipe(tap(value=>{
      console.log(value);
    }));
  }
}
