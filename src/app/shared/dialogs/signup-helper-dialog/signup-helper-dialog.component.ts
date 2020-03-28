import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-helper-dialog',
  templateUrl: './signup-helper-dialog.component.html',
  styleUrls: ['./signup-helper-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupHelperDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SignupHelperDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  openDialogLogin() {
    this.dialogRef.close({
      action: 'openLogin',
    });
  }

}
