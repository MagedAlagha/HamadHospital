import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  Advertisements$!: Observable<any>;
  codes$!: Observable<any>;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.getCodes(4);
    this._homeService.getAdvertisements();
    this.Advertisements$ = this._homeService.Selector$('Advertisements');
    this.codes$ = this._homeService.Selector$('codes').pipe(map(value=>{
      if(value){
        value.unshift({
          ID:null ,
          Name:"الكل",
          })
        return value
      }
    }));
  }
  onChange(event:any){
   console.log("event : " , event.value);
   this._homeService.getAdvertisements(event.value , null);
  }
}

