import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { AddPropertyDialogComponent } from '../../add-property-dialog/add-property-dialog.component';


@Component({
  selector: 'app-add-experience-form',
  templateUrl: './add-experience-form.component.html',
  styleUrls: ['./add-experience-form.component.scss']
})
export class AddExperienceFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // FORM
    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      location: this.fb.control(''),
      publication: this.fb.control('', [Validators.required]),
    });
  }

  addProperty() {
  const dialogRef = this.dialog.open(AddPropertyDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });
  }

  saveExperience() {
    this.submitted = true;
    console.log(this.form.value);
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get title() { return this.form.get('title'); }
  get location() { return this.form.get('location'); }
  get publication() { return this.form.get('publication'); }

}
