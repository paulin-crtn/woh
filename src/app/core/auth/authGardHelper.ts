
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service'; 


@Injectable()
export class AuthGuardHelperService implements CanActivate {
    response: boolean;

    constructor(
      private router: Router,
      private userService: UserService,
    ) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
    ): boolean {

      console.log(this.userService.user);
      this.userService.isUserLogged().subscribe(result => console.log(result));
      
      
      // Check if user exists
      if (typeof(this.userService.user) === 'undefined') {  // Cette information a été enregistrée dans le service depuis le composant Login (mais n'existe pas si la page a été rafraichie);
        this.userService.getLoggedUser().subscribe(user => {
          this.userService.user = user;
          console.log(this.userService.user)
          // Check if user is helper (TODO : and logged in)
          this.userService.user.is_helper ? this.response = true : this.response = false;
        });
      } else {
        // Check if user is helper (TODO : and logged in)
        this.userService.user.is_helper ? this.response = true : this.response = false;
      }
      
      // canActivate response
      if (this.response) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false
      }

    }
}