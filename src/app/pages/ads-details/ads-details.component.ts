import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.scss']
})
export class AdsDetailsComponent implements OnInit {
  ID:any;
  Advertisements$!:Observable<any>;
  constructor(private route:ActivatedRoute , private _homeService: HomeService) {

    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
   }

  ngOnInit(): void {

    this._homeService.getAdvertisements(null ,this.ID);
    this.Advertisements$ = this._homeService.Selector$('Advertisements');

  }

}
