import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-prosthetics',
  templateUrl: './prosthetics.component.html',
  styleUrls: ['./prosthetics.component.scss']
})
export class ProstheticsComponent implements OnInit {

  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  constructor(private _homeService:HomeService) {
  }

  ngOnInit(): void {
    this.Services$ = this._homeService.Selector$('Services');
  }

}
