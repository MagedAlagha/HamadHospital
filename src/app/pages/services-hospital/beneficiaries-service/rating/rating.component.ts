import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ServicesHospitalService } from '../../services-hospital.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Form_Rating: FormGroup;
    constructor(
      private fb: FormBuilder,
      private _servicesHospitalService: ServicesHospitalService,
      private messageService: MessageService
    ) {

      this.Form_Rating = fb.group({
        FullName: ['', [Validators.required , Validators.minLength(5)]],
    Email: ['',  Validators.email],
    PhoneNumber:['',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^[0-9]*$")
    ]],
        Address: ['', Validators.required],
        hospitalRating: ['', Validators.required],
      });
    }


  ngOnInit(): void {
  }

  saveRating() {
    if (this.Form_Rating.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: this.isEn?'There are required fields':'يوجد حقول مطلوبة' ,
      });
    } else {
      this._servicesHospitalService.saveRating(this.Form_Rating.value);
      this.Form_Rating.reset();
    }
  }

  get FullName () {
    return this.Form_Rating.get('FullName')
  }
  get Email () {
    return this.Form_Rating.get('Email')
  }
  get PhoneNumber () {
    return this.Form_Rating.get('PhoneNumber')
  }
  get Address () {
    return this.Form_Rating.get('Address')
  }
  get hospitalRating () {
    return this.Form_Rating.get('hospitalRating')
  }
  disable=true;
  showResponse(event:any) {
    this.disable = false;
  }
}
