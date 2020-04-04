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

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
