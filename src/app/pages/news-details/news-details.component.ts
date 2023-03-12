import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
ID:any;
showNews$!:Observable<any>;
  constructor(private route:ActivatedRoute , private _mediaCenterService:MediaCenterService) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID)
   }

  ngOnInit(): void {


    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 1;
        });
      }), map(value=>{
        return value.slice(-3)
      })
    );

    this.showNews$ = this._mediaCenterService.Selector$('showNews')
    const data  = this._mediaCenterService.dataStore.showNews
    if(data){
    console.log(data , "{gege")
    }
  }

}
