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
  Form_Rating: FormGroup;
    constructor(
      private fb: FormBuilder,
      private _servicesHospitalService: ServicesHospitalService,
      private messageService: MessageService
    ) {

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
