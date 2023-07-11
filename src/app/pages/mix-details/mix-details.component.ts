import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';
import { ClipboardService } from 'ngx-clipboard';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mix-details',
  templateUrl: './mix-details.component.html',
  styleUrls: ['./mix-details.component.scss'],
})
export class MixDetailsComponent implements OnInit,OnDestroy {
  width: any = '100% ';
  height: any = '420px ';
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  MixDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  MediaSectionsItemsMix$!: Observable<any>;
  MixInfo$!: Observable<any>;
  text: any = 'نسخ';
  location: any;
  pdfFile: any;
  basLink="http://hamad_api.accessline.ps"
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService,
    private _clipboardService: ClipboardService,
    private sanitizer: DomSanitizer
  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }
  ngOnDestroy(): void {
    this._mediaCenterService.clearImageSectionAndMixInfo()
  }
  ngOnInit(): void {
    this.location = window.location.href;
    this._mediaCenterService.getMixInfo(this.ID);

    this.ImageSection$ = this._mediaCenterService
      .Selector$('ImageSection')
      .pipe(
        tap((value) => {

         /*   let pdf = value.find((item: any) => item?.ImagePath?.includes('pdf'));
          this.pdfFile = pdf ? environment.FileUrl + pdf?.ImagePath : null;
          ;
           value.filter((item: any) => console.log('pdfFile', item) ) */

           console.log("value value : , " ,  value)

            this.pdfFile  = value

           /*  if(value?.ImagePath?.includes('pdf')){
              console.log("value : " , value)

            }else{
              console.log("majed : " )

            } */
        }),
        map((value) =>
          value.filter((item: any) => !item?.ImagePath?.includes('pdf')).reverse(),
        )
      );
    this.MixDetails$ = this._mediaCenterService.Selector$('MixInfo').pipe(
      tap((value) => {
        if(value?.ID){
          this._mediaCenterService.getImageSection(value.ID);
        }
      })
    );
    this._mediaCenterService.getMediaSectionsItemsMix(7);
    this.MediaSectionsItemsMix$ = this._mediaCenterService.Selector$(
      'MediaSectionsItemsMix'
    );

    /*   this.MixInfo$ = this._mediaCenterService.Selector$('MixInfo').pipe(map(value=>{
        console.log("value" , value)
      })) */
  }

  showMixDetails(item: any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
    this._mediaCenterService.getImageSection(item.ID);
  }

  copy() {
    this._clipboardService.copy(this.location);
    this.text = 'تم النسخ';
  }
}
