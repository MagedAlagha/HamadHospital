import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images: any[] = [
    {
      data: [
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 1',
          title: 'Title 1',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 2',
          title: 'Title 2',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
        {
          previewImageSrc: 'demo/images/galleria/galleria4.jpg',
          thumbnailImageSrc: 'demo/images/galleria/galleria4s.jpg',
          alt: 'Description for Image 4',
          title: 'Title 4',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 5',
          title: 'Title 5',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 6',
          title: 'Title 6',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 7',
          title: 'Title 7',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 8',
          title: 'Title 8',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 9',
          title: 'Title 9',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 10',
          title: 'Title 10',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 11',
          title: 'Title 11',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 12',
          title: 'Title 12',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 13',
          title: 'Title 13',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 14',
          title: 'Title 14',
        },
        {
          previewImageSrc: '../../../assets/img/hero.png',
          thumbnailImageSrc: '../../../assets/img/hero.png',
          alt: 'Description for Image 15',
          title: 'Title 15',
        },
      ],
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
