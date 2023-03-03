import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-institutions-service',
  templateUrl: './institutions-service.component.html',
  styleUrls: ['./institutions-service.component.scss'],
})
export class InstitutionsServiceComponent implements OnInit {
  Form_PressCoverageRequest:FormGroup
  Form_VisitRequest:FormGroup
  constructor(private fb:FormBuilder , private _servicesHospitalService:ServicesHospitalService) {
    this.Form_PressCoverageRequest = fb.group({
     FullName:[''],
     Email:[''],
     PhoneNumber:[''],
     Address:[''],
     TextMessage:[''],
   })
    this.Form_VisitRequest = fb.group({
     FullName:[''],
     Email:[''],
     PhoneNumber:[''],
     Address:[''],
     TextMessage:[''],
   })
  }
  savePressCoverageRequest(){
    this._servicesHospitalService.savePressCoverageRequest(this.Form_PressCoverageRequest.value);
  }
  saveVisitRequest(){
    this._servicesHospitalService.saveVisitRequest(this.Form_VisitRequest.value);
  }
  ngOnInit(): void {}
}
