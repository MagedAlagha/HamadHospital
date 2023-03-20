import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { getFormApiGonfig } from 'src/app/shared/services/models';

@Injectable({
  providedIn: 'root'
})
export class ServicesHospitalService {

  constructor(  private _http: HttpService,
    private _getFormApiService: GetFormApiService,
    private _authService: AuthService) { }

    private store = new BehaviorSubject<StoreInterface>({
      codes1: undefined,
      codes2: undefined,
      codes3: undefined,
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



    /*  ******* Save AppointmentBooking ******* */
    saveAppointmentBooking(data: any) {
      return this._http.saveData('PublicServices/PublicServiceSave/Beneficiaries/AppointmentBooking', data).subscribe();
    }
    /*  ******* Save Suggestion ******* */
    saveSuggestion(data: any) {
      return this._http.saveData('PublicServices/PublicServiceSave/Beneficiaries/Suggestion', data).subscribe();
    }
    /*  ******* Save Rating ******* */
    saveRating(data: any) {
      return this._http.saveData('PublicServices/PublicServiceSave/Beneficiaries/Rating', data).subscribe();
    }
    /*  ******* Save Visitors ******* */
    saveVisitors(data: any) {
      return this._http.saveData('PublicServices/PublicServiceSave/Visitors', data).subscribe();
    }
    /*  ******* Save PressCoverageRequest ******* */
    savePressCoverageRequest(data: any) {
      return this._http.saveData('PublicServices/PublicServiceSave/Institution/PressCoverageRequest', data).subscribe();
    }
    /*  ******* Save VisitRequest ******* */
    saveVisitRequest(data: any) {
      return this._http.saveData('PublicServices/PublicServiceSave/Institution/VisitRequest', data).subscribe();
    }
    /*  ******* get Code ******* */
    getCodes1() {
      this.getFormApi(
          'Codes/CodesSelect',
          'codes1',
          {
              ParentID:1
          },
          {
              isLoading: true,
          }
      );
  }
    getCodes2() {
      this.getFormApi(
          'Codes/CodesSelect',
          'codes2',
          {
              ParentID:2
          },
          {
              isLoading: true,
          }
      );
  }
    getCodes3() {
      this.getFormApi(
          'Codes/CodesSelect',
          'codes3',
          {
              ParentID:3
          },
          {
              isLoading: true,
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
  codes1: any;
  codes2: any;
  codes3: any;
}
export type selectorsType = keyof StoreInterface;
