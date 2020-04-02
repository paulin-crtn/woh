import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { UserMockService } from 'src/app/core/user/user.mock.service';

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
    private userService: UserMockService,
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
    console.log(this.loginForm.value);
    this.submitted = true;
    // TODO : API AUTHENTICATION

      // IF AUTHENTICATION SUCCEED
      this.dialogRef.close();
      this.redirectUser();
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

  redirectUser() {
    this.userService.getUser(1).subscribe(user => {
      this.userService.user = user;
      if (user.is_helper) {
        this.route.navigate(['/account/helper']);
      } else if (user.is_host) {
        this.route.navigate(['/account/host']);
      }
    });
  }
  
  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
