import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

import { UpdateUserEmailDialogComponent } from '../../dialogs/update-user-email-dialog/update-user-email-dialog.component';

import { Country } from 'src/app/core/country/country';
import { COUNTRIES_LIST } from 'src/app/core/country/countries.data';


@Component({
  selector: 'app-user-edit-profile-form',
  templateUrl: './user-edit-profile-form.component.html',
  styleUrls: ['./user-edit-profile-form.component.scss']
})
export class UserEditProfileFormComponent implements OnInit {
  user: User;
  form: FormGroup;
  submitted: boolean;
  countries: Country[] = COUNTRIES_LIST;
  minDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 80));
  maxDate: Date = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
  profilePictureSrc: string;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    // USER
    this.user = this.userService.user;
    // DATE FORMAT (SQL TO JS) WITH TIMEZONE FIX
    const utcDate = new Date(this.user.date_of_birth);
    const dateOfBirth = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
    // PROFILE PICTURE
    this.profilePictureSrc = this.user.profile_picture_url;
    // FORM
    this.form = this.fb.group({
      firstname: this.fb.control(this.user.firstname || ''),
      lastname: this.fb.control(this.user.lastname || ''),
      email: this.fb.control(this.user.email || ''),
      country: this.fb.control(this.user.country_alpha3 || ''),
      dateOfBirth: this.fb.control(dateOfBirth || ''),
      description: this.fb.control(this.user.description || ''),
      profilePicture: this.fb.control(null),
    });
  }

  // NOT USED
  getProfilePicture() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.profilePicture}')`);
  }

  saveUser() {
    this.submitted = true;

    console.log(this.form.value);

    // DATE FORMAT (JS TO SQL) WITH TIMEZONE FIX
    const utcDate = this.form.get('dateOfBirth').value;
    const dateOfBirth = new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60000);   

    let data = {...this.form.value};
    data.dateOfBirth = dateOfBirth.toISOString().slice(0, 19).split('T')[0];

    console.log(data);
  }

  setProfilePicture(event: any) {
    if (event.target.files) {
      // DISPLAY PICTURE IN TEMPLATE
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.profilePictureSrc = event.target.result;
      }
      // SET PICTURE IN FORM
      this.form.controls.profilePicture.setValue(event.target.files[0]);
    }
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
