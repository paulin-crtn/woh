import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-password-forgot-dialog',
  templateUrl: './password-forgot-dialog.component.html',
  styleUrls: ['./password-forgot-dialog.component.scss']
})
export class PasswordForgotDialogComponent implements OnInit {
  passwordForgotForm: FormGroup;
  submitted: Boolean;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {email: {value: string}},
  ) { }

  ngOnInit(): void {
    // FORM
    this.passwordForgotForm = this.fb.group({
      email: this.fb.control(this.data.email.value || '', [Validators.required, Validators.email]),
    });
  }

  passwordForgot() {
    console.log(this.passwordForgotForm.value);
    this.submitted = true;
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get email() { return this.passwordForgotForm.get('email'); }
}
