import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-newsletter-details',
  templateUrl: './newsletter-details.component.html',
  styleUrls: ['./newsletter-details.component.scss']
})
export class NewsletterDetailsComponent implements OnInit {

  MediaSectionsItemsMedicalArticle$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
ID:any;
text:any = 'نسخ';
location:any
MedicalArticles$!:Observable<any>;
  constructor(private route:ActivatedRoute , private _mediaCenterService:MediaCenterService , private renderer: Renderer2 ,private _clipboardService: ClipboardService) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID)
}

  ngOnInit(): void {
    this.location = window.location.href;
    this._mediaCenterService.getNewsLaterInfo(this.ID);
    this.MedicalArticles$ = this._mediaCenterService.Selector$('NewsLaterInfo')

    this._mediaCenterService.getMediaSectionsItemsMedicalArticle(8)
    this.MediaSectionsItemsMedicalArticle$ = this._mediaCenterService.Selector$('MediaSectionsItemsMedicalArticle')

  }
  copy(){
    this._clipboardService.copy(this.location);
    this.text = "تم النسخ"
  }

  showMedicalArticles(item:any){
    this._mediaCenterService.updateStore({ NewsLaterInfo: item });
    console.log("item89898989" , item)
  }

}
