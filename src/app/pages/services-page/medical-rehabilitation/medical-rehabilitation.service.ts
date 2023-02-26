import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';
@Injectable({
  providedIn: 'root',
})
export class MedicalRehabilitationService {
  constructor(
    private http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    MedicalRehabilitationFeatures: undefined,
    ProstheticsSearch: undefined,
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

  getMedicalRehabilitationFeaturesInHome() {
    this.getFormApi(
      'MedicalRehabilitationFeatures/MedicalRehabilitationFeaturesSearch',
      'MedicalRehabilitationFeatures'
    );
  }
  getProstheticsSearch() {
    this.getFormApi('Prosthetics/ProstheticsSearch', 'ProstheticsSearch');
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
  MedicalRehabilitationFeatures: any;
  ProstheticsSearch: any;
}
export type selectorsType = keyof StoreInterface;
