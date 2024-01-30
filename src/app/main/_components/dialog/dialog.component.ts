import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

export interface DialogData {
  title: string;
  text: string;
  leftButton: string | null;
  rightButton: string;
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, NgIf, MatButtonModule],
})
export class Dialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<Dialog>) {}

  leftButtonClick() {
    this.dialogRef.close(false);
  }

  rightButtonClick() {
    this.dialogRef.close(true);
  }
}
