import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaCenterService } from '../../../media-center.service';
import { VisualStoriesService } from '../../visual-stories.service';

@Component({
  selector: 'app-visual-stories-modal',
  templateUrl: './visual-stories-modal.component.html',
  styleUrls: ['./visual-stories-modal.component.scss']
})
export class VisualStoriesModalComponent implements OnInit {
  data:any;
  constructor(private _visualStoriesService:VisualStoriesService , private _mediaCenterService:MediaCenterService) {}

video$!:Observable<any>;
  ngOnInit(): void {

     this.data = this._mediaCenterService.dataStore.VideoDetails ;
    if(this.data){
      console.log('data' , this.data)
    }
this.video$ = this._mediaCenterService.Selector$('VideoDetails');

  }


  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;




  /* closeDialog() {
    this._videoGalleryService.displayDialogs('VideoDialog', false);
} */

}
