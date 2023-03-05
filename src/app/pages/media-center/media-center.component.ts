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
    this._mediaSectionsItems.getMediaSectionsItems();
  }

  ngOnInit(): void {

    /*  const url = this.router.url;
    if (url.includes('news')) {
      this.isActive = true;
      console.log('majed');
    } else {
      this.isActive = false;
      console.log('nooooooo');
    } */
  }
}

/* ||
      url.includes('news-main') ||
      url.includes('video-main') ||
      url.includes('medical-articles-main') */
