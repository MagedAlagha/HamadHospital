import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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
  constructor(private fb:FormBuilder , private _servicesHospitalService:ServicesHospitalService , private messageService: MessageService) {
    this.Form_Visitors = fb.group({
      FullName:['' , Validators.required],
      Email:['', [Validators.required, Validators.email]],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      Address:['', Validators.required],
      CommunicationReason:['', Validators.required],
      TextMessage:['', Validators.required],
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
    if (this.Form_Visitors.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'جميع الحقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveVisitors(this.Form_Visitors.value );
      this.Form_Visitors.reset();
    }
    this.submitted = true;

  }

}
