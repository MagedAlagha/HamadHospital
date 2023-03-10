import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root',
})
export class AboutHospitalService {
  constructor(
    private _http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}
  store = new BehaviorSubject<jobFunctionalModel>({
    AboutHospital: undefined,
    dataShow: undefined,
  });
  store$ = this.store.asObservable();
  updateStore(newSate: jobFunctionalModel) {
    this.store.next({
      ...this.store.value,
      ...newSate,
    });
  }
  get dataStore() {
    return this.store.getValue();
  }

  Selector$(selector: selectorsType) {
    return this.store$.pipe(
      map((value: any) => value[selector]),
      distinctUntilChanged()
    );
  }
  getAboutHospital() {
    if(!this.dataStore?.dataShow){
      const data = {
        index: 0,
        func: (arg:any) => this.updateStore({dataShow:arg})
      }
      this.getFormApi(
        'AboutHospitalPoints/AboutHospitalPointsSearch',
        'AboutHospital'
        ,
        null,
        {selectIndexOfDataToNextInSomeFunction: data}
      );

    }
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
export interface jobFunctionalModel {
  AboutHospital?:any;
  dataShow?:any;
}
export type selectorsType = keyof jobFunctionalModel;
