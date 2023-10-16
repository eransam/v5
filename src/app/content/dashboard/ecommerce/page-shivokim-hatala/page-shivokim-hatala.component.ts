import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import { MyDatePickerOptions } from '../ui/date-picker-option';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-page-shivokim-hatala',
  templateUrl: './page-shivokim-hatala.component.html',
  styleUrls: ['./page-shivokim-hatala.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PageShivokimHatalaComponent {
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
  sort_by_grower_num: any;
  sort_by_grower_name: any;
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

  set_val_of_sort_by_certificate(event: any) {
    this.certificate_id2 = event.target.value;
  }

  toggleDatepickerTo() {
    this.dpTo.toggle(); // Toggles the "to date" datepicker
  }

  toggleDatepicker() {
    this.datepicker.toggle();
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
    this.data = JSON.parse(localStorage.getItem('all_current_shivokim'));

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

  ngOnChanges(changes: SimpleChanges) {
    // Check if 'startDate' has changed
    if (changes.startDate) {
      // Perform operations on 'startDate' here
      console.log(this.startDate);
      this.performOperations();
    }
  }

  private performOperations() {
    // Perform your desired operations on 'startDate'
    console.log('startDate changed. New value:', this.startDate);
    // Add your logic here
  }

  formatDate2(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  onDateChange(event: Event) {
    this.showCalendar = false;
  }

  count_total_eggs_and_packege(data) {
    console.log(data);

    // טוטל עגלות
    if (data[0]?.total_count) {
      this.total_count_packege = data.reduce(
        (sum, obj) => sum + obj.total_count,
        0
      );
    } else {
      this.total_count_packege = 0;
    }

    //   טוטל ביצים

    if (data[0]?.marketing_sum) {
      this.total_count_agges = data.reduce(
        (sum, obj) => sum + obj.marketing_sum,
        0
      );
    } else {
      this.total_count_agges = data.reduce(
        (sum, obj) => sum + obj.total_transfer_egg_sum,
        0
      );
    }
  }

  search_certificate_id() {
    console.log('g');
    if (!this.check_shivokim_Independent) {
      // שינוי ערך של תיבת הסלקט עם הרפרנס שהוזן לה
      this.statusSelect.nativeElement.value = 'chose_Category';
    }

    console.log('g');
    var filter_by_certificate_id = this.data.filter((item) =>
      item.certificate_id.toString().includes(this.certificate_id2)
    );

    if (filter_by_certificate_id.length > 0) {
      this.data = filter_by_certificate_id;
    } else {
      this.data = [];
    }
    this.count_total_eggs_and_packege(this.data);
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

  cd_gidul: 921;
  egg_factory_name: '50563 -  ב"ה עשת שי ביצים בע"מ';
  farm_code: '5679';
  farm_name: 'אוחנה אליהו';
  flock_id: 101632;
  grower_kind: 'שותף';
  grower_name: 'כהן רגינה *';
  grower_name1: 'כהן רגינה *';
  is_main_grower: 0;
  lull2000_code: '11300746';
  marketing_sum: 3646;
  mcsa: 2500;
  merocezet: ',,';
  msvk_code: 568;
  msvk_name: '568 - חוות שביט בע"מ';
  package_sum: 121.53333333333333;
  percent_: 8.44;
  produce_date: '2023-10-13T00:00:00';
  settlement_name: 'זרעית - רוזנואלד';

  // פונ הורדה לאקסל
  getExcelData(): void {
    if (this.isSplit === 'מפוצל') {
      const selectedFieldsArray = this.data.map((item) => {
        return {
          grower_kind: item.grower_kind,
          grower_name: item.grower_name,
          lull2000_code: item.lull2000_code,
          mcsa: item.mcsa,
          percent_: item.percent_,
          settlement_name: item.settlement_name,
          merocezet: item.merocezet,
          farm_code: item.farm_code,
          farm_name: item.farm_name,
          egg_factory_name: item.egg_factory_name,
          flock_id: item.flock_id,
          produce_date: item.produce_date,
          package_sum: item.package_sum,
          marketing_sum: item.marketing_sum,
          msvk_name: item.msvk_name,
        };
      });
      const fieldTitleMapping = {
        grower_kind: 'סוג מגדל',
        grower_name: 'שם מגדל',
        lull2000_code: 'מס מגדל',
        mcsa: 'חידוש',
        percent_: 'אחוזי שותפות',
        settlement_name: 'שם ישוב',
        merocezet: 'תעודה מרוכזת',
        farm_code: 'קוד משק',
        farm_name: 'שם משק',
        egg_factory_name: 'מכון מיון',
        flock_id: 'מס להקה',
        produce_date: 'תאריך שיווק',
        package_sum: 'סהכ תבניות',
        marketing_sum: 'כמות שיווק',
        msvk_name: 'שם משווק',
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
    } else {
      if (!this.check_shivokim_Independent && this.isSplit === 'ראשי') {
        const selectedFieldsArray = this.data.map((item) => {
          return {
            create_date: item.create_date,
            transfer_date: item.transfer_date,
            certificate_id: item.certificate_id,
            farm_name: item.farm_name,
            farm_code: item.farm_code,
            flock_id: item.flock_id,
            lull2000_code: item.lull2000_code,
            grower_name: item.grower_name,
            farm_settlement_name: item.farm_settlement_name,
            msvk_name: item.msvk_name,
            egg_factory_name: item.egg_factory_name,
            transport_type_name: item.transport_type_name,
            total_count: item.total_count,
            total_transfer_egg_sum: item.total_transfer_egg_sum,
            transfer_status_name: item.transfer_status_name,
            is_between_egg_factory1: item.is_between_egg_factory1,
            egg_warehouse_name: item.egg_warehouse_name,
          };
        });
        const fieldTitleMapping = {
          create_date: 'תאריך הפקה',
          transfer_date: 'תאריך קליטה',
          certificate_id: 'מס תעודה',
          farm_name: 'שם משק',
          farm_code: 'קוד משק',
          flock_id: 'מס להקה',
          lull2000_code: 'מס מגדל',
          grower_name: 'שם מגדל',
          farm_settlement_name: 'ישוב משק',
          msvk_name: 'שם משווק',
          egg_factory_name: 'מכון מיון',
          transport_type_name: 'סוג אריזה',
          total_count: 'כמות',
          total_transfer_egg_sum: 'סהכ ביצים',
          transfer_status_name: 'סטטוס משלוח',
          is_between_egg_factory1: 'הערה בין משקים',
          egg_warehouse_name: 'מחסן ביצים צמוד',
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
      } else {
        if (this.check_shivokim_Independent && this.isSplit === 'ראשי') {
          const selectedFieldsArray = this.data.map((item) => {
            return {
              create_date: item.create_date,
              klita_date: item.klita_date,
              certificate_id: item.certificate_id,
              farm_name: item.farm_name,
              flock_id: item.flock_id,
              lull2000_code: item.lull2000_code,
              grower_name: item.grower_name,
              farm_settlement_name: item.farm_settlement_name,
              msvk_name: item.msvk_name,
              egg_sum: item.egg_sum,
            };
          });
          const fieldTitleMapping = {
            create_date: 'תאריך הפקה',
            klita_date: 'תאריך קליטה',
            certificate_id: 'מס תעודה',
            farm_name: 'שם משק',
            flock_id: 'מס להקה',
            lull2000_code: 'מס מגדל',
            grower_name: 'שם מגדל',
            farm_settlement_name: 'ישוב משק',
            msvk_name: 'שם משווק',
            egg_sum: 'כמות ביצים',
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
      }
    }
  }

  async open_certificate_details(certificate_id: any) {
    var newWindow = window.open(`http://epb-iis22:9091/app/v3.3.8/#/certificate-egg-details/${certificate_id}`, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      console.log('New window was blocked by a popup blocker.');
    }
}


  set_val_of_sort_by_grower_num(event: any) {
    this.sort_by_grower_num = event.target.value;
  }

  set_val_of_sort_by_grower_name(event: any) {
    this.sort_by_grower_name = event.target.value;
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

    console.log('g');

    if (this.splits === 'ראשי') {
      this.isSplit = 'ראשי';

      if (this.check_shivokim_Independent) {
        var shivokim =
          await this.megadelSearchService.get_shivokim_Independent_by_date_and_flock_id(
            this.flock_num,
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
          await this.megadelSearchService.get_shivokim_by_date_and_flock_id(
            this.flock_num,
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
    } else {
      this.isSplit = 'מפוצל';
      var shivokim =
        await this.megadelSearchService.get_shivokim_splits_by_date_and_flock_id(
          this.flock_num,
          this.startDate_to_search,
          this.endDate_to_search
        );
      if (shivokim.length > 0) {
        this.data = shivokim;
      } else {
        this.data = [];
      }
      console.log('ds');

      this.count_total_eggs_and_packege(this.data);
    }
  }
}
