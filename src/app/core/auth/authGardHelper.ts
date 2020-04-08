
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuardHelperService implements CanActivate {
    response: boolean;

    constructor(
      private route: Router,
      private userService: UserService,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      
      if (typeof this.userService.user !== 'undefined') {
        if (this.userService.user.is_helper) {
          return true
        }
        this.route.navigate(['/account']);
        return false
      } else {
        return this.userService.getUser().pipe(map(
          user => {
            if (user !== null && user.is_helper) {
              return true
            }
            this.route.navigate(['/account']);
            return false
          },
          () => {
            this.route.navigate(['/account']);
            return false
          }
        ));
      }
    }
}