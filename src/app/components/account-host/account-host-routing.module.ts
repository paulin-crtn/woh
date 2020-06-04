import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardHostService } from 'src/app/core/auth/authGardHost';

import { HomeComponent } from './home/home.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { UserEditProfileComponent } from 'src/app/shared/user-edit-profile/user-edit-profile.component';
import { UserManageAccountComponent } from 'src/app/shared/user-manage-account/user-manage-account.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardHostService] },
  { path: 'add-experience', component: AddExperienceComponent, canActivate: [AuthGuardHostService] },
  { path: 'edit-profile', component: UserEditProfileComponent, canActivate: [AuthGuardHostService] },
  { path: 'manage-account', component: UserManageAccountComponent, canActivate: [AuthGuardHostService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardHostService],
})
export class AccountHostRoutingModule { }
