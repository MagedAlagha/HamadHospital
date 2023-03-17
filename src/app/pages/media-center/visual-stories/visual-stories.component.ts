import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center.service';
import { VideoGalleryService } from '../video-gallery/video-gallery.service';
import { VisualStoriesService } from './visual-stories.service';

@Component({
  selector: 'app-visual-stories',
  templateUrl: './visual-stories.component.html',
  styleUrls: ['./visual-stories.component.scss']
})
export class VisualStoriesComponent implements OnInit {

  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;

  constructor(private _visualStoriesService:VisualStoriesService ,
     private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 5;
        });
      }), tap(value=>{
        console.log("value" , value)
      })
    );
    this.VideoDialog$ = this._visualStoriesService.Selector$('VideoDialog')
  }

  display: boolean = false;

  showVideoPreview(item:any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log(item)
  }
  openModal(item?:any){
    this._visualStoriesService.displayDialogs('VideoDialog', true, item);
  }
}
