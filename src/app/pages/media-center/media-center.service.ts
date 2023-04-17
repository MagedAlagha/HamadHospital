import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root'
})
export class MediaCenterService {

  constructor(
    private _http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    MediaSectionsItems: undefined,
    showNews:undefined,
    PhotosDetails:undefined,
    VideoDetails:undefined,
    MedicalArticles:undefined,
    PressStories:undefined,
    ImageSection:undefined,
    VisualStories:undefined,
    PhotoGalaryDetails:undefined,
    MixDetails:undefined,
    PostInfo: undefined,
    NewsInfo: undefined,
    PhotoGalaryInfo: undefined,
    ProsessStoryInfo: undefined,
    tecStoryInfo: undefined,
    activeNave: undefined,
    MediaSectionsItemsVideo: undefined,
    MediaSectionsItemsStory: undefined,
    MediaSectionsItemsLastNews: undefined,
    MediaSectionsItemsLastVarious: undefined,
    MediaSectionsItemsSahafiStories: undefined,
    MediaSectionsItemsPhoto: undefined,
    MediaSectionsItemsMedicalArticle: undefined,


  });

  store$: Observable<StoreInterface> = this.store.asObservable();
  get dataStore() {
    return this.store.value;
  }
  updateStore(newSate: StoreInterface) {
    this.store.next({
      ...this.store.value,
      ...newSate,
    });
  }

  Selector$(selectorName: selectorsType) {
    return this.store$.pipe(
      map((value: any) => value[selectorName]),
      distinctUntilChanged()
    );
  }

    /*  *******  MediaSectionsItems - API ******* */
  getMediaSectionsItems(ID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItems',{ MediaSectionID:ID });
  }
  getMediaSectionsItemsVideo(ID?:any ,MainServiceID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsVideo',{ MediaSectionID:ID , ShowHome:true });
  }
  getMediaSectionsItemsStory(ID?:any , MainServiceID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsStory',{ MediaSectionID:ID , ShowHome:true});
  }
  getMediaSectionsItemsLastNews(ID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsLastNews',{ MediaSectionID:ID });
  }
  getMediaSectionsItemsVarious(ID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsLastVarious',{ MediaSectionID:ID });
  }
  getMediaSectionsItemsSahafiStories(ID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsSahafiStories',{ MediaSectionID:ID });
  }
  getMediaSectionsItemsPhoto(ID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsPhoto',{ MediaSectionID:ID });
  }
  getMediaSectionsItemsMedicalArticle(ID?:any) {
      this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsMedicalArticle',{ MediaSectionID:ID });
  }
  getImageSection(ID?:any) {
    this.getFormApi(
        'MediaSectionsItemsImages/MediaSectionsItemsImagesSearch',
        'ImageSection',
        { MediaSectionsItemID:ID },
    );
 }

 getPostId(ID:any) {
  this.getFormApi(
    `LandingPage/MediaSectionsItems/${ID}`,'PostInfo',
  );
 }
getNewsInfo(ID:any) {
  this.getFormApi(
    `LandingPage/MediaSectionsItems/${ID}`,'NewsInfo',
  );
  }
getPhotoGalaryInfo(ID:any) {
  this.getFormApi(
    `LandingPage/MediaSectionsItems/${ID}`,'PhotoGalaryInfo',
  );
  }
getProsessStoryInfo(ID:any) {
  this.getFormApi(
    `LandingPage/MediaSectionsItems/${ID}`,'ProsessStoryInfo',
  );
  }
getTecStoryInfo(ID:any) {
  this.getFormApi(
    `LandingPage/MediaSectionsItems/${ID}`,'tecStoryInfo',
  );
  }

  getFormApi(
    api: string,
    selector: selectorsType,
    params?: any,
    config?: getFormApiGonfig
  ) {
    this._getFormApiService.getFormApi(
      this.store,
      api,
      selector,
      params,
      config
    );
  }

}

export interface StoreInterface {
  MediaSectionsItems?: any;
  showNews?: any;
  PhotosDetails?: any;
  VideoDetails?: any;
  MedicalArticles?: any;
  PressStories?: any;
  ImageSection?: any;
  VisualStories?: any;
  PhotoGalaryDetails?: any;
  MixDetails?: any;
  PostInfo?: any;
  activeNave?: any;
  MediaSectionsItemsVideo?: any;
  MediaSectionsItemsStory?: any;
  MediaSectionsItemsLastNews?: any;
  MediaSectionsItemsLastVarious?: any;
  MediaSectionsItemsSahafiStories?: any;
  MediaSectionsItemsPhoto?: any;
  MediaSectionsItemsMedicalArticle?: any;
  NewsInfo?: any;
  PhotoGalaryInfo?: any;
  ProsessStoryInfo?: any;
  tecStoryInfo?: any;


}
export type selectorsType = keyof StoreInterface;
