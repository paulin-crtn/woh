import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from 'src/app/core/user/user';


@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.scss']
})
export class DeleteAccountDialogComponent implements OnInit {
  user: User;
  form: FormGroup;
  submitted: Boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {user: User},
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.user = this.data.user;
    // FORM
    this.form = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  deleteAccount() {
    console.log(this.form.value);
    this.submitted = true;
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get password() { return this.form.get('password'); }

}
