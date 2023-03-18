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

    /*  *******   MediaSectionsItems - API ******* */
  getMediaSectionsItems() {
      this.getFormApi('MediaSectionsItems/MediaSectionsItemsSearch', 'MediaSectionsItems');
  }
  getImageSection(ID?:any) {
    this.getFormApi(
        'MediaSectionsItemsImages/MediaSectionsItemsImagesSearch',
        'ImageSection',
        { MediaSectionsItemID:ID },
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
}
export type selectorsType = keyof StoreInterface;
