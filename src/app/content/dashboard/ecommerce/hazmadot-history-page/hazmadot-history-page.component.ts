import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';

@Component({
  selector: 'app-hazmadot-history-page',
  templateUrl: './hazmadot-history-page.component.html',
  styleUrls: ['./hazmadot-history-page.component.css'],
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



        hz_WareHouse: item.hz_WareHouse,
        hz_msvk_nosaf: item.hz_msvk_nosaf,
        hz_date_hzmd_from: item.hz_date_hzmd_from,
        hz_code_hzmd: item.hz_code_hzmd,
        hz_date_hzmd_to: item.hz_date_hzmd_to,
        hz_Dtupd: item.hz_Dtupd,
        code: item.code,
        tb_name: item.tb_name,
        hz_Rishaion_Msk:item.hz_Rishaion_Msk,
        tnai_hazmada: item.tnai_hazmada,

      };
    });

    console.log(selectedFieldsArray);


    const fieldTitleMapping = {
        hz_WareHouse: 'שיווק במחסן',
        hz_msvk_nosaf: 'משווק נוסף',
        hz_date_hzmd_from: 'תאריך תעודה',
        hz_code_hzmd: 'מס תעודה',
        hz_date_hzmd_to: 'מתאריך',
        hz_Dtupd: 'תאריך עדכון',
        code: 'קוד אתר',
        tb_name: 'שם משווק ',
        hz_Rishaion_Msk: 'רישיון משווק',
        tnai_hazmada: 'תנאי הצמדה',
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
