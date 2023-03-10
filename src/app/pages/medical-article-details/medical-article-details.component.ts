import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-medical-article-details',
  templateUrl: './medical-article-details.component.html',
  styleUrls: ['./medical-article-details.component.scss']
})
export class MedicalArticleDetailsComponent implements OnInit {

  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
ID:any;
MedicalArticles$!:Observable<any>;
  constructor(private route:ActivatedRoute , private _mediaCenterService:MediaCenterService) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID)
   }

  ngOnInit(): void {

    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 4;
        });
      }) , map(value=>{
        return value.slice(-3)
      })
    );

    this.MedicalArticles$ = this._mediaCenterService.Selector$('MedicalArticles')
    const data  = this._mediaCenterService.dataStore.MedicalArticles
    if(data){
    console.log(data , "gege")
    }
  }

}
