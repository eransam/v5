import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-hiclos-by-site',
  templateUrl: './page-hiclos-by-site.component.html',
  styleUrls: ['./page-hiclos-by-site.component.css']
})
export class PageHiclosBySiteComponent {
    userTypeID;
    certificateSum = 0;
    data:any[]
  
    constructor(
      public router: Router
    ) {
      console.log('data in constractor: ', this.data);
      // console.log('typeof data[0].id: ', typeof data[0].id);
    }
  
    async ngOnInit() {
      console.log('test');
      this.data = JSON.parse(localStorage.getItem('data_hiclos_by_site'));

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
  