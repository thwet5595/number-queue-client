import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Constants } from 'src/app/common/constants/app.constants';
import { ApiService } from '../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService extends ApiService {

  login(email: string, password: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(Constants.oauth2ClientID + ':' + Constants.oauth2ClientPassword)
      })
    };

    const userData = {
      email: email,
      password: password
    }
    console.log('Inside login ....'+email+'...'+password);

    return this.http.post<any>(this.apiRoot + 'requesttoken', userData, httpOptions);
  }
}
