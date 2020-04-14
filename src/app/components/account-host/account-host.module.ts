import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHostRoutingModule } from './account-host-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper'; 

import { AccountHostComponent } from './account-host.component';
import { HomeComponent } from './home/home.component';
import { AddPropertyDialogComponent } from './add-property-dialog/add-property-dialog.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { AddExperienceFormComponent } from './add-experience/add-experience-form/add-experience-form.component';


@NgModule({
  declarations: [
    AccountHostComponent, 
    HomeComponent, 
    AddPropertyDialogComponent, AddExperienceComponent, AddExperienceFormComponent,
  ],
  imports: [
    CommonModule,
    AccountHostRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
  ]
})
export class AccountHostModule { }
