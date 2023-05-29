import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  userTypeID;
  certificateSum = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) {
    console.log('data in constractor: ', data);
    console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    console.log('test');
  }
}
