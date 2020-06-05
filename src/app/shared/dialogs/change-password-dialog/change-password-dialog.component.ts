import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean;
  inputType: string = 'password';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // FORM
    this.form = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  changePassword() {
    console.log(this.form.value);
    this.submitted = true;
  }

  toggleInputType() {
    this.inputType === 'password'
    ? this.inputType = 'text'
    : this.inputType = 'password'
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get password() { return this.form.get('password'); }
}
