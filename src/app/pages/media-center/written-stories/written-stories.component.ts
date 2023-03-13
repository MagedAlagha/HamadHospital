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
  images: any[] = [
    {
      previewImageSrc: '../../../assets/img/news-details.webp',
      thumbnailImageSrc: '../../../assets/img/news-details.webp',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc: '../../../assets/img/image.webp',
      thumbnailImageSrc: '../../../assets/img/image.webp',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc: '../../../assets/img/story.webp',
      thumbnailImageSrc: '../../../assets/img/story.webp',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc: '../../../assets/img/video.webp',
      thumbnailImageSrc: '../../../assets/img/video.webp',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
