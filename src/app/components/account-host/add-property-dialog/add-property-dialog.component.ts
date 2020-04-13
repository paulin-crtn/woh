import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Country } from 'src/app/core/country/country';
import { COUNTRIES_LIST } from 'src/app/core/country/countries.data';

@Component({
  selector: 'app-add-property-dialog',
  templateUrl: './add-property-dialog.component.html',
  styleUrls: ['./add-property-dialog.component.scss']
})
export class AddPropertyDialogComponent implements OnInit {
  propertyForm: FormGroup;
  submitted: Boolean;
  apiErrorMessage: string;
  countries: Country[] = COUNTRIES_LIST;
  types: string[] = [
    'Hostel & Hotel',
    'Farm',
    'School',
    'Homestay',
  ]

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // FORM
    this.propertyForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      type: this.fb.control('', [Validators.required]),
      address1: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      zipcode: this.fb.control('', [Validators.maxLength(10)]),
      city: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      country: this.fb.control('', [Validators.required]),
    });
  }

  addProperty() {
    this.submitted = true;
    console.log(this.propertyForm.value);
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get name() { return this.propertyForm.get('name'); }
  get type() { return this.propertyForm.get('type'); }
  get address1() { return this.propertyForm.get('address1'); }
  get zipcode() { return this.propertyForm.get('zipcode'); }
  get city() { return this.propertyForm.get('city'); }
  get country() { return this.propertyForm.get('country'); }

}
