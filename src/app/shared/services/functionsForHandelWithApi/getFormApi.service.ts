import { map } from 'rxjs/operators';
import { getFormApiGonfig } from './../../services/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject, config, of } from 'rxjs';
import { HttpHRService } from '../httpHR.service';
import { HttpService } from '../http.service';

@Injectable({
    providedIn: 'root',
})
export class GetFormApiService {
    constructor(private _httpHR: HttpHRService, private _http: HttpService) {}

    getFormApi(
        store: BehaviorSubject<any>,
        api: string,
        selector: any,
        params?: any,
        Config?: getFormApiGonfig,
        CustomFunctionForMamping?: Function
    ) {
        const updateStore = (newSate: any) => {
            store.next({
                ...store.value,
                ...newSate,
            });
        };
        const customUpdateStore = (
            data: any,
            valueLoading: boolean = false
        ) => {
            if (Config?.isLoading) {
                updateStore({
                    [`${selector}`]: {
                        data: data,
                        loading: valueLoading,
                    },
                });
            } else {
                updateStore({
                    [`${selector}`]: data,
                });
            }
        };
        customUpdateStore([], true);
        this._httpHR
            .getData(api, params)
            .pipe(
                map((res: any) => {
                    if (Config?.isFirstIndex && res) {
                        return res[0];
                    }

                    return res;
                }),
                map((res) => {
                    if (CustomFunctionForMamping) {
                        return CustomFunctionForMamping(res);
                    }

                    return res;
                }),
                map(data => {
                  if(Config?.selectIndexOfDataToNextInSomeFunction){
                    Config?.selectIndexOfDataToNextInSomeFunction?.func(data?.[Config?.selectIndexOfDataToNextInSomeFunction?.index])
                  }
                  return data;
                })
                // catchError((value) => of([]))
            )
            .subscribe({
                next: (value) => {
                    customUpdateStore(value, false);
                },
                error: (err) => {
                    customUpdateStore([], false);
                },
            });
    }

    getFormApi_MEAL(
        store: BehaviorSubject<any>,
        api: string,
        selector: any,
        params?: any,
        Config?: getFormApiGonfig,
        CustomFunctionForMamping?: Function
    ) {
        const updateStore = (newSate: any) => {
            store.next({
                ...store.value,
                ...newSate,
            });
        };
        const customUpdateStore = (
            data: any,
            valueLoading: boolean = false
        ) => {
            if (Config?.isLoading) {
                updateStore({
                    [`${selector}`]: {
                        data: data,
                        loading: valueLoading,
                    },
                });
            } else {
                updateStore({
                    [`${selector}`]: data,
                });
            }
        };
        customUpdateStore([], true);
        this._http
            .getData(api, params)
            .pipe(
                map((res: any) => {
                    if (Config?.isFirstIndex && res) {
                        return res[0];
                    }

                    return res;
                }),
                map((res) => {
                    if (CustomFunctionForMamping) {
                        return CustomFunctionForMamping(res);
                    }

                    return res;
                })
                // catchError((value) => of([]))
            )
            .subscribe({
                next: (value) => {
                    customUpdateStore(value, false);
                },
                error: (err) => {
                    customUpdateStore([], false);
                },
            });
    }
}
