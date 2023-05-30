import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { ServicesHospitalService } from '../services-hospital.service';

@Component({
  selector: 'app-beneficiaries-service',
  templateUrl: './beneficiaries-service.component.html',
  styleUrls: ['./beneficiaries-service.component.scss'],
})
export class BeneficiariesServiceComponent implements OnInit {
  selecetd1:boolean = true;
  selecetd2!:boolean;

  constructor(private _servicesHospitalService:ServicesHospitalService  ) {
  }
  ngOnInit(): void {
     const data =  this._servicesHospitalService.dataStore.complaintID
     if(data == 2){
     this.selecetd1 = false
     this.selecetd2 = true
     }
     else{
      this.selecetd1 = true
     this.selecetd2 = false
     }
  }
}
