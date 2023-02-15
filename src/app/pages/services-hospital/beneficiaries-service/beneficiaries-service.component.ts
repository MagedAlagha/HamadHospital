import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficiaries-service',
  templateUrl: './beneficiaries-service.component.html',
  styleUrls: ['./beneficiaries-service.component.scss'],
})
export class BeneficiariesServiceComponent implements OnInit {
  ngOnInit(): void {}

  cities!: any[];

  constructor() {
    this.cities = [
      { name: 'العظام', code: '1' },
      { name: 'القلب', code: '2' },
      { name: 'الاطراف الصناعية', code: '3' },
      { name: 'العيون', code: '4' },
    ];
  }
}
