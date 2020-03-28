import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    // FORM
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

    // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }
  
    login() {
      console.log(this.loginForm.value);
      this.submitted = true;
    }

}
