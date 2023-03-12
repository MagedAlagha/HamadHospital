import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-digital-story-details',
  templateUrl: './digital-story-details.component.html',
  styleUrls: ['./digital-story-details.component.scss']
})
export class DigitalStoryDetailsComponent implements OnInit {

  MediaCenterService$!:Observable<any>;
  ImageSection$!:Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID:any;
  postID:any;
  VisualStories$!:Observable<any>;
  constructor(private route:ActivatedRoute , private _mediaCenterService:MediaCenterService) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID)
   }


   ngOnInit(): void {
    this.ImageSection$ = this._mediaCenterService.Selector$('ImageSection');
    this._mediaCenterService.getImageSection();
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItems').pipe(
      map((val) => {
        return val?.filter((item: any) => {
          return item.MediaSectionID === 6;
        });
      })
    );

    this.VisualStories$ = this._mediaCenterService.Selector$('VisualStories').pipe(tap(value=>{
      console.log('value' , value)
    }))
    const data  = this._mediaCenterService.dataStore.ImageSection
    if(data){
    console.log(data , "ID000")
    this.postID = data.ID;
    }
  }



  title = 'GFG';

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
