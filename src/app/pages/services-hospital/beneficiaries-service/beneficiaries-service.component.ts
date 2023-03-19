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

  constructor( ) {
  }

  ngOnInit(): void {
  }
}
