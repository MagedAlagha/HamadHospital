import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map, Observable, tap } from 'rxjs';
import { MediaCenterService } from '../media-center/media-center.service';

@Component({
  selector: 'app-written-stories-details',
  templateUrl: './written-stories-details.component.html',
  styleUrls: ['./written-stories-details.component.scss'],
})
export class WrittenStoriesDetailsComponent implements OnInit {
  MediaCenterService$!: Observable<any>;
  isEn = document.dir == 'ltr' ? true : false;
  ID: any;
  PhotosDetails$!: Observable<any>;
  ImageSection$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private _mediaCenterService: MediaCenterService ,

  ) {
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log(this.ID);
  }
  ngOnInit(): void {

    this._mediaCenterService.getMediaSectionsItemsPhoto(5)
    this.MediaCenterService$ = this._mediaCenterService.Selector$('MediaSectionsItemsPhoto')
    this._mediaCenterService.getPhotoGalaryInfo(this.ID);
    this.ImageSection$ = this._mediaCenterService.Selector$('ImageSection');

    this.PhotosDetails$ = this._mediaCenterService
      .Selector$('PhotoGalaryInfo')
      .pipe(
        tap((value) => {
          console.log('value', value);
          this._mediaCenterService.getImageSection(value?.ID);
        })
      );

  }

  showPhotosDetails(item: any) {
    this._mediaCenterService.updateStore({ PhotoGalaryInfo: item });
    this._mediaCenterService.getImageSection(item.ID)
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
