import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  baseUrl = environment.FileUrl;
  constructor(private _mediaCenterService:MediaCenterService, private _mediaSectionsItems:MediaCenterService) { }
  ngOnInit(): void {
    this._mediaCenterService.getMediaSectionsItemsPhoto(1)
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItemsPhoto')
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems')
}

showNews(item:any){
  this._mediaCenterService.updateStore({ MixInfo: item });
  console.log(item)
}
}
