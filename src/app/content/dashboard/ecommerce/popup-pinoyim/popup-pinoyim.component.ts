import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-pinoyim',
  templateUrl: './popup-pinoyim.component.html',
  styleUrls: ['./popup-pinoyim.component.css'],
})
export class PopupPinoyimComponent {
  userTypeID;
  certificateSum = 0;
  objectsToShow: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) {
    console.log('data in constractor: ', data);
  }

  async ngOnInit() {
    console.log('test');

    const uniqueArr: any[] = [
      ...new Set(this.data[this.data.length - 1].newArrayEnd),
    ];
    this.data[this.data.length - 1].newArrayEnd = uniqueArr;
    // function customComparator(a: any, b: any) {
    //   if (a.is_main_grower === 1 && b.is_main_grower === 0) {
    //     return -1; // a should come before b
    //   } else if (a.is_main_grower === 0 && b.is_main_grower === 1) {
    //     return 1; // b should come before a
    //   } else {
    //     return 0; // Leave them in the same order as they are (maintain stability)
    //   }
    // }

    // Sort the array using the custom comparator function
    // this.data.sort(customComparator);
    console.log('this.data: ', this.data);
  }
  toggleExpansion(item2: any) {
    item2.expanded = !item2.expanded;
    this.objectsToShow = this.data.filter(
      (item) => item.Mifkad_id === item2.Mifkad_id
    );

    console.log(this.objectsToShow);
  }
}
