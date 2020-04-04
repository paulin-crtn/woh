import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locale: string;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'French' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string, private userService: UserService) { 
    this.locale = localeId;
  }

  ngOnInit() {
    this.userService.isUserLogged().subscribe(
      response => {
        if (response) {
          this.userService.getLoggedUser();
        }
    })
  }
}