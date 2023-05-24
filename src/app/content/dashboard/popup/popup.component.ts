import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  userTypeID;
  certificateSum = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  async ngOnInit() {
    console.log('test');
  }
}
