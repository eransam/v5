import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-popup-pinoyim',
  templateUrl: './page-popup-pinoyim.component.html',
  styleUrls: ['./page-popup-pinoyim.component.css'],
})
export class PagePopupPinoyimComponent {
  userTypeID;
  certificateSum = 0;
  data: any[];

  constructor(public router: Router) {
    console.log('data in constractor: ', this.data);
  }

  async ngOnInit() {
    console.log('test');

    this.data = JSON.parse(localStorage.getItem('pinoyim_data'));

    const uniqueArr: any[] = [
      ...new Set(this.data[this.data.length - 1].newArrayEnd),
    ];
    this.data[this.data.length - 1].newArrayEnd = uniqueArr;

    console.log('this.data: ', this.data);
  }
}
