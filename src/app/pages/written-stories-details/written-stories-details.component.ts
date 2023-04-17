import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-written-stories-details',
  templateUrl: './written-stories-details.component.html',
  styleUrls: ['./written-stories-details.component.scss'],
})
export class WrittenStoriesDetailsComponent implements OnInit {
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  PhotosDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  MediaSectionsItemsSahafiStories$!: Observable<any>;
  ProsessStoryInfo$!: Observable<any>;
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
    this._mediaCenterService.getProsessStoryInfo(this.ID);
    this.ImageSection$ = this._mediaCenterService.Selector$('ImageSection').pipe( map((val) => {
      console.log(val, "9898889898989898998988")
      return val?.filter((item: any) => {
        console.log("item.ImagePath" , item)
        return !item.ImagePath.includes("pdf") ;
      });
    }))

    this._mediaCenterService.getImageSection(this.ID)
    this._mediaCenterService.getMediaSectionsItemsSahafiStories(5)
    this.MediaSectionsItemsSahafiStories$ = this._mediaCenterService.Selector$('MediaSectionsItemsSahafiStories')
    this.ProsessStoryInfo$ = this._mediaCenterService.Selector$('ProsessStoryInfo')
  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ ProsessStoryInfo: item });
    this._mediaCenterService.getImageSection(item.ID)
  }


}
