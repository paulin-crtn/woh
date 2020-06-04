import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardHelperService } from 'src/app/core/auth/authGardHelper';

import { HomeComponent } from './home/home.component';
import { UserEditProfileComponent } from 'src/app/shared/user-edit-profile/user-edit-profile.component';
import { UserManageAccountComponent } from 'src/app/shared/user-manage-account/user-manage-account.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardHelperService]},
  { path: 'edit-profile', component: UserEditProfileComponent, canActivate: [AuthGuardHelperService] },
  { path: 'manage-account', component: UserManageAccountComponent, canActivate: [AuthGuardHelperService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardHelperService],
})
export class AccountHelperRoutingModule { }
