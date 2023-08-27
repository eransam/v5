import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-popup-mifkadim-component-page',
    templateUrl: './popup-mifkadim-component-page.component.html',
    styleUrls: ['./popup-mifkadim-component-page.component.css'],
  })
  export class PopupMifkadimComponentPageComponent implements OnInit {
    main_arr: any[];
    data: any[];

      showSubTableIndex = -1;
    
      toggleSubTable(index: number): void {
        this.showSubTableIndex = (this.showSubTableIndex === index) ? -1 : index;
      }

    userTypeID;
    certificateSum = 0;
    objectsToShow:any
  
    constructor(
      public router: Router
    ) {
    }
  
    async ngOnInit() {
        this.data = JSON.parse(localStorage.getItem('main_arr'));
        console.log(this.data);

      console.log('test');
      const uniqueArr: any[] = [
        ...new Set(this.data[this.data.length - 1].newArrayEnd),
      ];
      this.data[this.data.length - 1].newArrayEnd = uniqueArr;
  
      function customComparator(a: any, b: any) {
        if (a.is_main_grower === 1 && b.is_main_grower === 0) {
          return -1;
        } else if (a.is_main_grower === 0 && b.is_main_grower === 1) {
          return 1;
        } else {
          return 0; 
        }
      }
        this.data.sort(customComparator);
  
      console.log('this.data: ', this.data);

      var short_arr_mifkadim:any[]
         short_arr_mifkadim = this.data[this.data.length - 1]["array_mifkadim_short"]
        console.log(short_arr_mifkadim);

        this.data[this.data.length - 1]['array_mifkadim_short'].forEach(item => {
            item.expanded = false;
          });
    }
    toggleExpansion(item2: any) {
        item2.expanded = !item2.expanded;
        this.objectsToShow = this.data.filter(item => item.
            Mifkad_id === item2.Mifkad_id);
            console.log(this.objectsToShow);           
      }      
  }

