import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-mifkadim',
  templateUrl: './popup-mifkadim.component.html',
  styleUrls: ['./popup-mifkadim.component.css']
})
export class PopupMifkadimComponent {
    items = [
        {
          id: 1,
          name: 'John',
          email: 'john@example.com',
          subTableData: [
            { subId: 101, subName: 'Sub John 1' },
            { subId: 102, subName: 'Sub John 2' }
          ]
        },
        // ... other items ...
      ];
    
      showSubTableIndex = -1;
    
      toggleSubTable(index: number): void {
        this.showSubTableIndex = (this.showSubTableIndex === index) ? -1 : index;
      }



      
    userTypeID;
    certificateSum = 0;
    objectsToShow:any
  
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
  