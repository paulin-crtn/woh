import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AuthService } from 'src/app/core/auth/auth.service';

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

  constructor(
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  closeMenuBurger() {
    this.isMenuBurgerOpen = false;
  }

  logout() {
    this.authService.logout().subscribe(response => console.log(response));
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
