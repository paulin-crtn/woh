import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuBurgerClicked: Boolean;
  isMenuBurgerOpen : Boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuBurger() {
    this.isMenuBurgerClicked = true;
    this.isMenuBurgerOpen = !this.isMenuBurgerOpen;
  }

}
