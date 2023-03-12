import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root'
})
export class VisualStoriesService {

  constructor(
    private _http: HttpService,
    private _getFormApiService: GetFormApiService
) {}
store = new BehaviorSubject<jobFunctionalModel>({
    VideoDialog: { isOpen: false, data: '' },
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

displayDialogs = (
    DialogName: selectorsType,
    isOpen: boolean,
    data?: any
) => {
    let dialog = {
        [DialogName]: {
            isOpen: isOpen,
            data: data,
        },
    };
    this.updateStore(dialog);
};



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
ImageSection?: { data: any; loading: boolean };
VideoDialog?: { isOpen: false; data: any };
}
export type selectorsType = keyof jobFunctionalModel;
