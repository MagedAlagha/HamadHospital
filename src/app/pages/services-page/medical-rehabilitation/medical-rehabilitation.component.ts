import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { MedicalRehabilitationService } from './medical-rehabilitation.service';

@Component({
  selector: 'app-medical-rehabilitation',
  templateUrl: './medical-rehabilitation.component.html',
  styleUrls: ['./medical-rehabilitation.component.scss'],
})
export class MedicalRehabilitationComponent implements OnInit {
  constructor(
    private _medicalRehabilitationService: MedicalRehabilitationService,
    private _homeService: HomeService
  ) {}
  MedicalRehabilitationFeatures$!: Observable<any>;
  MedicalRehabilitationServices$!: Observable<any>;
  Services$!: Observable<any>;

  isEn = document.dir == 'ltr' ? true : false;

  ngOnInit(): void {
    this._medicalRehabilitationService.getMedicalRehabilitationFeaturesInHome();
    this._medicalRehabilitationService.getMedicalRehabilitationServices();
    this.MedicalRehabilitationFeatures$ = this._medicalRehabilitationService
      .Selector$('MedicalRehabilitationFeatures')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.IsActive;
          });
        })
      );

    this.MedicalRehabilitationServices$ =
      this._medicalRehabilitationService.Selector$('MedicalRehabilitationServices').pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.IsActive;
          });
        })
      );;

    this.Services$ = this._homeService.Selector$('Services');
  }
}
