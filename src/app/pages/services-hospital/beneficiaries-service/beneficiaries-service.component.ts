import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-beneficiaries-service',
  templateUrl: './beneficiaries-service.component.html',
  styleUrls: ['./beneficiaries-service.component.scss'],
})
export class BeneficiariesServiceComponent implements OnInit {
  cities!: any[];
  Form_AppointmentBooking:FormGroup;
  Form_Suggestion:FormGroup;
  Form_Rating:FormGroup;

  constructor(private fb:FormBuilder , private _servicesHospitalService:ServicesHospitalService) {
    this.Form_AppointmentBooking = fb.group({
     FullName:[''],
     Email:[''],
     PhoneNumber:[''],
     Address:[''],
     Appointment:[''],
     DepartmentID:[''],
     TextMessage:[''],
   })

    this.Form_Suggestion = fb.group({
     FullName:[''],
     Email:[''],
     PhoneNumber:[''],
     Address:[''],
     TextMessage:[''],
   })

    this.Form_Rating = fb.group({
     FullName:[''],
     Email:[''],
     PhoneNumber:[''],
     Address:[''],
     hospitalRating:[''],
   })


  }

  ngOnInit(): void {
    this.cities = [
      { name: 'العظام', code: '1' },
      { name: 'القلب', code: '2' },
      { name: 'الاطراف الصناعية', code: '3' },
      { name: 'العيون', code: '4' },
    ];
  }

  saveAppointmentBooking(){
  this._servicesHospitalService.saveAppointmentBooking({
    ...this.Form_AppointmentBooking.value ,
    DepartmentID:this.Form_AppointmentBooking.get('DepartmentID')?.value.code
  });

console.log(this.Form_AppointmentBooking.value)
}
  saveSuggestion(){
    this._servicesHospitalService.saveSuggestion(this.Form_Suggestion.value);
  }
  saveRating(){
    this._servicesHospitalService.saveRating(this.Form_Rating.value);
  }

}
