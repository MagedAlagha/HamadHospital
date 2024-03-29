import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medical-articles',
  templateUrl: './medical-articles.component.html',
  styleUrls: ['./medical-articles.component.scss']
})
export class MedicalArticlesComponent implements OnInit {

  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  items!:any [] ;
  baseUrl = environment.FileUrl;
  constructor(private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems')
}

showMedicalArticles(item:any){
  this._mediaCenterService.updateStore({ MixInfo: item });
}

}
