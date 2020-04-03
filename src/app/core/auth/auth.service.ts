import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {}

  getApiCredentials(): Observable<any> {
    return this.http.get('http://localhost:8888/sanctum/csrf-cookie');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8888/login', {email, password});
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:8888/logout', {});
  }

}
