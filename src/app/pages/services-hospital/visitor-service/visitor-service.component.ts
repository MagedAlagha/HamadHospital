import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-visitor-service',
  templateUrl: './visitor-service.component.html',
  styleUrls: ['./visitor-service.component.scss'],
})
export class VisitorServiceComponent implements OnInit {
  Form_Visitors:FormGroup;
  cities!: any[];
  submitted = false;
  Codes$!:Observable<any>;
  constructor(private fb:FormBuilder , private _servicesHospitalService:ServicesHospitalService , private messageService: MessageService) {
    this.Form_Visitors = fb.group({
      FullName: ['', [Validators.required , Validators.minLength(5)]],
      Email: ['',  Validators.email],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$")
      ]],
      Address:['', Validators.required],
      CommunicationReason:['', Validators.required],
      TextMessage:[''],
    })
  }

  ngOnInit(): void {
    this._servicesHospitalService.getCodes3();
    this.Codes$ = this._servicesHospitalService.Selector$('codes3').pipe(tap(valye=>{
      console.log(valye , 'valye');
    }));
   ;
    this.cities = [
      { Name: 'اقتراح', Code: '1' },
      { Name: 'ملاحظة', Code: '2' },
      { Name: 'شكوى', Code: '3' },
      {Name: 'استفسار ', Code: '4' },
    ];
  }


  saveVisitors(){
    if (this.Form_Visitors.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'يوجد حقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveVisitors(this.Form_Visitors.value );
      this.Form_Visitors.reset();
    }
    this.submitted = true;

  }


  get FullName () {
    return this.Form_Visitors.get('FullName')
  }
  get Email () {
    return this.Form_Visitors.get('Email')
  }
  get PhoneNumber () {
    return this.Form_Visitors.get('PhoneNumber')
  }
  get Address () {
    return this.Form_Visitors.get('Address')
  }
  get CommunicationReason () {
    return this.Form_Visitors.get('CommunicationReason')
  }



}
