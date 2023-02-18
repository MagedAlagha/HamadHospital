import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
