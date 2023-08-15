import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { ServicesHospitalService } from '../../services-hospital.service';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss']
})
export class AppointmentBookingComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Form_AppointmentBooking: FormGroup;
  Codes1$!:Observable<any>;
  Codes2$!:Observable<any>;
  disable=true
  constructor(    private fb: FormBuilder,
    private _servicesHospitalService: ServicesHospitalService,
    private messageService: MessageService
) {

  this.Form_AppointmentBooking = fb.group({
    FullName: ['', [Validators.required , Validators.minLength(5)]],
    Email: ['',  Validators.email],
    PhoneNumber:['',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]*$")
    ]],
    Address: ['', Validators.required],
    IdentityNumber: ['',[
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.pattern("^[0-9]*$")
    ]],
    VisitTypeID: ['', Validators.required],
    Appointment: ['', Validators.required],
    DepartmentID: ['', Validators.required],
    TextMessage: [''],
  });
 }

  ngOnInit(): void {
    this._servicesHospitalService.getCodes1();
    this._servicesHospitalService.getCodes2();
    this.Codes1$ = this._servicesHospitalService.Selector$('codes1').pipe(tap(valye=>{
      console.log(valye , 'valye');
    }));
    this.Codes2$ = this._servicesHospitalService.Selector$('codes2').pipe(tap(valye=>{
      console.log(valye , 'valye');
    }));
  }

  saveAppointmentBooking() {
    if (this.Form_AppointmentBooking.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: this.isEn?'There are required fields':'يوجد حقول مطلوبة' ,
      });
    } else {
      this._servicesHospitalService.saveAppointmentBooking({
        ...this.Form_AppointmentBooking.value,
        DepartmentID:
          this.Form_AppointmentBooking.get('DepartmentID')?.value.code,
      });

      this.Form_AppointmentBooking.reset();
    }
  }

  get FullName () {
    return this.Form_AppointmentBooking.get('FullName')
  }
  get Email () {
    return this.Form_AppointmentBooking.get('Email')
  }
  get PhoneNumber () {
    return this.Form_AppointmentBooking.get('PhoneNumber')
  }
  get Address () {
    return this.Form_AppointmentBooking.get('Address')
  }
  get IdentityNumber () {
    return this.Form_AppointmentBooking.get('IdentityNumber')
  }
  get VisitTypeID () {
    return this.Form_AppointmentBooking.get('VisitTypeID')
  }
  get Appointment () {
    return this.Form_AppointmentBooking.get('Appointment')
  }
  get DepartmentID () {
    return this.Form_AppointmentBooking.get('DepartmentID')
  }


  showResponse(event:any) {
    this.disable = false;
}

}
