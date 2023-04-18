import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center.service';

@Component({
  selector: 'app-written-stories',
  templateUrl: './written-stories.component.html',
  styleUrls: ['./written-stories.component.scss'],
})
export class WrittenStoriesComponent implements OnInit {
  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;

  constructor(
     private _mediaCenterService:MediaCenterService) { }

  ngOnInit(): void {
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems')
  }

  showVisualStories(item:any) {
    this._mediaCenterService.updateStore({ MixInfo: item });
  }

}
