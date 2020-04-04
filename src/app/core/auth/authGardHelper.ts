
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

      // En cas de reload de la page, même logged, ces informations vaudront undefined dans un premier temps (app.component.ts les demandes en parallèle)
      if (typeof this.userService.isLogged === 'undefined' || typeof this.userService.user === 'undefined') {
        return this.userService.getLoggedUser().pipe(map((user: User) => {
          if (user.is_helper) {
            return true;
          }
          this.route.navigate(['/']);
          return false;
        }));
      } else {
        if (this.userService.isLogged && this.userService.user.is_helper) {
          return true;
        }
        this.route.navigate(['/']);
        return false;
      }
    }
}