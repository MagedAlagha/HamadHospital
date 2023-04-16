import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root'
})
export class OutpatientClinicsService {

  constructor(
    private http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    OutpatientClinicsDepartmentsServices: undefined,
    OutpatientClinicsDepartments: undefined,
    Services: undefined,
    dataShow: undefined,
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

  updateSelectedItemDataShow(data: any){
    this.updateStore({
      dataShow: data
    });
  }

  getOutpatientClinicsDepartments() {
    this.getFormApi('OutpatientClinicsDepartments/OutpatientClinicsDepartmentsSearch', 'OutpatientClinicsDepartments');
  }
  getOutpatientClinicsDepartmentsServices() {
    this.getFormApi(
        'OutpatientClinicsDepartmentsServices/OutpatientClinicsDepartmentsServicesSearch',
        'OutpatientClinicsDepartmentsServices',

    );
}
getServices() {
  this.getFormApi('Services/ServicesSearch', 'Services');
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
  OutpatientClinicsDepartmentsServices?: any;
  OutpatientClinicsDepartments?: any;
  Services?: any;
  dataShow?: any;
}
export type selectorsType = keyof StoreInterface;
