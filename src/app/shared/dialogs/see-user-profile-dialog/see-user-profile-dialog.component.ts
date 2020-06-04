import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from 'src/app/core/user/user';
import { Country } from 'src/app/core/country/country';
import { COUNTRIES_LIST } from 'src/app/core/country/countries.data';


@Component({
  selector: 'app-see-user-profile-dialog',
  templateUrl: './see-user-profile-dialog.component.html',
  styleUrls: ['./see-user-profile-dialog.component.scss']
})
export class SeeUserProfileDialogComponent implements OnInit {
  user: User;
  countries: Country[] = COUNTRIES_LIST;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {user: User},
  ) { }

  ngOnInit(): void {
    this.user = this.data.user;
    console.log(this.user);
  }

  getUserAge() {
    const dateOfToday = new Date();
    const dateOfBirth = new Date(this.user.date_of_birth);
    let age = dateOfToday.getFullYear() - dateOfBirth.getFullYear();
    let month = dateOfToday.getMonth() - dateOfBirth.getMonth();
    if (month < 0 || (month === 0 && dateOfToday.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    return age;
  }

  getUserCountry() {
    const country = COUNTRIES_LIST.find(country => country.alpha3 === this.user.country_alpha3);
    return country.name;
  }

}
