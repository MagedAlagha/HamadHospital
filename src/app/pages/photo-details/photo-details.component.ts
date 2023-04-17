import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  ImageSection$!: Observable<any>;
  MediaSectionsItemsPhoto$!: Observable<any>;
  PhotoGalaryInfo$!: Observable<any>;

  location:any
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService ,

  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }
  ngOnInit(): void {

    this.location = window.location.href;
    this._mediaCenterService.getPhotoGalaryInfo(this.ID);
    this.ImageSection$ = this._mediaCenterService.Selector$('ImageSection')
     this._mediaCenterService.getImageSection(this.ID)
    this._mediaCenterService.getMediaSectionsItemsPhoto(2)
    this.MediaSectionsItemsPhoto$ = this._mediaCenterService.Selector$('MediaSectionsItemsPhoto')
    this.PhotoGalaryInfo$ = this._mediaCenterService.Selector$('PhotoGalaryInfo')
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ PhotoGalaryInfo: item });
    this._mediaCenterService.getImageSection(item.ID);
  }


}
