import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoGalleryService } from './video-gallery.service';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {
  VideoDialog$!:Observable<any>;
  constructor(private _videoGalleryService:VideoGalleryService) { }

  Avatar=environment.FileUrl;
  ngOnInit(): void {
    this.VideoDialog$ = this._videoGalleryService.Selector$('VideoDialog')
  }

  display: boolean = false;

  showVideoPreview() {
    this.display = true;
  }
  openModal(item?:any){
    this._videoGalleryService.displayDialogs('VideoDialog', true, item);
  }

}
