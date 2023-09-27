import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-page-shivokim-hatala',
  templateUrl: './page-shivokim-hatala.component.html',
  styleUrls: ['./page-shivokim-hatala.component.css'],
})
export class PageShivokimHatalaComponent {
  userTypeID;
  certificateSum = 0;
  data: any[];
  originalData: any[];
  check_is_shivokim_Independent: any;
  total_chicken_sum: any = 0;
  transformedData: any[];
  total_packege_sum: any = 0;
  startDate: string;
  endDate: any;
  formattedEndDate: string;
  transferStatusNamesArray: any[];
  constructor(
    private datePipe: DatePipe,
    private tableexcelService: TableexcelService,
    private megadelSearchService: MegadelSearchService,
    public router: Router
  ) {
    console.log('data in constractor: ', this.data);
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    const today = new Date();
    this.endDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    const startDateObj = new Date();
    startDateObj.setDate(today.getDate() - 7);
    this.startDate = this.datePipe.transform(startDateObj, 'yyyy-MM-dd');

    console.log(this.endDate);
    console.log(this.startDate);

    console.log('test');
    this.data = JSON.parse(localStorage.getItem('all_current_shivokim'));
    this.check_is_shivokim_Independent = JSON.parse(
      localStorage.getItem('shivokim_Independent')
    );
    console.log(this.data);
    console.log(this.check_is_shivokim_Independent);

    // מוציא אובייקטים משוכפלים מהמערך
    const uniqueArr: any[] = [
      ...new Set(this.data[this.data.length - 1].newArrayEnd),
    ];
    this.data[this.data.length - 1].newArrayEnd = uniqueArr;

    console.log('this.data: ', this.data);

    this.data.sort((a, b) => {
      const dateA: any = new Date(a.hz_date_hzmd_from);
      const dateB: any = new Date(b.hz_date_hzmd_from);

      return dateB - dateA;
    });

    console.log('this.data: ', this.data);
    this.originalData = this.data;
    const transferStatusNamesArray1 = [];
    this.data.forEach((item) => {
      transferStatusNamesArray1.push(item.transfer_status_name);
    });
    this.transferStatusNamesArray = Array.from(
      new Set(transferStatusNamesArray1)
    );
    console.log(this.transferStatusNamesArray);

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
  //////////////////////////////////////////////////   סיום לוגיקת אקסל   //////////////////////////////////////////////////////////

  // פונ הורדה לאקסל
  getExcelData(): void {
    this.tableexcelService.exportAsExcelFile(
      this.transformedData,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }

  onStatusSelected(event: any) {
    const selectedStatus = event.target.value;
    console.log('Selected status:', selectedStatus);
    if (selectedStatus === 'כולם') {
      this.data = this.originalData;
      console.log(this.data);
    } else {
      var filteredData = this.originalData.filter(
        (item) => item.transfer_status_name === selectedStatus
      );
      console.log(filteredData);
      this.data = filteredData;
      console.log(this.data);
    }
  }

  cleanInputFild() {
    this.startDate = '';
    this.endDate = '';
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  openDatePicker() {
    this.endDate = new Date(); // Replace with your date logic
    this.formattedEndDate = this.formatDate(this.endDate);
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
