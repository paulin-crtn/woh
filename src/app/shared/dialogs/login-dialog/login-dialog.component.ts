import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
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
    // API AUTHENTICATION
    this.authService.getApiCredentials().subscribe(() => {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        () => {
          this.getUser();
      })
    });
      // IF AUTHENTICATION SUCCEED
      // this.dialogRef.close();
      // this.redirectUser();
      // TODO : ELSE AUTHENTICATION FAILED
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

  getUser() {
    this.userService.getLoggedUser().subscribe(() => {
      this.dialogRef.close();
      if (this.userService.user.is_helper) {
        this.route.navigate(['/account/helper']);
      } else if (this.userService.user.is_host) {
        this.route.navigate(['/account/host']);
      }
    });
  }
  
  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
