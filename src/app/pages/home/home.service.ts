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
    Advertisements: undefined,
    MedicalRehabilitationFeatures: undefined,
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
  getAdvertisements() {
    this.getFormApi(
      'Advertisements/AdvertisementsSearch',
      'Advertisements'
    );
  }
  getMainInfo() {
    this.getFormApi(
      'MainInfo/MainInfoSearch',
      'mainInfo'
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
  Advertisements: any;
  MedicalRehabilitationFeatures: any;
}
export type selectorsType = keyof StoreInterface;
