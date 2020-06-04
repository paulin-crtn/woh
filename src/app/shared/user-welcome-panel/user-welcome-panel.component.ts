import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

import { SeeUserProfileDialogComponent } from '../dialogs/see-user-profile-dialog/see-user-profile-dialog.component';


@Component({
  selector: 'app-user-welcome-panel',
  templateUrl: './user-welcome-panel.component.html',
  styleUrls: ['./user-welcome-panel.component.scss']
})
export class UserWelcomePanelComponent implements OnInit {
  user: User;
  profilePictureUrl: string;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.user.profile_picture_url !== null ? this.profilePictureUrl = this.user.profile_picture_url : this.profilePictureUrl = 'assets/icons/default-user-profile-picture.svg';
  }

  openDialogSeeProfile() {
    const dialogRef = this.dialog.open(SeeUserProfileDialogComponent, {
      width: '450px',
      data: {
        user: this.user,
      },
      autoFocus: false,
    });
  }
}
