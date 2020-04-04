import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { MOCK_USER } from 'src/mock-data/user'; // TODO 
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  userChanged$: Subject<User> = new Subject<User>();
  isLogged: boolean;
  isLogged$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private http: HttpClient,
  ) { }

  getLoggedUser(): Observable<User> {
    return this.http.get(environment.apiUrl + '/user').pipe(tap(
        (user: User) => {
          this.user = user;
          this.userChanged$.next(user);
        },
        () => {
          this.user = null;
        }
      )
    )
  }

  isUserLogged(): Observable<boolean> {
    return this.http.get(environment.apiUrl + '/user/logged').pipe(
      tap((response: boolean) => {
          this.isLogged = response;
          this.isLogged$.next(response);
        }
      )
    )
  }

  // TODO : register
  
}
