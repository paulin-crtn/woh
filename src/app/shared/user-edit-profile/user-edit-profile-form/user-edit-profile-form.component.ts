import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { UpdateUserEmailDialogComponent } from '../../dialogs/update-user-email-dialog/update-user-email-dialog.component';

import { Country } from 'src/app/core/country/country';
import { COUNTRIES_LIST } from 'src/app/core/country/countries.data';


@Component({
  selector: 'app-user-edit-profile-form',
  templateUrl: './user-edit-profile-form.component.html',
  styleUrls: ['./user-edit-profile-form.component.scss']
})
export class UserEditProfileFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  countries: Country[] = COUNTRIES_LIST;
  minDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 80))
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 18))

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // FORM
    this.form = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      email: this.fb.control(''),
      country: this.fb.control(''),
      dateOfBirth: this.fb.control(''),
      description: this.fb.control(''),
      profilePicture: this.fb.control(''),
    });
  }

  saveUser() {
    this.submitted = true;
    console.log(this.form.value);
  }

  updateEmail() {
    const dialogRef = this.dialog.open(UpdateUserEmailDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get firstname() { return this.form.get('firstname'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get country() { return this.form.get('country'); }
  get dateOfBirth() { return this.form.get('dateOfBirth'); }
  get description() { return this.form.get('description'); }
  get profilePicture() { return this.form.get('profilePicture'); }

}
