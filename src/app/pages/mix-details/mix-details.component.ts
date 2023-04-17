import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-mix-details',
  templateUrl: './mix-details.component.html',
  styleUrls: ['./mix-details.component.scss']
})
export class MixDetailsComponent implements OnInit {
  width:any = '100% ';
  height:any = '420px ';
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  MixDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  MediaSectionsMix$!: Observable<any>;
  MixInfo$!: Observable<any>;
  text:any = 'نسخ';
  location:any

  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService ,
    private _clipboardService: ClipboardService

  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }
  ngOnInit(): void {
    this.location = window.location.href;
    this._mediaCenterService.getMixInfo(this.ID);

    this.ImageSection$ =this._mediaCenterService.Selector$('ImageSection');

    this.MixDetails$ = this._mediaCenterService
      .Selector$('MixInfo')
      .pipe(
        tap((value) => {
          console.log('value222222222', value);
          this._mediaCenterService.getImageSection(value?.ID);
        })
      );

      this.MediaSectionsMix$ = this._mediaCenterService.Selector$('MediaSectionsItemsMix')
      this.MixInfo$ = this._mediaCenterService.Selector$('MixInfo').pipe(map(value=>{
        console.log("value" , value)
      }))
  }

  showMixDetails(item: any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
  }

  copy(){
    this._clipboardService.copy(this.location);
    this.text = "تم النسخ"
  }

  getImage(value:any){

  }

}

