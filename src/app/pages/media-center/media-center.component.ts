import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaCenterService } from './media-center.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.scss'],
})
export class MediaCenterComponent implements OnInit {
  active: any = 1;
  MediaCenterService$!:Observable<any>;
  valueIconLeft:any;
  constructor(public router: Router , private _mediaSectionsItems:MediaCenterService) {
  }

  ngOnInit(): void {
    this.MediaCenterService$ = this._mediaSectionsItems.Selector$('MediaSectionsItems')


    const url = window.location.href;
    if (url.includes('news')) {
      this.active = 1;
      this._mediaSectionsItems.updateStore({FilterTitle:this.valueIconLeft})
      this.getMediaSectionsItemsByID(1);
    }else if(url.includes('photo')){
      this.active = 2;
      this.getMediaSectionsItemsByID(2);
    }else if(url.includes('video')){
      this.active = 3;
      this.getMediaSectionsItemsByID(3);
    }else if(url.includes('medical-articles')){
      this.active = 4;
      this.getMediaSectionsItemsByID(4);
    }else if(url.includes('press-stories')){
      this.active = 5;
      this.getMediaSectionsItemsByID(5);
    }else if(url.includes('visual-stories')){
      this.active = 6;
      this.getMediaSectionsItemsByID(6);
    }else if(url.includes('mix')){
      this.active = 7;
      this.getMediaSectionsItemsByID(7);
    }else if(url.includes('letter')){
      this.active = 8;
      this.getMediaSectionsItemsByID(8);
    }else{
      this.getMediaSectionsItemsByID(this.active)
    }
  }

  getMediaSectionsItemsByID(id?:any){
    this._mediaSectionsItems.getMediaSectionsItems(id);
  }
  search(){
    this._mediaSectionsItems.updateStore({FilterTitle:this.valueIconLeft})
    this._mediaSectionsItems.getMediaSectionsItems()
  }
  clear(){
    this.valueIconLeft = null;
    this._mediaSectionsItems.updateStore({FilterTitle:this.valueIconLeft})
    this._mediaSectionsItems.getMediaSectionsItems()
  }

}
