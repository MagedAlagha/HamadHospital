import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GetFormApiService } from 'src/app/shared/services/functionsForHandelWithApi/getFormApi.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesHospitalService {

  constructor(  private _http: HttpService,
    private _getFormApiService: GetFormApiService,
    private _authService: AuthService) { }



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

}
