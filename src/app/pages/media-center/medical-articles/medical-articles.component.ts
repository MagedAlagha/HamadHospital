import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center.service';

@Component({
  selector: 'app-medical-articles',
  templateUrl: './medical-articles.component.html',
  styleUrls: ['./medical-articles.component.scss']
})
export class MedicalArticlesComponent implements OnInit {

  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  constructor(private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 4;
        });
      })
    );
}

showMedicalArticles(item:any){
  this._mediaCenterService.updateStore({ MedicalArticles: item });
}

}
