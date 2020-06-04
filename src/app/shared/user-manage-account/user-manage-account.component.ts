import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';


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
    // const dialogRef = this.dialog.open(SeeUserProfileDialogComponent, {
    //   width: '450px',
    //   data: {
    //     user: this.user,
    //   },
    //   autoFocus: false,
    // });
  }

  openChangePasswordDialog() {

  }

  openDeleteAccountDialog() {

  }

}
