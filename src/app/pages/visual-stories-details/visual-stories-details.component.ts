import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';
import { VideoGalleryService } from '../media-center/video-gallery/video-gallery.service';

@Component({
  selector: 'app-visual-stories-details',
  templateUrl: './visual-stories-details.component.html',
  styleUrls: ['./visual-stories-details.component.scss']
})
export class VisualStoriesDetailsComponent implements OnInit {

  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  VideoDetails$!: Observable<any>;
  VideoDialog$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService ,
    private _videoGalleryService: VideoGalleryService ,

  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }

  ngOnInit(): void {
    this.VideoDialog$ = this._videoGalleryService.Selector$('VideoDialog')
    this.MediaCenterService$ = this._mediaCenterService
      .Selector$('MediaSectionsItems')
      .pipe(
        map((val) => {
          return val?.filter((item: any) => {
            return item.MediaSectionID === 3;
          });
        })
      );

    this.VideoDetails$ = this._mediaCenterService
      .Selector$('VideoDetails')
      .pipe(
        tap((value) => {
          console.log('VideoDetails', value);
        })
      );
  }

  showStoruVideoDetails(item: any) {
    this._mediaCenterService.updateStore({ VideoDetails: item });
   ;
  }

}
