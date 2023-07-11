import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.scss']
})
export class MixComponent implements OnInit {

  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  baseUrl = environment.FileUrl;
  constructor(private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems')
}

showNews(item:any){
  this._mediaCenterService.updateStore({ MixInfo: item });
  console.log(item);
}

}
