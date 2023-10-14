import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-shivok-to-nashchata',
  templateUrl: './page-shivok-to-nashchata.component.html',
  styleUrls: ['./page-shivok-to-nashchata.component.css'],
})
export class PageShivokToNashchataComponent {
  userTypeID;
  certificateSum = 0;
  data: any[];
  originalData: any[];
  check_is_shivokim_Independent: any;
  total_chicken_sum: any = 0;
  transformedData: any[];
  total_packege_sum: any = 0;
  startDate: any;
  endDate: any;
  formattedDate: string;
  certificate_Selector: any;
  certificate_id2: any;
  isSplit: any = 'ראשי';
  formattedEndDate: string;
  transferStatusNamesArray: any[];
  total_count_packege: any = 0;
  total_count_agges: any = 0;
  @ViewChild('statusSelect') statusSelect: any; // Access the select element using the template reference variable
  showCalendar: boolean = false;
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
    this.total_count_packege = 0;
    this.total_count_agges = 0;
    //שהוא התאריך העכשיוי endDate ערך התחלתי למשנה
    const today = new Date();
    this.endDate = this.datePipe.transform(today, 'yyyy-MM-dd');

    //שהוא התאריך לפני שבוע מהיום startDate ערך התחלתי למשנה
    const startDateObj = new Date();
    startDateObj.setDate(today.getDate() - 7);
    this.startDate = this.datePipe.transform(startDateObj, 'yyyy-MM-dd');
    this.startDate = 'yyyy-MM-dd';

    //לוקחים את השיווקים מהלוקל סטורג
    this.data = JSON.parse(localStorage.getItem('shivokim_to_mashchata'));
    // בדיקת שיווק עצמאיי
    this.check_is_shivokim_Independent = JSON.parse(
      localStorage.getItem('shivokim_Independent')
    );

    // מוציא אובייקטים משוכפליםgit מהמערך
    const uniqueArr: any[] = [
      ...new Set(this.data[this.data.length - 1].newArrayEnd),
    ];
    this.data[this.data.length - 1].newArrayEnd = uniqueArr;
    this.originalData = this.data;

    // טוטל עגלות
    if (!this.check_is_shivokim_Independent) {
      this.count_total_eggs_and_packege(this.data);
    }

    console.log(this.data);
  }

  onDateChange(event: Event) {
    this.showCalendar = false;
  }

  count_total_eggs_and_packege(data) {
    this.total_count_packege = data.reduce(
      (sum, obj) => sum + obj.package_sum,
      0
    );
  }

  search_certificate_id() {
    console.log('e');

    var filter_by_certificate_id = this.originalData.filter(
      (item) => item.certificate_id === Number(this.certificate_id2)
    );

    if (filter_by_certificate_id.length > 0) {
      this.data = filter_by_certificate_id;
    } else {
      this.data = [];
    }
    this.count_total_eggs_and_packege(this.data);
  }

  certificates_more_Details(data) {
    console.log("f");
    
    console.log(data);
    var real_data2 = this.originalData;
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
    console.log('t');

    const selectedFieldsArray = this.data.map((item) => {
      return {
        certificate_id: item.certificate_id,
        certificate_date: item.certificate_date,
        belonging_group_name: item.belonging_group_name,
        farm_code_c: item.farm_code_c,
        farm_name_c: item.farm_name_c,
        slaughter_name: item.slaughter_name,
        slaughter_kind_name: item.slaughter_kind_name,
        flock_id: item.flock_id,
        msvk_code: item.msvk_code,
        msvk_name: item.msvk_name,
        chicken_number_c: item.chicken_number_c,
        weight: item.weight,
      };
    });
    const fieldTitleMapping = {
      certificate_id: 'מס תעודה',
      certificate_date: 'תאריך תעודה',
      belonging_group_name: 'שם שלוחה',
      farm_code_c: 'קוד משק',
      farm_name_c: 'שם משק',
      slaughter_name: 'שם משחטה',
      slaughter_kind_name: 'סוג משחטה',
      flock_id: 'מס להקה',
      msvk_code: 'קוד משווק',
      msvk_name: 'שם משווק',
      chicken_number_c: 'מס עופות',
      weight: 'משקל',
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

    this.tableexcelService.exportAsExcelFile(
      this.transformedData,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }

  set_val_of_sort_by_certificate(event: any) {
    this.certificate_id2 = event.target.value;
  }

  //   מיון לפי סטטוס
  onStatusSelected(event: any) {
    this.certificate_id2 = '';
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
    this.count_total_eggs_and_packege(this.data);
  }

  cleanInputFild() {
    this.startDate = '';
    this.endDate = '';
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  openDatePicker() {
    // this.endDate = new Date(); // Replace with your date logic
    // this.formattedEndDate = this.formatDate(this.endDate);
  }

  async search() {
    this.certificate_id2 = '';
    this.total_count_packege = 0;
    this.total_count_agges = 0;
    console.log('Start Date:', this.startDate);

    console.log('End Date:', this.endDate);
    if (typeof this.startDate === 'object') {
      this.startDate = `${this.startDate.year}-${this.startDate.month
        .toString()
        .padStart(2, '0')}-${this.startDate.day.toString().padStart(2, '0')}`;
    }
    if (typeof this.endDate === 'object') {
      this.endDate = `${this.endDate.year}-${this.endDate.month
        .toString()
        .padStart(2, '0')}-${this.endDate.day.toString().padStart(2, '0')}`;
    }

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
      this.count_total_eggs_and_packege(this.data);
    } else {
      var shivokim =
        await this.megadelSearchService.get_shivok_to_mashchata_by_date_and_flock_id(
          this.data[0].flock_id,
          this.startDate,
          this.endDate
        );
      if (shivokim.length > 0) {
        this.data = shivokim;
      } else {
        this.data = [];
      }

      this.count_total_eggs_and_packege(this.data);
    }
  }
}




// ---------------------------------------


