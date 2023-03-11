import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AboutHospitalService } from '../about-hospital.service';

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.component.html',
  styleUrls: ['./beginning.component.scss'],
})
export class BeginningComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  constructor(private _aboutHospitalService: AboutHospitalService) {}
  data: any;
  AboutHospital$!: Observable<any>;
  dataShow$!: Observable<any>;
  ngOnInit(): void {
    this.data = this._aboutHospitalService.dataStore.AboutHospital;
    if (this.data) {
      console.log('this.data' , this.data);
    }

    this.dataShow$ = this._aboutHospitalService
      .Selector$('dataShow')
      .pipe(
        tap((value) => {

          console.log('value123',value);
        })
      );
  }
}
