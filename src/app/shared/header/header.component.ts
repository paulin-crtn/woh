import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';

import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { PasswordForgotDialogComponent } from '../dialogs/password-forgot-dialog/password-forgot-dialog.component';
import { SignupHelperDialogComponent } from '../dialogs/signup-helper-dialog/signup-helper-dialog.component';
import { LanguageDialogComponent } from '../dialogs/language-dialog/language-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuBurgerClicked: boolean;
  isMenuBurgerOpen: boolean;
  profil: string;

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private userService: UserService,
    private route: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.userService.userChanged$.subscribe(user => {
      if (user !== null && user.is_helper) {
        this.profil = 'helper';
      } else if (user !== null && user.is_host) {
        this.profil = 'host';
      }
    });
  }

  closeMenuBurger() {
    this.isMenuBurgerOpen = false;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.cookieService.delete('XSRF-TOKEN', '/');
      this.userService.isLogged = false;
      this.userService.isLogged$.next(false);
      this.route.navigate(['/']);
    });
  }

  openDialogLanguage() {
    const dialogRef = this.dialog.open(LanguageDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });
  }

  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return false} // Avoid log error when closed without any action
      if (result.action === 'openPassword') {
        this.openDialogPasswordForgot(result.data.email);
      } else if (result.action === 'openSignup') {
        this.openDialogSignupAsHelper();
      }
    });
  }

  openDialogPasswordForgot(email: string) {
    const dialogRef = this.dialog.open(PasswordForgotDialogComponent, {
      width: '450px',
      data: {
        email,
      },
      autoFocus: false,
    });
  }

  openDialogSignupAsHelper() {
    const dialogRef = this.dialog.open(SignupHelperDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return false} // Avoid log error when closed without any action
      if (result.action === 'openLogin') {
        this.openDialogLogin();
      }
    });
  }

  toggleMenuBurger() {
    this.isMenuBurgerClicked = true;
    this.isMenuBurgerOpen = !this.isMenuBurgerOpen;
  }
}
