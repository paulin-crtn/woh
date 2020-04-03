import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { MOCK_USER } from 'src/mock-data/user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  user: User;
  
  constructor(
    private http: HttpClient,
  ) { }

  getLoggedUser(): Observable<any> {
    return this.http.get(environment.apiUrl + '/user');
  }
}
