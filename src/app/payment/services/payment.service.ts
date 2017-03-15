import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/Rx';

@Injectable()
export class PaymentService {

constructor(private http: Http, public authHttp: AuthHttp) { }

  authentication(body) {
     return this.http.post('http://devcheckout.joinnus.com/auth', body)
       .map((response) => response.json());
  }


  requestingData(body, token) {
     let headers = new Headers({ 'Authorization': 'Bearer ' + token });
     let options = new RequestOptions({ headers: headers });

    return this.http.post('http://devcheckout.joinnus.com/process', body, options)
      .map((response) => response.json());
  }

}