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
    this._mediaCenterService.getPostId(this.ID);

    this.ImageSection$ =
      this._mediaCenterService.Selector$('ImageSection');

    this.MixDetails$ = this._mediaCenterService
      .Selector$('PostInfo')
      .pipe(
        tap((value) => {
          console.log('value222222222', value);
          this._mediaCenterService.getImageSection(value?.ID);
        })
      );


    this.MediaCenterService$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID === 7;
          });
        })
      );
  }

  showMixDetails(item: any) {
    this._mediaCenterService.updateStore({ PostInfo: item });
  }

  copy(){
    this._clipboardService.copy(this.location);
    this.text = "تم النسخ"
  }

  getImage(value:any){

  }

  title = 'GFG';

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}

