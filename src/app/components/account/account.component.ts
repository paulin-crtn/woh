import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/core/user/user.service';

import { LoginDialogComponent } from 'src/app/shared/dialogs/login-dialog/login-dialog.component';
import { PasswordForgotDialogComponent } from 'src/app/shared/dialogs/password-forgot-dialog/password-forgot-dialog.component';
import { SignupHelperDialogComponent } from 'src/app/shared/dialogs/signup-helper-dialog/signup-helper-dialog.component';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../page-not-found/page-not-found.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private route: Router,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.userService.userChanged$.subscribe(user => {
      if (user !== null && user.is_helper) {
        this.route.navigate(['account/helper']);
      } else if (user !== null && user.is_host) {
        this.route.navigate(['account/host']);
      }
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

}
