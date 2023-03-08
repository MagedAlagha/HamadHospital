import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AboutHospitalService } from './about-hospital.service';

@Component({
  selector: 'app-about-hospital',
  templateUrl: './about-hospital.component.html',
  styleUrls: ['./about-hospital.component.scss'],
})
export class AboutHospitalComponent implements OnInit {
  active: any ;
  AboutHospital$!: Observable<any>;
  constructor(private _aboutHospitalService: AboutHospitalService) {}
  isEn = document.dir == 'ltr' ? true : false;
  ngOnInit(): void {
    this._aboutHospitalService.getAboutHospital();
    this.AboutHospital$ = this._aboutHospitalService
      .Selector$('AboutHospital')
      .pipe(
        tap((value) => {
          console.log(value);
          this.active = value[0]?.ID
          console.log("data 222" , value[0]?.ID);
        })
      );

  }
  storeData(item: any) {
    this._aboutHospitalService.updateStore({dataShow:item});
    const data = this._aboutHospitalService.dataStore.dataShow;
    if (data) {

      this.active = data.ID
    }
  }
}
