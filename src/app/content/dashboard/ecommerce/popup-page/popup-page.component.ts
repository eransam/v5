import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.css'],
})
export class PopupPageComponent {
  data: any[];
  userTypeID;
  certificateSum = 0;

  constructor(public router: Router) {}

  async ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('this.partnerData'));
    const uniqueArr: any[] = [
      ...new Set(this.data[this.data.length - 1].newArrayEnd),
    ];
    this.data[this.data.length - 1].newArrayEnd = uniqueArr;

    // Custom comparator function for sorting based on 'is_main_grower'
    function customComparator(a: any, b: any) {
      if (a.is_main_grower === 1 && b.is_main_grower === 0) {
        return -1; // a should come before b
      } else if (a.is_main_grower === 0 && b.is_main_grower === 1) {
        return 1; // b should come before a
      } else {
        return 0; // Leave them in the same order as they are (maintain stability)
      }
    }

    // Sort the array using the custom comparator function
    this.
    data.sort(customComparator);

    console.log('this.data: ', this.data);
  }
}
