import { Component, OnInit } from '@angular/core';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.scss']
})
export class ServicesContentComponent implements OnInit {
  dataShow$!:Observable<any>;
  OutpatientClinicsDepartmentsServices$!: Observable<any>;

  constructor(private _outpatientClinicsService:OutpatientClinicsService) { }

  ngOnInit(): void {

    this.dataShow$ = this._outpatientClinicsService
      .Selector$('dataShow')
      .pipe(
        tap((value) => {

        })
      );

      this.OutpatientClinicsDepartmentsServices$ = this._outpatientClinicsService.Selector$('OutpatientClinicsDepartmentsServices').pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.IsActive;
          });
        })
      );
  }


}
