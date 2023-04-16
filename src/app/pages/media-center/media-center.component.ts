import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaCenterService } from './media-center.service';

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.scss'],
})
export class MediaCenterComponent implements OnInit {
  /* isActive = false; */

  active: any = 1;
  constructor(public router: Router , private _mediaSectionsItems:MediaCenterService) {

  }

  ngOnInit(): void {


    const url = window.location.href;
    if (url.includes('news')) {
      this.active = 1;
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
}
