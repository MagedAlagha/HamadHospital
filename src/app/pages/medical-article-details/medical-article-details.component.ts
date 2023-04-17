import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { map, Observable } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-medical-article-details',
  templateUrl: './medical-article-details.component.html',
  styleUrls: ['./medical-article-details.component.scss']
})
export class MedicalArticleDetailsComponent implements OnInit {

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

    this._mediaCenterService.getMedicalArticleInfoID(this.ID);


    this.MedicalArticles$ = this._mediaCenterService.Selector$('medicalArticleInfo')
    const data  = this._mediaCenterService.dataStore.MedicalArticles
    if(data){
    console.log(data , "gege")
    }

    this._mediaCenterService.getMediaSectionsItemsMedicalArticle(4)
    this.MediaSectionsItemsMedicalArticle$ = this._mediaCenterService.Selector$('MediaSectionsItemsMedicalArticle')

  }
  copy(){
    this._clipboardService.copy(this.location);
    this.text = "تم النسخ"
  }
  showMedicalArticles(item:any){
    this._mediaCenterService.updateStore({ medicalArticleInfo: item });
    console.log("item89898989" , item)

  }

}
