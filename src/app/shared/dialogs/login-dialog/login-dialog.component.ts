import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean;
  apiErrorMessage: string;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private cookieService: CookieService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) { }

  ngOnInit(): void {
    // FORM
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login() {
    this.submitted = true;
    // GET API CREDENTIALS
    this.authService.getApiCredentials()
    // LOGIN
      .pipe(
        concatMap(() => 
          this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
          // GET USER
          .pipe(
            concatMap(() => this.userService.getUser()),
            catchError(error => this.handleError(error)) // Login error
          )
        )
      )
      .subscribe(
        (user: User) => {
          this.userService.isLogged = true;
          this.userService.isLogged$.next(true);
          this.dialogRef.close();
          if (user.is_helper) {
            this.route.navigate(['/account/helper']);
          } else if (user.is_host) {
            this.route.navigate(['/account/host']);
          }
        },
        // error => console.log(error)
      )
  }

  handleError(error: any) {
    switch (error.status) {
      case 422:
        this.apiErrorMessage = 'Incorrect email or password';
        break;
      default:
        this.apiErrorMessage = 'An error occurred';
        break;
    }
    // Reset login
    this.submitted = false;
    this.cookieService.delete('XSRF-TOKEN', '/');
    return of();
  }

  navigateToBecomeAHost() {
    this.dialogRef.close();
    this.route.navigate(['become-a-host']);
  }

  openDialogPasswordForgot() {
    this.dialogRef.close({
      action: 'openPassword', 
      data: {
        email: this.loginForm.get('email'),
      }
    });
  }

  openDialogSignupAsHelper() {
    this.dialogRef.close({
      action: 'openSignup',
    });
  }
  
  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
