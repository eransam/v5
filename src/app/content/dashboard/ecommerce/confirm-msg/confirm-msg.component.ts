import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-msg',
  templateUrl: './confirm-msg.component.html',
  styleUrls: ['./confirm-msg.component.css'],
})
export class ConfirmMsgComponent {
  confirm: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ConfirmMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  is_confirm(bool: any) {
    this.confirm = bool;
    this.dialogRef.close(this.confirm);
  }
}
