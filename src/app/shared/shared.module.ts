import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; 

import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { ShowAuthedDirective } from 'src/app/directives/show-authed.directive';

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
import { UserEditProfileFormComponent } from './user-edit-profile/user-edit-profile-form/user-edit-profile-form.component';
import { UpdateUserEmailDialogComponent } from './dialogs/update-user-email-dialog/update-user-email-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { SeeUserProfileDialogComponent } from './dialogs/see-user-profile-dialog/see-user-profile-dialog.component';
import { UserManageAccountComponent } from './user-manage-account/user-manage-account.component';
import { DeleteAccountDialogComponent } from './dialogs/delete-account-dialog/delete-account-dialog.component';
import { ChangePasswordDialogComponent } from './dialogs/change-password-dialog/change-password-dialog.component';

@NgModule({
    declarations: [
        ClickOutsideDirective,
        ShowAuthedDirective,
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
        UserEditProfileFormComponent,
        UpdateUserEmailDialogComponent,
        SeeUserProfileDialogComponent,
        UserManageAccountComponent,
        DeleteAccountDialogComponent,
        ChangePasswordDialogComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        SatDatepickerModule,
        SatNativeDateModule,
    ],
    exports: [
        ClickOutsideDirective,
        ShowAuthedDirective,
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