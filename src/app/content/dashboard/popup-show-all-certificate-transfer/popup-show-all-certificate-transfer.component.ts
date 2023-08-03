import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-show-all-certificate-transfer',
  templateUrl: './popup-show-all-certificate-transfer.component.html',
  styleUrls: ['./popup-show-all-certificate-transfer.component.css'],
})
export class PopupShowAllCertificateTransferComponent implements OnInit {
  userTypeID;
  certificateSum = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) {
    console.log('data in constractor: ', data);
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    console.log('test');
    // data[data.length - 1].newArrayEnd
    // const uniqueArr: number[] = [...new Set(data)];
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
    this.data.sort(customComparator);

    console.log('this.data: ', this.data);
  }
}





// body div.cdk-overlay-container .Popup_Old_Grower_Name {
//     background-color: white !important;
//     max-width: 60vw;
//     color: black !important;
//     background-color: silver;
//     font-size: 20px;
//     margin: auto;
//     color: black !important;
//     background-color: silver;
//     font-size: 20px;
//     direction: rtl;
//     padding: 4px;
//     width: -moz-fit-content;
//     width: 50%;
//     position: absolute !important;
//     top: 41%;
//     /* left: 52%; */
//     height: 50%;
//     right: 0%;
//     transform: translate(-50%, -50%);
//     margin: auto;