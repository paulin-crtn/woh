import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHostRoutingModule } from './account-host-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { AccountHostComponent } from './account-host.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AccountHostComponent, 
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AccountHostRoutingModule,
    SharedModule,
  ]
})
export class AccountHostModule { }
