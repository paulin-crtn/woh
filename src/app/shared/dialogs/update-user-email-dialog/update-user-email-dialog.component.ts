import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-user-email-dialog',
  templateUrl: './update-user-email-dialog.component.html',
  styleUrls: ['./update-user-email-dialog.component.scss']
})
export class UpdateUserEmailDialogComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // FORM
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
    });
  }

  updateEmail() {
    console.log(this.form.value);
    this.submitted = true;
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get email() { return this.form.get('email'); }
}