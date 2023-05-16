import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    sliderData: { data: [], loading: false },
    Services: undefined,
    mainInfo: undefined,
    LandingPageInfo: undefined,
    Advertisements: undefined,
    MedicalRehabilitationFeatures: undefined,
    codes: undefined,

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

  getSliderData() {
    this.getFormApi('HeaderSlider/HeaderSliderSearch', 'sliderData');
  }
  getServicesInHome() {
    this.getFormApi('Services/ServicesSearch', 'Services');
  }
  getMedicalRehabilitationFeaturesInHome() {
    this.getFormApi(
      'MedicalRehabilitationFeatures/MedicalRehabilitationFeaturesSearch',
      'MedicalRehabilitationFeatures'
    );
  }
  getAdvertisements(ID?:any) {
    this.getFormApi(
      'Advertisements/AdvertisementsSearch',
      'Advertisements',
      { CategoryID: ID },
    );
  }
  getMainInfo() {
    this.getFormApi(
      'MainInfo/MainInfoSearch',
      'mainInfo'
    );
  }
  getLandingPageInfo(lang:any) {
    this.getFormApi(
      'LandingPage',
      'LandingPageInfo',
      { Lang: lang },
    );
  }

  getCodes(id:any) {
    this.getFormApi(
        'Codes/CodesSelect',
        'codes',
        {
            ParentID:id
        }

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
  sliderData: { data: any; loading: boolean };
  Services: any;
  mainInfo: any;
  LandingPageInfo: any;
  Advertisements: any;
  MedicalRehabilitationFeatures: any;
  codes:any

}
export type selectorsType = keyof StoreInterface;
