import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AuthGuardHelperService } from 'src/app/core/auth/authGardHelper';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardHelperService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardHelperService],
})
export class AccountHelperRoutingModule { }
