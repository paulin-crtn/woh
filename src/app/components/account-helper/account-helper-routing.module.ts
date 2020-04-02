import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { User } from 'src/app/core/user/user';

import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import { UserMockService } from 'src/app/core/user/user.mock.service';


@Injectable()
export class AuthGuardHelperSerice implements CanActivate {
    user: User = this.userService.user; // Cette information a été enregistrée dans le service depuis le composant Login (mais n'existe pas si la page a été rafraichie)
    response: boolean;

    constructor(
      private router: Router,
      private userService: UserMockService,
    ) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot,
    ): boolean {

      // Check if user exists
      if (typeof(this.user) === 'undefined') {
        this.userService.getUser(1).subscribe(user => {
          this.user = user;
          // Check if user is helper (TODO : and logged in)
          this.user.is_helper ? this.response = true : this.response = false;
        });
      } else {
        // Check if user is helper (TODO : and logged in)
        this.user.is_helper ? this.response = true : this.response = false;
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
 

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate : [AuthGuardHelperSerice]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardHelperSerice],
})
export class AccountHelperRoutingModule { }
