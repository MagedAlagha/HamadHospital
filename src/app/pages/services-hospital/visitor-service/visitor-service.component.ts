import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-visitor-service',
  templateUrl: './visitor-service.component.html',
  styleUrls: ['./visitor-service.component.scss'],
})
export class VisitorServiceComponent implements OnInit {
  Form_Visitors:FormGroup;
  cities!: any[];
  constructor(private fb:FormBuilder , private _servicesHospitalService:ServicesHospitalService) {
    this.Form_Visitors = fb.group({
      FullName:[''],
      Email:[''],
      PhoneNumber:[''],
      Address:[''],
      CommunicationReason:[''],
      TextMessage:[''],
    })
  }

  ngOnInit(): void {
    this.cities = [
      { Name: 'اقتراح', Code: '1' },
      { Name: 'ملاحظة', Code: '2' },
      { Name: 'شكوى', Code: '3' },
      {Name: 'استفسار ', Code: '4' },
    ];
  }

  saveVisitors(){
     this._servicesHospitalService.saveVisitors({
      ...this.Form_Visitors.value ,
      CommunicationReason:this.Form_Visitors.get('CommunicationReason')?.value.Code
    });

  }

}
