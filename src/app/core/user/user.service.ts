import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { MOCK_USER } from 'src/mock-data/user'; // TODO 
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  
  constructor(
    private http: HttpClient,
  ) { }

  getLoggedUser(): Observable<User> {
    return this.http.get(environment.apiUrl + '/user') as Observable<User>;
  }

  isUserLogged(): Observable<boolean> {
    return this.http.get(environment.apiUrl + '/user/logged') as Observable<boolean>;
  }

  // TODO : register
  
}
