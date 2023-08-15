import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { ServicesHospitalService } from '../services-hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beneficiaries-service',
  templateUrl: './beneficiaries-service.component.html',
  styleUrls: ['./beneficiaries-service.component.scss'],
})
export class BeneficiariesServiceComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  selecetd1:boolean = true;
  selecetd2!:boolean;
  beneficiariesId:any;
  constructor(private _servicesHospitalService:ServicesHospitalService , private route:ActivatedRoute   ) {

   /*   this.beneficiariesId = this.route.snapshot.paramMap.get('id'); */


  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.beneficiariesId = params.get('id')
    })

  console.log("this.beneficiariesId :" , this.beneficiariesId)

     const data =  this._servicesHospitalService.dataStore.complaintID;
     console.log("datappppppp" , data)
     if(data == 2){
     this.selecetd1 = false
     this.selecetd2 = true
     }
     else{
      this.selecetd1 = true
     this.selecetd2 = false
     }


     /* this._servicesHospitalService.getAppointmentBooking().subscribe(value=>{
      this.appointmentBooking = value;
      console.log("value : " ,)
   }) */


  }

}
