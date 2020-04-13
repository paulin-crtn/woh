import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AuthGuardHostService } from 'src/app/core/auth/authGardHost';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardHostService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardHostService],
})
export class AccountHostRoutingModule { }
