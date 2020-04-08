import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { MOCK_USER } from 'src/mock-data/user'; // TODO 
import { User } from './user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | null;
  userChanged$: Subject<User> = new Subject<User>();
  isLogged: boolean;
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) {
    this.isUserLogged();
    this.isLogged$.subscribe(
      value => {
        if (value) {
          this.getUser().subscribe(
            (user: User) => {
              this.user = user;
              this.userChanged$.next(user);
            },
            () => {
              this.user = null;
              this.userChanged$.next(null);
              this.isLogged = false;
              this.isLogged$.next(false);
            }
          )
        }
      }
    )
  }

  getUser(): Observable<User> {
    return this.http.get(environment.apiUrl + '/user') as Observable<User>;
  }

  isUserLogged() {
    this.cookieService.check('XSRF-TOKEN') ? this.isLogged = true : this.isLogged = false;
    return this.isLogged$.next(this.isLogged);
  }

  // TODO : register
  
}
