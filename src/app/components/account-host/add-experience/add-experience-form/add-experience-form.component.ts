import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

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
  numberOfWeeks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  errorNumberOfWeeks: boolean;
  numberOfVolunteeringHours: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  numberOfVolunteers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberOfDaysOff: number[] = [1, 2, 3, 4, 5, 6];
  accomodationTypeList = [
    {type: 'private', name: 'Private room'},
    {type: 'shared', name: 'Shared room'},
    {type: 'dormitory', name: 'Dormitory'},
    {type: 'other', name: 'Other'},
  ];
  mealsList: string[] = ['breakfast', 'lunch', 'diner'];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // FORM
    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(80)]),
      property: this.fb.control(''),
      minWeeks: this.fb.control('', [Validators.required]),
      maxWeeks: this.fb.control('', [Validators.required]),
      hoursPerDay: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required, Validators.minLength(100), Validators.maxLength(2000)]),
      prerequisites: this.fb.control('', [Validators.maxLength(1500)]),
      maxVolunteers: this.fb.control('', [Validators.required]),
      accomodationType: this.fb.control('', [Validators.required]),
      daysOff: this.fb.control('', [Validators.required]),
      meals: this.fb.array([]),
      otherBenefits: this.fb.array([]),
      publication: this.fb.control('0', [Validators.required]),
    });
  }

  addProperty() {
  const dialogRef = this.dialog.open(AddPropertyDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });
  }

  updateCheckedMeal(meal: string): void {
    const index = this.meals.controls.findIndex((control) => control.value === meal);
    if (index === -1) {
      this.meals.push(this.fb.control(meal));
    } else {
      this.meals.removeAt(index);
    }
  }

  isWeeksValid(type: string, selectedWeeks: number) {
    const maxWeeks = this.form.value.maxWeeks;
    const minWeeks = this.form.value.minWeeks;
    if (
      type === 'min' && maxWeeks === '' || 
      type === 'max' && minWeeks === ''
    ) { return }
    if (type === 'min') {
      selectedWeeks > maxWeeks ? 
      this.errorNumberOfWeeks = true : 
      this.errorNumberOfWeeks = false;
    } else if (type === 'max') {
      selectedWeeks < minWeeks ? 
      this.errorNumberOfWeeks = true : 
      this.errorNumberOfWeeks = false;
    }
  }

  saveExperience() {
    this.submitted = true;
    console.log(this.form.value);
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get title() { return this.form.get('title'); }
  get property() { return this.form.get('property'); }
  get description() { return this.form.get('description'); }
  get prerequisites() { return this.form.get('prerequisites'); }
  get publication() { return this.form.get('publication'); }
  get meals() { return this.form.get('meals') as FormArray }
}
