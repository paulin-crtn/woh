import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOCK_USER } from 'src/mock-data/user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  user: User;
  
  constructor() { }

  getUser(id: number): Observable<User> {
    return of(MOCK_USER);
  }
}
