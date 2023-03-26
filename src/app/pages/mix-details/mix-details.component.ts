import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-mix-details',
  templateUrl: './mix-details.component.html',
  styleUrls: ['./mix-details.component.scss']
})
export class MixDetailsComponent implements OnInit {

  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  MixDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService ,

  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }
  ngOnInit(): void {
    this.ImageSection$ =
      this._mediaCenterService.Selector$('ImageSection');

    this.MixDetails$ = this._mediaCenterService
      .Selector$('MixDetails')
      .pipe(
        tap((value) => {
          console.log('value', value);
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
    this._mediaCenterService.updateStore({ MixDetails: item });
   ;
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

