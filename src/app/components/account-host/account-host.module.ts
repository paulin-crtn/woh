import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHostRoutingModule } from './account-host-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { AccountHostComponent } from './account-host.component';
import { HomeComponent } from './home/home.component';
import { AddPropertyDialogComponent } from './add-property-dialog/add-property-dialog.component';


@NgModule({
  declarations: [
    AccountHostComponent, 
    HomeComponent, 
    AddPropertyDialogComponent,
  ],
  imports: [
    CommonModule,
    AccountHostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
  ]
})
export class AccountHostModule { }
