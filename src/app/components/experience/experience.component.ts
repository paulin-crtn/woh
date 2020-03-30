import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';

import { MatDialog } from '@angular/material/dialog';

import { Experience } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';

import { LoginDialogComponent } from '../../shared/dialogs/login-dialog/login-dialog.component';
import { SignupHelperDialogComponent } from '../../shared/dialogs/signup-helper-dialog/signup-helper-dialog.component';
import { ExperienceReportDialogComponent } from '../../shared/dialogs/experience-report-dialog/experience-report-dialog.component';
import { PasswordForgotDialogComponent } from '../../shared/dialogs/password-forgot-dialog/password-forgot-dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  applyForm: FormGroup;
  minDate: Date = new Date();
  submitted: Boolean;

  experience: Experience;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private experienceService: ExperienceMockService,
    public dialog: MatDialog) {}

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle(' | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});
    // EXPERIENCE
    this.experienceService.getExperience(1).subscribe(experience => {
      this.experience = experience;
      console.log(this.experience);
    });
    // FORM
    this.applyForm = this.fb.group({
      date: this.fb.control('', [Validators.required]),
      message: this.fb.control('', [Validators.required, Validators.minLength(80), Validators.maxLength(1000)]),
    });
  }

  sendApplication() {
    console.log(this.applyForm.value);
    const data = {
      begin_date: this.applyForm.value.date.begin.toJSON().slice(0, 10),
      end_date: this.applyForm.value.date.end.toJSON().slice(0, 10),
      message: this.applyForm.value.message,
    }
    console.log(data);
    this.submitted = true;
  }

  getBackgroundImageUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.gallery_pictures_url[0]}')`);
  }

  getHostPictureUrl() {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${this.experience.host.profile_picture_url}')`);
  }

  getReviewUserProfilePictureUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }

  openDialogExperienceReport() {
    const dialogRef = this.dialog.open(ExperienceReportDialogComponent, {
      width: '450px',
      data: {
        experience_id: this.experience.id,
      },
      autoFocus: false,
    });
  }

  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return false} // Avoid log error when closed without any action
      if (result.action === 'openPassword') {
        this.openDialogPasswordForgot(result.data.email);
      } else if (result.action === 'openSignup') {
        this.openDialogSignupAsHelper();
      }
    });
  }

  openDialogPasswordForgot(email: string) {
    const dialogRef = this.dialog.open(PasswordForgotDialogComponent, {
      width: '450px',
      data: {
        email,
      },
      autoFocus: false,
    });
  }

  openDialogSignupAsHelper() {
    const dialogRef = this.dialog.open(SignupHelperDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return false} // Avoid log error when closed without any action
      if (result.action === 'openLogin') {
        this.openDialogLogin();
      }
    });
  }

  // SHORTCUT TO DISPLAY FORM ERROR MESSAGES IN THE TEMPLATE
  get date() { return this.applyForm.get('date'); }
  get message() { return this.applyForm.get('message'); }
}
