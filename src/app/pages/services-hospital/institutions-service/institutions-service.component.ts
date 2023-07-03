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
      FullName: ['', [Validators.required , Validators.minLength(5)]],
      Email: ['',  Validators.email],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$")
      ]],
      Address: ['', Validators.required],
      TextMessage: ['', Validators.required],
    });
    this.Form_VisitRequest = fb.group({
      FullName: ['', Validators.required],
      Email: ['', [ Validators.email]],
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
        detail: 'يوجد حقول مطلوبة',
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
        detail: 'يوجد حقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveVisitRequest(
        this.Form_VisitRequest.value
      );
      this.Form_VisitRequest.reset();
    }
  }
  ngOnInit(): void {
   ;
  }

  get FullName () {
    return this.Form_PressCoverageRequest.get('FullName')
  }
  get Email () {
    return this.Form_PressCoverageRequest.get('Email')
  }
  get PhoneNumber () {
    return this.Form_PressCoverageRequest.get('PhoneNumber')
  }
  get Address () {
    return this.Form_PressCoverageRequest.get('Address')
  }
  get FullName2 () {
    return this.Form_VisitRequest.get('FullName')
  }
  get Email2 () {
    return this.Form_VisitRequest.get('Email')
  }
  get PhoneNumber2 () {
    return this.Form_VisitRequest.get('PhoneNumber')
  }
  get Address2 () {
    return this.Form_VisitRequest.get('Address')
  }

  disable=true;
  showResponse(event:any) {
    this.disable = false;
  }
}
