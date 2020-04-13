import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

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
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.user.profile_picture_url !== null ? this.profilePictureUrl = this.user.profile_picture_url : this.profilePictureUrl = 'assets/icons/default-user-profile-picture.svg';
  }
}
