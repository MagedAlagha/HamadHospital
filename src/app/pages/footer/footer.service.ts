import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(
    private http: HttpService,
    private _getFormApiService: GetFormApiService
  ) {}

  private store = new BehaviorSubject<StoreInterface>({
    Stats: undefined,
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


  getStats() {
    this.getFormApi('Stats/StatsSearch', 'Stats' );
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
  Stats: any;
}
export type selectorsType = keyof StoreInterface;
