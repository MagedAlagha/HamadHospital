import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { MedicalRehabilitationService } from './medical-rehabilitation.service';

@Component({
  selector: 'app-medical-rehabilitation',
  templateUrl: './medical-rehabilitation.component.html',
  styleUrls: ['./medical-rehabilitation.component.scss'],
})
export class MedicalRehabilitationComponent implements OnInit {
  constructor(
    private _medicalRehabilitationService: MedicalRehabilitationService , private  _homeService:HomeService
  ) {}
  MedicalRehabilitationFeatures$!: Observable<any>;
  ProstheticsSearch$!: Observable<any>;
  Services$!: Observable<any>;

  isEn = document.dir == 'ltr' ? true : false;

  ngOnInit(): void {
    this._medicalRehabilitationService.getMedicalRehabilitationFeaturesInHome();
    this._medicalRehabilitationService.getProstheticsSearch();

    this.MedicalRehabilitationFeatures$ =
      this._medicalRehabilitationService.Selector$(
        'MedicalRehabilitationFeatures'
      );
    this.ProstheticsSearch$ =
      this._medicalRehabilitationService.Selector$('ProstheticsSearch');

      this.Services$ = this._homeService.Selector$('Services');
  }



}
