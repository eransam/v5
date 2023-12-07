import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MyDatePickerOptions } from '../ui/date-picker-option';

@Component({
  selector: 'app-page-shivokim-from-imon-to-end-site',
  templateUrl: './page-shivokim-from-imon-to-end-site.component.html',
  styleUrls: ['./page-shivokim-from-imon-to-end-site.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PageShivokimFromImonToEndSiteComponent {
  sort_by_grower_name: any;
  sort_by_grower_num: any;
  userTypeID;
  certificateSum = 0;
  data: any[];
  originalData: any[];
  //   check_is_shivokim_Independent: any;
  total_chicken_sum: any = 0;
  transformedData: any[];
  total_packege_sum: any = 0;
  startDate: any;
  flock_hatch_date: any;
  flock_num: any;
  tatle_farm_code: any;
  tatle_farm_name: any;
  endDate: any;
  formattedDate: string;
  certificate_Selector: any;
  splits: any;
  certificate_id2: any;
  isSplit: any = 'ראשי';
  formattedEndDate: string;
  transferStatusNamesArray: any[];
  total_count_packege: any = 0;
  total_count_agges: any = 0;
  @ViewChild('statusSelect') statusSelect: any; // Access the select element using the template reference variable
  showCalendar: boolean = false;
  myDpOptions: any;
  toDateModel: any;
  fromDateModel: any;
  toDate: any;
  fromDate: any;
  check_shivokim_Independent: boolean;
  @ViewChild('dp') datepicker: BsDatepickerDirective; // Reference to the datepicker
  @ViewChild('dpTo') dpTo: BsDatepickerDirective;
  startDate_to_search: any;
  endDate_to_search: any;
  total_count_chicken: any = 0;
  total_count_package_sum: any = 0;
  constructor(
    private dpOptions: MyDatePickerOptions,
    private datePipe: DatePipe,
    private tableexcelService: TableexcelService,
    private megadelSearchService: MegadelSearchService,
    public router: Router
  ) {
    this.myDpOptions = this.dpOptions.myOption;
  }

  async ngOnInit() {
    console.log('d');

    this.fromDateModel = this.dpOptions.getIMyDateModel(
      this.datePipe.transform(new Date(), 'dd/MM/yyyy')
    );
    this.toDateModel = this.dpOptions.getIMyDateModel(
      this.datePipe.transform(new Date(), 'dd/MM/yyyy')
    );
    this.onInit_func();
    console.log('g');
    this.tatle_farm_code = localStorage.getItem('farm_num');
    this.tatle_farm_name = localStorage.getItem('farm_name');
  }

  onInit_func() {
    this.isSplit = 'ראשי';
    this.total_count_packege = 0;
    this.total_count_agges = 0;
    //שהוא התאריך העכשיוי endDate ערך התחלתי למשנה
    const today = new Date();
    this.endDate = this.datePipe.transform(today, 'dd-MM-yyyy');

    //שהוא התאריך לפני שבוע מהיום startDate ערך התחלתי למשנה
    const startDateObj = new Date();
    this.splits = 'ראשי';
    startDateObj.setDate(today.getDate() - 7);
    this.startDate = this.datePipe.transform(startDateObj, 'dd-MM-yyyy');
    //this.startDate = 'yyyy-MM-dd';
    this.data = JSON.parse(
      localStorage.getItem('shivokim_from_imon_to_end_site')
    );

    this.check_shivokim_Independent = JSON.parse(
      localStorage.getItem('this.check_shivokim_Independent')
    );

    this.flock_num = JSON.parse(localStorage.getItem('flock_num'));
    this.flock_hatch_date = JSON.parse(
      localStorage.getItem('flock_hatch_date')
    );

    if (this.data.length > 0) {
      // מוציא אובייקטים משוכפלים מהמערך
      const uniqueArr: any[] = [
        ...new Set(this.data[this.data.length - 1].newArrayEnd),
      ];
      this.data[this.data.length - 1].newArrayEnd = uniqueArr;

      this.data.sort((a, b) => {
        const dateA: any = new Date(a.hz_date_hzmd_from);
        const dateB: any = new Date(b.hz_date_hzmd_from);

        return dateB - dateA;
      });

      this.originalData = this.data;
      const transferStatusNamesArray1 = [];
      this.data.forEach((item) => {
        transferStatusNamesArray1.push(item.transfer_status_name);
      });
      this.transferStatusNamesArray = Array.from(
        new Set(transferStatusNamesArray1)
      );

      // טוטל עגלות
      if (!this.check_shivokim_Independent) {
        this.count_total_eggs_and_packege(this.data);
      }
      console.log('dd');
    }
  }

  search_grower_name() {
    console.log('gg');

    var filter_by_grower_name = this.data.filter((item) =>
      item.grower_name.includes(this.sort_by_grower_name)
    );

    if (filter_by_grower_name.length > 0) {
      this.data = filter_by_grower_name;
    } else {
      this.data = [];
    }
    this.count_total_eggs_and_packege(this.data);
  }

  search_grower_num() {
    console.log('gg');

    var filter_by_grower_num = this.data.filter((item) =>
      item.lull2000_code.includes(this.sort_by_grower_num)
    );

    if (filter_by_grower_num.length > 0) {
      this.data = filter_by_grower_num;
    } else {
      this.data = [];
    }
    this.count_total_eggs_and_packege(this.data);
  }

  set_val_of_sort_by_grower_num(event: any) {
    this.sort_by_grower_num = event.target.value;
  }

  set_val_of_sort_by_grower_name(event: any) {
    this.sort_by_grower_name = event.target.value;
  }

  toggleDatepicker() {
    this.datepicker.toggle();
  }

  toggleDatepickerTo() {
    this.dpTo.toggle(); // Toggles the "to date" datepicker
  }

  onDateChange(event: Event) {
    this.showCalendar = false;
  }

  count_total_eggs_and_packege(data) {
    console.log(data);

    this.total_count_chicken = data.reduce(
      (sum, obj) => sum + obj.chicken_sum_female,
      0
    );

    this.total_count_package_sum = data.reduce(
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


  async open_certificate_details(certificate_id: any) {
    var newWindow = window.open(`http://aws-iis.lul.epb:9091/app/v3.3.8/#/certificate-egg-details/${certificate_id}`, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      console.log('New window was blocked by a popup blocker.');
    }
}


  // פונ הורדה לאקסל
  getExcelData(): void {
    console.log('g');
    {
    }

    const selectedFieldsArray = this.data.map((item) => {
      return {
        create_date: item.create_date,
        certificate_id: item.certificate_id,
        source_farm_code: item.source_farm_code,
        source_farm_name: item.source_farm_name,
        farm_code: item.farm_code,
        farm_name: item.farm_name,
        farm_settlement_name: item.farm_settlement_name,
        dest_flock_id: item.dest_flock_id,
        lull2000_code: item.lull2000_code,
        grower_name: item.grower_name,
        package_sum: item.package_sum,
        chicken_sum_female: item.chicken_sum_female,
      };
    });
    const fieldTitleMapping = {
      create_date: 'תאריך תעודה',
      certificate_id: 'מס תעודה',
      source_farm_code: 'מס רישיון משק מקור',
      source_farm_name: 'שם משק מקור',
      farm_code: 'מס משק',
      farm_name: 'שם משק',
      farm_settlement_name: 'שם ישוב משק ',
      dest_flock_id: 'מס להקת יעד',
      lull2000_code: ' מס מגדל',
      grower_name: 'שם מגדל',
      package_sum: 'כלובים',
      chicken_sum_female: 'כמות עופות',
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
    this.onInit_func();
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  openDatePicker() {
    // this.endDate = new Date(); // Replace with your date logic
    // this.formattedEndDate = this.formatDate(this.endDate);
  }

  transformDate(originalDate: string): string {
    const parts = originalDate.split('-'); // Split the date into parts
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Rearrange the parts
  }

  async search() {
    this.certificate_id2 = '';
    this.total_count_packege = 0;
    this.total_count_agges = 0;
    console.log('Start Date:', this.startDate);

    console.log('End Date:', this.endDate);

    if (!this.startDate.toString().includes('-')) {
      const date = new Date(this.startDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so we add 1
      const day = date.getDate().toString().padStart(2, '0');
      this.startDate_to_search = `${year}-${month}-${day}`;
    } else {
      this.startDate_to_search = this.transformDate(this.startDate);
      console.log(this.startDate_to_search);
    }
    console.log(this.startDate_to_search);

    if (!this.endDate.toString().includes('-')) {
      const date2 = new Date(this.endDate);
      const year2 = date2.getFullYear();
      const month2 = (date2.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so we add 1
      const day2 = date2.getDate().toString().padStart(2, '0');
      this.endDate_to_search = `${year2}-${month2}-${day2}`;
    } else {
      this.endDate_to_search = this.transformDate(this.endDate);
      console.log(this.endDate_to_search);
    }

    if (this.check_shivokim_Independent) {
      var shivokim =
        await this.megadelSearchService.get_shivokim_Independent_by_date_and_flock_id(
          this.data[0].flock_id,
          this.startDate_to_search,
          this.endDate_to_search
        );
      if (shivokim.length > 0) {
        this.data = shivokim;
      } else {
        this.data = [];
      }
      this.count_total_eggs_and_packege(this.data);
    } else {
      var shivokim =
        await this.megadelSearchService.get_shivok_from_imon_to_all_sites_by_date_and_flock_id(
          this.data[0].source_flock_id,
          this.startDate_to_search,
          this.endDate_to_search
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
