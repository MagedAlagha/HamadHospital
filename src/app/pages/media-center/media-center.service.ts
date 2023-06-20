import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root',
})
export class MediaCenterService {
  constructor(
    private _http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    MediaSectionsItems: undefined,
    showNews: undefined,
    PhotosDetails: undefined,
    VideoDetails: undefined,
    VideoSlider: undefined,
    MedicalArticles: undefined,
    PressStories: undefined,
    ImageSection: undefined,
    VisualStories: undefined,
    PhotoGalaryDetails: undefined,
    MixDetails: undefined,
    PostInfo: undefined,
    MixInfo: undefined,
    medicalArticleInfo: undefined,

    NewsInfo: undefined,
    PhotoGalaryInfo: undefined,
    ProsessStoryInfo: undefined,
    tecStoryInfo: undefined,
    NewsLaterInfo: undefined,

    activeNave: undefined,

    MediaSectionsItemsVideo: undefined,
    MediaSectionsItemsStory: undefined,
    MediaSectionsItemsLastNews: undefined,
    MediaSectionsItemsLastVarious: undefined,
    MediaSectionsItemsSahafiStories: undefined,
    MediaSectionsItemsPhoto: undefined,
    MediaSectionsItemsMedicalArticle: undefined,
    MediaSectionsItemsTecStories: undefined,
    MediaSectionsItemsMix: undefined,
    MediaSectionsSuceessStoryHome: undefined,
    pageSize: undefined,

    FilterVideo: undefined,
    FilterTitle: undefined,
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
  index = 1;
  /*  *******  MediaSectionsItems - API ******* */
  ID: any;
  getMediaSectionsItems(ID?: any , MainServiceID?: any  ) {

    if (ID) {
      this.ID = ID;
    }
    this.updateStore({
      MediaSectionsItems: undefined,
    });
    this.index = 1;
    this.FungetMediaSectionsItems(this.ID , MainServiceID);
  }
  hiddenShowMore=false
  FungetMediaSectionsItems(ID: any , MainServiceID?:any) {
    this.hiddenShowMore=false

    this._http
      .getData('LandingPage/MediaSectionsItems', {
        MediaSectionID: ID,
        MainServiceID:MainServiceID,
        pageSize: 4,
        pageCount: this.index,
        title: this.dataStore.FilterTitle,
      })
      .subscribe((value) => {
        this.updateStore({
          MediaSectionsItems: [
            ...(this.dataStore.MediaSectionsItems || []),
            ...value,
          ],
        });
        if (value?.length) {
          this.index = this.index + 1;
        }else{
          this.hiddenShowMore=true

        }
      });
  }

  getMediaSectionsItemsVideo(ID?: any, MainServiceID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsVideo',
      { MediaSectionID: ID, ShowVarious: true }
    );
  }
  getMediaSectionsItemsStory(ID?: any, MainServiceID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsStory',
      { MediaSectionID: ID, ShowHome: true }
    );
  }
  getMediaSectionsSuceessStoryHome(ID:any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsSuceessStoryHome',
      {MediaSectionID: ID , ShowHome: true }
    );
  }
  getMediaSectionsItemsLastNews(ID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsLastNews',
      { MediaSectionID: ID }
    );
  }
  getMediaSectionsItemsVarious(ID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsLastVarious',
      { MediaSectionID: ID }
    );
  }
  getMediaSectionsItemsSahafiStories(ID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsSahafiStories',
      { MediaSectionID: ID }
    );
  }
  getMediaSectionsItemsTecStories(ID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsTecStories',
      { MediaSectionID: ID }
    );
  }
  getMediaSectionsItemsPhoto(ID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsPhoto',
      { MediaSectionID: ID }
    );
  }
  getMediaSectionsItemsMedicalArticle(ID?: any) {
    this.getFormApi(
      'LandingPage/MediaSectionsItems',
      'MediaSectionsItemsMedicalArticle',
      { MediaSectionID: ID }
    );
  }
  getMediaSectionsItemsMix(ID?: any) {
    this.getFormApi('LandingPage/MediaSectionsItems', 'MediaSectionsItemsMix', {
      MediaSectionID: ID,
    });
  }
  getFilterVideo(ID?: any) {
    this.getFormApi(
      'MediaSectionsItems/MediaSectionsItemsSearch',
      'FilterVideo',
      { MainServiceID: ID, MediaSectionID: 3 }
    );
  }
  getImageSection(ID?: any) {
    this.getFormApi(
      'MediaSectionsItemsImages/MediaSectionsItemsImagesSearch',
      'ImageSection',
      { MediaSectionsItemID: ID }
    );
  }
  clearImageSectionAndMixInfo() {
    this.updateStore({ ImageSection: [], MixInfo: undefined });
  }
  getPostId(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'PostInfo');
  }
  getMedicalArticleInfoID(ID: any) {
    this.getFormApi(
      `LandingPage/MediaSectionsItems/${ID}`,
      'medicalArticleInfo'
    );
  }
  getNewsInfo(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'NewsInfo');
  }
  getPhotoGalaryInfo(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'PhotoGalaryInfo');
  }
  getProsessStoryInfo(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'ProsessStoryInfo');
  }
  getTecStoryInfo(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'tecStoryInfo');
  }
  getMixInfo(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'MixInfo');
  }
  getNewsLaterInfo(ID: any) {
    this.getFormApi(`LandingPage/MediaSectionsItems/${ID}`, 'NewsLaterInfo');
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
  VideoSlider?: any;
  MedicalArticles?: any;
  PressStories?: any;
  ImageSection?: any;
  VisualStories?: any;
  PhotoGalaryDetails?: any;
  MixDetails?: any;
  PostInfo?: any;
  medicalArticleInfo?: any;
  NewsLaterInfo?: any;
  MixInfo?: any;
  activeNave?: any;

  MediaSectionsItemsVideo?: any;
  MediaSectionsItemsStory?: any;
  MediaSectionsItemsLastNews?: any;
  MediaSectionsItemsLastVarious?: any;
  MediaSectionsItemsSahafiStories?: any;
  MediaSectionsItemsPhoto?: any;
  MediaSectionsItemsMedicalArticle?: any;
  MediaSectionsItemsTecStories?: any;
  MediaSectionsItemsMix?: any;
  MediaSectionsSuceessStoryHome?: any;
  pageSize?: any;

  NewsInfo?: any;
  PhotoGalaryInfo?: any;
  ProsessStoryInfo?: any;
  tecStoryInfo?: any;

  FilterVideo?: any;
  FilterTitle?: any;
}
export type selectorsType = keyof StoreInterface;
