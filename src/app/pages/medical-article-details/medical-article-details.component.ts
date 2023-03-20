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

  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
ID:any;
text:any = 'نسخ';

MedicalArticles$!:Observable<any>;
  constructor(private route:ActivatedRoute , private _mediaCenterService:MediaCenterService , private renderer: Renderer2 ,private _clipboardService: ClipboardService) {
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
  copy(text: string){
    this._clipboardService.copy(text);
    this.text = "تم النسخ"
  }
  showMedicalArticles(item:any){
    this._mediaCenterService.updateStore({ MedicalArticles: item });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
