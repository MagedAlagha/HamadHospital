import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-beneficiaries-service',
  templateUrl: './beneficiaries-service.component.html',
  styleUrls: ['./beneficiaries-service.component.scss'],
})
export class BeneficiariesServiceComponent implements OnInit {
  cities!: any[];
  Form_AppointmentBooking: FormGroup;
  Form_Suggestion: FormGroup;
  Form_Rating: FormGroup;

  constructor(
    private fb: FormBuilder,
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
      Appointment: ['', Validators.required],
      DepartmentID: ['', Validators.required],
      TextMessage: ['', Validators.required],
    });

    this.Form_Suggestion = fb.group({
      FullName: ['', Validators.required],
      Email: ['',  [Validators.required, Validators.email]],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      Address: ['', Validators.required],
      TextMessage: ['', Validators.required],
    });

    this.Form_Rating = fb.group({
      FullName: ['', Validators.required],
      Email: ['',  [Validators.required, Validators.email]],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      Address: ['', Validators.required],
      hospitalRating: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.cities = [
      { name: 'العظام', code: '1' },
      { name: 'القلب', code: '2' },
      { name: 'الاطراف الصناعية', code: '3' },
      { name: 'العيون', code: '4' },
    ];
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
  saveSuggestion() {
    if (this.Form_Suggestion.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'جميع الحقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveSuggestion(this.Form_Suggestion.value);
      this.Form_Suggestion.reset();
    }
  }
  saveRating() {
    if (this.Form_Rating.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'جميع الحقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveRating(this.Form_Rating.value);
      this.Form_Rating.reset();
    }
  }
}
