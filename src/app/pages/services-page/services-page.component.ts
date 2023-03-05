import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  active: any = 1;
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  constructor(private _homeService:HomeService) {
  }

  ngOnInit(): void {
    this.Services$ = this._homeService.Selector$('Services');
  }
}
