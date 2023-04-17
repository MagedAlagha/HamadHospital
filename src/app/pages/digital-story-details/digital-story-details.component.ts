import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-digital-story-details',
  templateUrl: './digital-story-details.component.html',
  styleUrls: ['./digital-story-details.component.scss']
})
export class DigitalStoryDetailsComponent implements OnInit {
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  PhotosDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  MediaSectionsItemsTecStories$!: Observable<any>;
  tecStoryInfo$!: Observable<any>;

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
    this._mediaCenterService.getTecStoryInfo(this.ID);
    this.ImageSection$ = this._mediaCenterService.Selector$('ImageSection');
     this._mediaCenterService.getImageSection(this.ID)
    this._mediaCenterService.getMediaSectionsItemsTecStories(6)
    this.MediaSectionsItemsTecStories$ = this._mediaCenterService.Selector$('MediaSectionsItemsTecStories')
    this.tecStoryInfo$ = this._mediaCenterService.Selector$('tecStoryInfo')
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ tecStoryInfo: item });
    this._mediaCenterService.getImageSection(item.ID)
  }

}
