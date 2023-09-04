import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';

@Component({
  selector: 'app-page-popup-show-all-certificate-transfer',
  templateUrl: './page-popup-show-all-certificate-transfer.component.html',
  styleUrls: ['./page-popup-show-all-certificate-transfer.component.css'],
})
export class PagePopupShowAllCertificateTransferComponent {
    sumsByFarmNum:any
    currentPage = 1;
    itemsPerPage = 20;
  userTypeID;
  certificateSum = 0;
  data: any[];
  farmTotals: Record<string, { total_package_sum: number, total_chicken_sum_female: number }> = {};
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
    this.data = JSON.parse(localStorage.getItem('this.all_certificate_det'));
    console.log(this.data);
    // const uniqueArr: any[] = [...new Set(this.data)];
    // this.data = uniqueArr;


    const uniqueObjects = new Map();

// Filter the original array to get unique objects
this.data = this.data.filter((obj) => {
  const key = JSON.stringify(obj); // Convert the object to a string for comparison
  if (!uniqueObjects.has(key)) {
    uniqueObjects.set(key, true); // Mark this object as seen
    return true; // Include this object in the filtered array
  }
  return false; // Skip this object, it's a duplicate
});

console.log(this.data);



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

    this.data.sort(customComparator);

    console.log('this.data: ', this.data);

    this.total_chicken_sum = this.data.reduce(
      (sum, obj) => sum + obj.chicken_sum_female,
      0
    );
    console.log(this.total_chicken_sum);

    this.total_packege_sum = this.data.reduce(
      (sum, obj) => sum + Number(obj.package_sum),
      0
    );
    console.log(this.total_packege_sum);

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
    this.calculateSums();
  }
  getPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }


  calculateSums(): void {
    this.sumsByFarmNum = this.data.reduce((sums, item) => {
      const { 
        farm_code, chicken_sum_female } = item;

      // If the farm_code is already in the sums object, add count_f to it
      if (sums[
        farm_code]) {
        sums[
            farm_code] += chicken_sum_female;
      } else {
        // If the farm_code is not in the sums object, initialize it with count_f
        sums[
            farm_code] = chicken_sum_female;
      }

      return sums;
    }, {});
  }

  

  setPage(page: number) {
    this.currentPage = page;
  }
  calculateSummary() {
    const paginatedData = this.getPaginatedData();
    const total_packege_sum = paginatedData.reduce((total, item) => total + item.package_sum, 0);
    const total_chicken_sum = paginatedData.reduce((total, item) => total + item.chicken_sum_female, 0);
    return { total_packege_sum, total_chicken_sum };
  }
  getTotalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  calculateFarmTotals() {
    this.farmTotals = {};
    this.data.forEach(item => {
      const farmCode = item.farm_code;
      if (!this.farmTotals[farmCode]) {
        this.farmTotals[farmCode] = {
          total_package_sum: 0,
          total_chicken_sum_female: 0
        };
      }
      this.farmTotals[farmCode].total_package_sum += item.package_sum;
      this.farmTotals[farmCode].total_chicken_sum_female += item.chicken_sum_female;
    });
  }
  getObjectKeys(obj: any) {
    return Object.keys(obj);
  }

  getExcelData(): void {
    this.tableexcelService.exportAsExcelFile(
      this.transformedData,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }
}
