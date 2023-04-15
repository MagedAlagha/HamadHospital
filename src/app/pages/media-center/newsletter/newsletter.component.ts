import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MediaCenterService } from '../media-center.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  constructor(private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return !item.MediaSectionID.includes("3")
        });
      })
    );
}

showNews(item:any){
  this._mediaCenterService.updateStore({ PostInfo: item });
  console.log(item);
}

}
