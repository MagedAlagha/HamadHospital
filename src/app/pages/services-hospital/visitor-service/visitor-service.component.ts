import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-service',
  templateUrl: './visitor-service.component.html',
  styleUrls: ['./visitor-service.component.scss'],
})
export class VisitorServiceComponent implements OnInit {
  ngOnInit(): void {}

  cities!: any[];

  constructor() {
    this.cities = [
      { name: 'اقتراح', code: '1' },
      { name: 'ملاحظة', code: '2' },
      { name: 'شكوى', code: '3' },
      { name: 'استفسار ', code: '4' },
    ];
  }
}
