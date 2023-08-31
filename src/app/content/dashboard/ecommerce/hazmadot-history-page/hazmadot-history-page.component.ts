import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';


@Component({
  selector: 'app-hazmadot-history-page',
  templateUrl: './hazmadot-history-page.component.html',
  styleUrls: ['./hazmadot-history-page.component.css']
})
export class HazmadotHistoryPageComponent {
    userTypeID;
    certificateSum = 0;
    data: any[];
    total_chicken_sum: any = 0;
    transformedData: any[];
    total_packege_sum: any = 0;
    constructor(
      private tableexcelService: TableexcelService,
      public router: Router
    ) {
      console.log('data in constractor: ', this.data);
      // console.log('typeof data[0].id: ', typeof data[0].id);
    }
  
    async ngOnInit() {
      console.log('test');
      // data[data.length - 1].newArrayEnd
      // const uniqueArr: number[] = [...new Set(data)];
      this.data = JSON.parse(localStorage.getItem('hazmadot_history'));
      console.log(this.data);
  
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
  
 
  
  

  
      const selectedFieldsArray = this.data.map((item) => {
        return {
          source_flock_id: item.source_flock_id,
          source_farm_name: item.source_farm_name,
          create_date: item.create_date,
          certificate_id: item.certificate_id,
          source_farm_code: item.source_farm_code,
          farm_name: item.farm_name,
          farm_settlement_name: item.farm_settlement_name,
          farm_code: item.farm_code,
          dest_flock_id: item.dest_flock_id,
          lull2000_code: item.lull2000_code,
          grower_name: item.grower_name,
          package_sum: item.package_sum,
          chicken_sum_female: item.chicken_sum_female,
        };
      });
  
      console.log(selectedFieldsArray);
  
      const fieldTitleMapping = {
        source_flock_id: 'מס להקת מקור',
        source_farm_name: 'שם אתר מקור',
        create_date: 'תאריך תעודה',
        certificate_id: 'מס תעודה',
        source_farm_code: 'מס רישיון מקור',
        farm_name: 'שם משק יעד',
        farm_settlement_name: 'שם ישוב משק יעד',
        farm_code: 'מס אתר',
        dest_flock_id: 'מס להקה',
        lull2000_code: 'מס מגדל יעד',
        grower_name: 'שם מגדל יעד',
        package_sum: 'כמות כלובים',
        chicken_sum_female: 'כמות עופות',
        // ... continue mapping for other fields
      };
  
      this.transformedData = selectedFieldsArray.map((item) => {
        const transformedItem = {};
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            transformedItem[fieldTitleMapping[key] || key] = item[key];
          }
        }
        return transformedItem;
      });
  
      console.log(this.transformedData);
    }
  
    getExcelData(): void {
      this.tableexcelService.exportAsExcelFile(
        this.transformedData,
        'Modern Admin - Clean Angular8+ Dashboard HTML Template'
      );
    }
  }
  