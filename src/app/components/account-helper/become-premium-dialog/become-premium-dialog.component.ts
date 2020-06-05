import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User } from 'src/app/core/user/user';


@Component({
  selector: 'app-become-premium-dialog',
  templateUrl: './become-premium-dialog.component.html',
  styleUrls: ['./become-premium-dialog.component.scss', '../../../shared/dialogs/signup-helper-dialog/signup-helper-dialog.component.scss']
})
export class BecomePremiumDialogComponent implements OnInit {
  user: User;
  form: FormGroup;
  submitted: Boolean;
  selectedOffer: string;
  checkboxClass: string = 'signupHelperCheckbox';
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {user: User},
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.user = this.data.user;
    // FORM
    this.form = this.fb.group({
      duration: this.fb.control('', [Validators.required]),
      card_holder: this.fb.control(`${this.user.firstname} ${this.user.lastname}`, [Validators.required, Validators.maxLength(80)]),
      card_number: this.fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(19+4), Validators.pattern('[0-9 ]*')]),
      card_expiration_month: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[0-9]*')]),
      card_expiration_year: this.fb.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[0-9]*')] ),
      card_cvc: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(4), Validators.pattern('[0-9]*')]),
      consent: this.fb.control('', [Validators.requiredTrue]),
    });
  }

  becomePremium() {
    console.log(this.form.value);
    this.submitted = true;
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get duration() { return this.form.get('duration'); }
  get card_holder() { return this.form.get('card_holder'); }
  get card_number() { return this.form.get('card_number'); }
  get card_expiration_month() { return this.form.get('card_expiration_month'); }
  get card_expiration_year() { return this.form.get('card_expiration_year'); }
  get card_cvc() { return this.form.get('card_cvc'); }

}
