import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

constructor(private http: Http) { }

  authentication(body) {
     return this.http.post('http://devcheckout.joinnus.com/auth', body)
       .map((response) => response.json());
  }
}