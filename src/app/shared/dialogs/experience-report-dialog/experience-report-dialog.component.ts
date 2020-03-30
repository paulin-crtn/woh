import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-report-dialog',
  templateUrl: './experience-report-dialog.component.html',
  styleUrls: ['./experience-report-dialog.component.scss']
})
export class ExperienceReportDialogComponent implements OnInit {
  reportForm: FormGroup;
  submitted: Boolean;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {experience_id: number},
  ) { }

  ngOnInit(): void {
      // FORM
      this.reportForm = this.fb.group({
        reason: this.fb.control('', [Validators.required]),
        message: this.fb.control('', [Validators.maxLength(1000)]),
      });
  }

  sendReport() {
    console.log(this.reportForm.value);
    const data = {
      experience_id: this.data.experience_id,
      ...this.reportForm.value,
    }
    console.log(data);
    this.submitted = true;
  }

}
