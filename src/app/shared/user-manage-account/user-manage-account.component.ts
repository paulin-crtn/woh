import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

import { BecomePremiumDialogComponent } from 'src/app/components/account-helper/become-premium-dialog/become-premium-dialog.component';
import { ChangePasswordDialogComponent } from '../dialogs/change-password-dialog/change-password-dialog.component';
import { DeleteAccountDialogComponent } from '../dialogs/delete-account-dialog/delete-account-dialog.component';


@Component({
  selector: 'app-user-manage-account',
  templateUrl: './user-manage-account.component.html',
  styleUrls: ['./user-manage-account.component.scss']
})
export class UserManageAccountComponent implements OnInit {
  user: User;
  isPremium: boolean;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    console.log(this.user);
    this.isUserPremium();
  }

  isUserPremium() {
    new Date() > new Date(this.user.premium_until)
    ? this.isPremium = false
    : this.isPremium = true;
  }

  openBecomePremiumDialog() {
    const dialogRef = this.dialog.open(BecomePremiumDialogComponent, {
      width: '450px',
      data: {
        user: this.user,
      },
      autoFocus: false,
    });
  }

  openChangePasswordDialog() {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      width: '450px',
      autoFocus: false,
    });
  }

  openDeleteAccountDialog() {
    const dialogRef = this.dialog.open(DeleteAccountDialogComponent, {
      width: '450px',
      data: {
        user: this.user,
      },
      autoFocus: false,
    });
  }

}
