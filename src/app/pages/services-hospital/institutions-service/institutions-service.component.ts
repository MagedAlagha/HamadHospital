import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-institutions-service',
  templateUrl: './institutions-service.component.html',
  styleUrls: ['./institutions-service.component.scss'],
})
export class InstitutionsServiceComponent implements OnInit {
  Form_PressCoverageRequest: FormGroup;
  Form_VisitRequest: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _servicesHospitalService: ServicesHospitalService,
    private messageService: MessageService
  ) {
    this.Form_PressCoverageRequest = fb.group({
      FullName: ['' , Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      Address: ['', Validators.required],
      TextMessage: ['', Validators.required],
    });
    this.Form_VisitRequest = fb.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      Address: ['', Validators.required],
      TextMessage: ['', Validators.required],
    });
  }
  savePressCoverageRequest() {
    if (this.Form_PressCoverageRequest.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'جميع الحقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.savePressCoverageRequest(
        this.Form_PressCoverageRequest.value
      );
      this.Form_PressCoverageRequest.reset();
    }
  }
  saveVisitRequest() {
    if (this.Form_VisitRequest.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'جميع الحقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveVisitRequest(
        this.Form_VisitRequest.value
      );
      this.Form_VisitRequest.reset();
    }
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
