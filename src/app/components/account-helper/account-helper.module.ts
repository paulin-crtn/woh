import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper'; 

import { AccountHelperRoutingModule } from './account-helper-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { CreditCardFormatDirective } from 'src/app/directives/credit-card-format.directive';

import { AccountHelperComponent } from './account-helper.component';
import { HomeComponent } from './home/home.component';
import { BecomePremiumDialogComponent } from './become-premium-dialog/become-premium-dialog.component';


@NgModule({
  declarations: [
    CreditCardFormatDirective,
    AccountHelperComponent, 
    HomeComponent, 
    BecomePremiumDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    AccountHelperRoutingModule,
    SharedModule,
  ]
})
export class AccountHelperModule { }
