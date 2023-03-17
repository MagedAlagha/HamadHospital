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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 6;
        });
      }), tap(value=>{
        console.log("value" , value)
      })
    );
  }

  showVisualStories(item:any) {
    this._mediaCenterService.updateStore({ VisualStories: item });
  }

}
