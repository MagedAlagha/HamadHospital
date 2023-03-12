import { Component, OnInit } from '@angular/core';
import { map, Observable, tap, filter } from 'rxjs';
import { AboutHospitalService } from './about-hospital.service';

@Component({
  selector: 'app-about-hospital',
  templateUrl: './about-hospital.component.html',
  styleUrls: ['./about-hospital.component.scss'],
})
export class AboutHospitalComponent implements OnInit {
  active: any;
  AboutHospital$!: Observable<any>;
  constructor(private _aboutHospitalService: AboutHospitalService) {}
  isEn = document.dir == 'ltr' ? true : false;
  ngOnInit(): void {
    this._aboutHospitalService.getAboutHospital();
    this.AboutHospital$ = this._aboutHospitalService
      .Selector$('AboutHospital').pipe(tap(value=>{
        this.active = value[0]?.ID;
      }))
      // .pipe(
      //   // filter(value => (value && Array?.isArray(value) && value?.length)),
      //   map((value) => {
      //     console.log("----:",value);
      //     if (value && Array?.isArray(value) && value?.length) {
      //       this.active = value[0]?.ID;
      //       console.log('value [0]', value[0]);
      //       // this._aboutHospitalService.updateStore({dataShow:value[0]});
      //       this.storeData(value[0])
      //     }
      //     return value;
      //   })
      // );

  }
  storeData(item: any) {
    this._aboutHospitalService.updateStore({ dataShow: item });
    const data = item;
    if (data) {
      this.active = data.ID;
    }
  }
}
