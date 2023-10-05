import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-shivokim-from-imon-to-end-site',
  templateUrl: './page-shivokim-from-imon-to-end-site.component.html',
  styleUrls: ['./page-shivokim-from-imon-to-end-site.component.css'],
})
export class PageShivokimFromImonToEndSiteComponent {
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

    this.data = JSON.parse(
      localStorage.getItem('shivokim_from_imon_to_end_site')
    );
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

  // פונ הורדה לאקסל
  getExcelData(): void {
    if (this.isSplit === 'מפוצל') {
      const selectedFieldsArray = this.data.map((item) => {
        return {
          produce_date: item.produce_date,
          farm_name: item.farm_name,
          flock_id: item.flock_id,
          lull2000_code: item.lull2000_code,
          grower_name: item.grower_name,
          settlement_name: item.settlement_name,
          msvk_name: item.msvk_name,
          egg_factory_subquery: item.egg_factory_subquery,
          marketing_sum: item.marketing_sum,
        };
      });
      const fieldTitleMapping = {
        produce_date: 'תאריך הפקה',
        farm_name: 'שם משק',
        flock_id: 'מס להקה',
        lull2000_code: 'מס מגדל',
        grower_name: 'שם מגדל',
        settlement_name: 'שם ישוב',
        msvk_name: 'שם משווק ',
        egg_factory_subquery: 'מכון מיון',
        marketing_sum: ' כמות',
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
      if (!this.check_is_shivokim_Independent && this.isSplit === 'ראשי') {
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
        if (this.check_is_shivokim_Independent && this.isSplit === 'ראשי') {
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
        await this.megadelSearchService.get_shivok_from_imon_to_all_sites_by_date_and_flock_id(
          this.data[0].source_flock_id,
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
