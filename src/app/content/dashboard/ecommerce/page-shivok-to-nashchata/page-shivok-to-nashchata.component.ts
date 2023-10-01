import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';

@Component({
  selector: 'app-page-shivok-to-nashchata',
  templateUrl: './page-shivok-to-nashchata.component.html',
  styleUrls: ['./page-shivok-to-nashchata.component.css'],
})
export class PageShivokToNashchataComponent {
  userTypeID;
  certificateSum = 0;
  data: any[];
  real_data: any[];
  real_start_date: any[];
  check_is_shivokim_Independent: any;
  total_chicken_sum: any = 0;
  transformedData: any[];
  total_packege_sum: any = 0;
  startDate: string;
  endDate: string;
  certificate_id2: any;
  the_start_shivokim: any[];
  constructor(
    private tableexcelService: TableexcelService,
    private megadelSearchService: MegadelSearchService,
    public router: Router
  ) {
    console.log('data in constractor: ', this.data);
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    this.the_start_shivokim = [];
    console.log('test');
    this.data = JSON.parse(localStorage.getItem('shivokim_to_mashchata'));
    console.log(this.data);
    this.real_data = this.data;

    await this.test2(this.data);

    //   // לוגיקת אקסל
    //   const selectedFieldsArray = this.data.map((item) => {
    //     return {
    //       hz_WareHouse: item.hz_WareHouse,
    //       hz_msvk_nosaf: item.hz_msvk_nosaf,
    //       hz_date_hzmd_from: item.hz_date_hzmd_from,
    //       hz_code_hzmd: item.hz_code_hzmd,
    //       hz_date_hzmd_to: item.hz_date_hzmd_to,
    //       hz_Dtupd: item.hz_Dtupd,
    //       code: item.code,
    //       tb_name: item.tb_name,
    //       hz_Rishaion_Msk:item.hz_Rishaion_Msk,
    //       tnai_hazmada: item.tnai_hazmada,

    //     };
    //   });
    //   const fieldTitleMapping = {
    //       hz_WareHouse: 'שיווק במחסן',
    //       hz_msvk_nosaf: 'משווק נוסף',
    //       hz_date_hzmd_from: 'תאריך תעודה',
    //       hz_code_hzmd: 'מס תעודה',
    //       hz_date_hzmd_to: 'מתאריך',
    //       hz_Dtupd: 'תאריך עדכון',
    //       code: 'קוד אתר',
    //       tb_name: 'שם משווק ',
    //       hz_Rishaion_Msk: 'רישיון משווק',
    //       tnai_hazmada: 'תנאי הצמדה',
    //   };

    //   this.transformedData = selectedFieldsArray.map((item) => {
    //     const transformedItem = {};
    //     for (const key in item) {
    //       if (item.hasOwnProperty(key)) {
    //         transformedItem[fieldTitleMapping[key] || key] = item[key];
    //       }
    //     }
    //     return transformedItem;
    //   });

    //   console.log(this.transformedData);
  }

  search_certificate_id
  
  //////////////////////////////////////////////////   סיום לוגיקת אקסל   //////////////////////////////////////////////////////////

  test2(the_data) {
    this.the_start_shivokim = [];
    const groupedByCertificateWeightId = the_data.reduce((acc, obj) => {
      const certificateWeightId = obj.certificate_weight_id;
      const existingGroup = acc.find(
        (item) => item.certificate_weight_id === certificateWeightId
      );

      if (existingGroup) {
        existingGroup.items.push(obj);
      } else {
        acc.push({ certificate_weight_id: certificateWeightId, items: [obj] });
      }

      return acc;
    }, []);

    console.log(
      'Grouped array by certificate_weight_id:',
      groupedByCertificateWeightId
    );

    for (let obg of groupedByCertificateWeightId) {
      if (obg.certificate_weight_id !== null) {
        this.the_start_shivokim.push(obg.items[0]);
      }
    }

    console.log(this.the_start_shivokim);
    for (let obj of this.the_start_shivokim) {
      obj.is_start_arr = true;
    }
    this.real_start_date = this.the_start_shivokim;
    the_data = this.the_start_shivokim;

    console.log(the_data);
    this.data = the_data;
  }

  certificates_more_Details(data) {
    console.log(data);
    var real_data2 = this.real_data;
    const newArray = real_data2.filter(
      (obj) => obj.certificate_weight_id === data
    );
    for (let obj of newArray) {
      obj.is_start_arr = false;
      obj.weight = obj.privat_weight;
    }
    this.data = newArray;
  }

  // פונ הורדה לאקסל
  getExcelData(): void {
    this.tableexcelService.exportAsExcelFile(
      this.transformedData,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }

  page_before() {
    this.test2(this.real_data);
  }

  async search() {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);

    if (this.check_is_shivokim_Independent) {
      var shivokim =
        await this.megadelSearchService.get_shivokim_Independent_by_date_and_flock_id(
          this.data[0].flock_id,
          this.startDate,
          this.endDate
        );
      if (shivokim.length > 0) {
        this.data = shivokim;
      } else {
        this.data = [];
      }
    } else {
      var shivokim =
        await this.megadelSearchService.get_shivokim_by_date_and_flock_id(
          this.data[0].flock_id,
          this.startDate,
          this.endDate
        );
      if (shivokim.length > 0) {
        this.data = shivokim;
      } else {
        this.data = [];
      }
    }
  }
}
