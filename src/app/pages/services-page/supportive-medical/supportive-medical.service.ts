import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root'
})
export class SupportiveMedicalService {
  constructor(
    private http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    Services: undefined,
    SupportiveMedicalDepartments: undefined,
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

  getServices() {
    this.getFormApi('Services/ServicesSearch', 'Services');
  }
  getSupportiveMedicalDepartments() {
    this.getFormApi('SupportiveMedicalDepartments/SupportiveMedicalDepartmentsSearch', 'SupportiveMedicalDepartments');
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
  Services: any;
  SupportiveMedicalDepartments: any;
}
export type selectorsType = keyof StoreInterface;
