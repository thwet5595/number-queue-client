import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ApiService } from 'src/app/common/services/api.service';

@Injectable()
export class ShowQueueService extends ApiService {

  getNumbers(): Observable<HttpEvent<{}>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.currentUserService.getAccessToken(),
        'SessionId': this.currentUserService.getSessionId()
      })
    };
    
    const req = new HttpRequest('GET', this.apiRoot + 'number/created', httpOptions);
    return this.http.request(req);
  }
}
