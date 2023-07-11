import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center.service';
import { VisualStoriesService } from './visual-stories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visual-stories',
  templateUrl: './visual-stories.component.html',
  styleUrls: ['./visual-stories.component.scss']
})
export class VisualStoriesComponent implements OnInit {

  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  baseUrl = environment.FileUrl;
  constructor(private _visualStoriesService:VisualStoriesService ,
     private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
   ;
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems')
    this.VideoDialog$ = this._visualStoriesService.Selector$('VideoDialog')
  }

  display: boolean = false;

  showPhotosDetails(item:any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
    console.log(item)
  }

}
