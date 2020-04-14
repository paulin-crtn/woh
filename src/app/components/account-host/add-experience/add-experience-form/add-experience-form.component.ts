import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    // FORM
    this.form = this.fb.group({
      title: this.fb.control('', [Validators.required]),
    });
  }

  saveExperience() {
    this.submitted = true;
    console.log(this.form.value);
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get title() { return this.form.get('title'); }

}
