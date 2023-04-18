import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  MediaSectionsItemsLastNews$!: Observable<any>;
  ImageSection$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  text: any = 'نسخ';
  showNews$!: Observable<any>;
  location: any;
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService,
    private renderer: Renderer2,
    private _clipboardService: ClipboardService
  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }
  pdfFile: any;
  ngOnInit(): void {
    this.location = window.location.href;
    this._mediaCenterService.getNewsInfo(this.ID);
    this.ImageSection$ = this._mediaCenterService
      .Selector$('ImageSection')
      .pipe(
        tap((value) => {
          let pdf = value.find((item: any) => item?.ImagePath?.includes('pdf'));
          this.pdfFile = pdf ? environment.FileUrl+ pdf?.ImagePath : null;
          console.log('pdfFile', this.pdfFile);
        }),
        map((value) =>
          value.filter((item: any) => !item?.ImagePath?.includes('pdf'))
        )
      );
    this._mediaCenterService.getImageSection(this.ID);
    this._mediaCenterService.getMediaSectionsItemsLastNews(1);
    this.MediaSectionsItemsLastNews$ = this._mediaCenterService.Selector$(
      'MediaSectionsItemsLastNews'
    );

    this.showNews$ = this._mediaCenterService.Selector$('NewsInfo');
  }

  copy() {
    this._clipboardService.copy(this.location);
    this.text = 'تم النسخ';
  }

  showNews(item: any) {
    this._mediaCenterService.updateStore({ NewsInfo: item });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._mediaCenterService.getImageSection(item.ID);
  }
}
