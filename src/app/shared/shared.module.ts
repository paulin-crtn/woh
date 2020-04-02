import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { CallToActionCardComponent } from './call-to-action-card/call-to-action-card.component';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { ExperienceReportDialogComponent } from './dialogs/experience-report-dialog/experience-report-dialog.component';
import { PasswordForgotDialogComponent } from './dialogs/password-forgot-dialog/password-forgot-dialog.component';
import { SignupHelperDialogComponent } from './dialogs/signup-helper-dialog/signup-helper-dialog.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LanguageDialogComponent } from './dialogs/language-dialog/language-dialog.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserWelcomePanelComponent } from './user-welcome-panel/user-welcome-panel.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ExperienceCardComponent,
        CallToActionCardComponent,
        LoginDialogComponent,
        ExperienceReportDialogComponent,
        PasswordForgotDialogComponent,
        SignupHelperDialogComponent,
        RegisterFormComponent,
        SearchBarComponent,
        LanguageDialogComponent,
        UserEditProfileComponent,
        UserWelcomePanelComponent,
        UserEditProfileComponent,
        UserWelcomePanelComponent,
        SearchBarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatDialogModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ExperienceCardComponent,
        CallToActionCardComponent,
        LoginDialogComponent,
        ExperienceReportDialogComponent,
        PasswordForgotDialogComponent,
        SignupHelperDialogComponent,
        RegisterFormComponent,
        SearchBarComponent,
        LanguageDialogComponent,
        UserEditProfileComponent,
        UserWelcomePanelComponent,
        UserEditProfileComponent,
        UserWelcomePanelComponent,
        SearchBarComponent,
    ],
})
export class SharedModule { }