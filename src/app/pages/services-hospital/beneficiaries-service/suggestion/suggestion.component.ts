import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { ServicesHospitalService } from '../../services-hospital.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  Form_Suggestion: FormGroup;
  Codes1$!:Observable<any>;
  Codes2$!:Observable<any>;

  constructor(
    private fb: FormBuilder,
    private _servicesHospitalService: ServicesHospitalService,
    private messageService: MessageService
  ) {
    this.Form_Suggestion = fb.group({
      FullName: ['', [Validators.required , Validators.minLength(5)]],
      Email: ['',  Validators.email],
      PhoneNumber:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$")
      ]],
      IdentityNumber: ['',[
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern("^[0-9]*$")
      ]],
      Address: ['', Validators.required],
      TextMessage: ['', Validators.required],
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
  saveSuggestion() {
    if (this.Form_Suggestion.invalid) {
      this.messageService.add({
        severity: 'error',
        detail: 'يوجد حقول مطلوبة',
      });
    } else {
      this._servicesHospitalService.saveSuggestion(this.Form_Suggestion.value);
      this.Form_Suggestion.reset();
    }
  }


  get FullName () {
    return this.Form_Suggestion.get('FullName')
  }
  get Email () {
    return this.Form_Suggestion.get('Email')
  }
  get PhoneNumber () {
    return this.Form_Suggestion.get('PhoneNumber')
  }
  get Address () {
    return this.Form_Suggestion.get('Address')
  }
  get IdentityNumber () {
    return this.Form_Suggestion.get('IdentityNumber')
  }
  get TextMessage () {
    return this.Form_Suggestion.get('TextMessage')
  }

  disable=true;
  showResponse(event:any) {
    this.disable = false;
  }

}
