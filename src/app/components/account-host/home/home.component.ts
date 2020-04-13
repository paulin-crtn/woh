import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AddPropertyDialogComponent } from '../add-property-dialog/add-property-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openAddPropertyDialog() {
    const dialogRef = this.dialog.open(AddPropertyDialogComponent, {
      width: '450px',
      data: {},
      autoFocus: false,
    });
  }

}
