import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHelperRoutingModule } from './account-helper-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { AccountHelperComponent } from './account-helper.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AccountHelperComponent, 
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AccountHelperRoutingModule,
    SharedModule,
  ]
})
export class AccountHelperModule { }
