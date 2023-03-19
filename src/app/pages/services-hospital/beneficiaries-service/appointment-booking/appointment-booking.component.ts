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
  Form_AppointmentBooking: FormGroup;
  Codes1$!:Observable<any>;
  Codes2$!:Observable<any>;
  constructor(    private fb: FormBuilder,
    private _servicesHospitalService: ServicesHospitalService,
    private messageService: MessageService
) {

  this.Form_AppointmentBooking = fb.group({
    FullName: ['', Validators.required],
    Email: ['',  [Validators.required, Validators.email]],
    PhoneNumber:['',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]],
    Address: ['', Validators.required],
    IdentityNumber: ['',[
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9)
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
        detail: 'جميع الحقول مطلوبة',
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



}
