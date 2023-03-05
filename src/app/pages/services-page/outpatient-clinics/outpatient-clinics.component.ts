import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-outpatient-clinics',
  templateUrl: './outpatient-clinics.component.html',
  styleUrls: ['./outpatient-clinics.component.scss']
})
export class OutpatientClinicsComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  constructor(private _homeService:HomeService) {
  }

  ngOnInit(): void {
    this.Services$ = this._homeService.Selector$('Services');
  }

}
