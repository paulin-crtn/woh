import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  submitted: Boolean;

  constructor(
    private fb: FormBuilder,
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
