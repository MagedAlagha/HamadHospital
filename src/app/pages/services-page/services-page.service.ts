import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {
  constructor(  private _http: HttpService,
    private _getFormApiService: GetFormApiService,
    private _authService: AuthService) { }

    private store = new BehaviorSubject<StoreInterface>({
      bgSection: undefined,
      successStory: undefined,
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
}
export interface StoreInterface {
  bgSection?: any;
  successStory?: any;
}
export type selectorsType = keyof StoreInterface;
