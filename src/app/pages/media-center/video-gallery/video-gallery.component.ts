import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaCenterService } from '../media-center.service';
import { VideoGalleryService } from './video-gallery.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {
  VideoDialog$!:Observable<any>;
  MediaCenterService$!:Observable<any>;
  filterVideo$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  active:any = 0 ;
  constructor(private _videoGalleryService:VideoGalleryService , private _mediaCenterService:MediaCenterService) { }

  Avatar=environment.FileUrl;
  Search= new FormControl();
  ngOnInit(): void {

    this.filterVideo(' ');


    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems')

    this.VideoDialog$ = this._videoGalleryService.Selector$('VideoDialog')
    this.filterVideo$  =this._mediaCenterService.Selector$('FilterVideo');
  }

  display: boolean = false;

  showVideoPreview(item:any) {
    this.display = true;
    this._mediaCenterService.updateStore({ VideoDetails: item });
    console.log( "itemi temitem" ,  item  )
  }

  serchVideo(){
    console.log(this.Search.value)
  };

  filterVideo(id?:any){
    this.active = id
   this._mediaCenterService.getFilterVideo(id)
  }

}
