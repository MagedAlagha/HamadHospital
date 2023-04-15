import { Component, OnInit } from '@angular/core';
import { OutpatientClinicsService } from '../outpatient-clinics/outpatient-clinics.service';

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.scss']
})
export class ServicesContentComponent implements OnInit {

  constructor(private _outpatientClinicsService:OutpatientClinicsService) { }

  ngOnInit(): void {
  }


}
