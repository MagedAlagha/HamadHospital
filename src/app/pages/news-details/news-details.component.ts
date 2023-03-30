import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
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
text:any = 'نسخ';
showNews$!:Observable<any>;
location:any
  constructor(private route:ActivatedRoute ,
     private _mediaCenterService:MediaCenterService
      , private renderer: Renderer2 ,
      private _clipboardService: ClipboardService
      ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID)
   }

  ngOnInit(): void {
    this.location = window.location.href;

    this._mediaCenterService.getPostId(this.ID);
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 1;
        });
      }), map(value=>{
        return value.slice(-3)
      })
    );
    this.showNews$ = this._mediaCenterService.Selector$('PostInfo')
  }

  copy(){
    this._clipboardService.copy(this.location);
    this.text = "تم النسخ"
  }

  showNews(item:any){
    this._mediaCenterService.updateStore({ PostInfo: item });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

