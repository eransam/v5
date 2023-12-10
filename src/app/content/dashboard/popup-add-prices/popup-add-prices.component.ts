import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { SuccessDialogComponent } from '../ecommerce/success-dialog/success-dialog.component';
import { MegadelSearchInsertService } from 'src/app/services/megadel-search-insert.service';

@Component({
  selector: 'app-popup-add-prices',
  templateUrl: './popup-add-prices.component.html',
  styleUrls: ['./popup-add-prices.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupAddPricesComponent {
  @ViewChild('dp') datepicker: BsDatepickerDirective; // Reference to the datepicker
  @ViewChild('dpTo') dpTo: BsDatepickerDirective;
  formattedDate: string;
  startDate: any;
  endDate: any;
  startDate_to_search: any;
  endDate_to_search: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe,
    private megadelSearchService: MegadelSearchService,
    private MegadelSearchInsertService: MegadelSearchInsertService,

    private dialog: MatDialog,
    private dialogRef_PopupAddPricesComponent: MatDialogRef<PopupAddPricesComponent>
  ) {}
  async ngOnInit() {
    console.log(this.data);
    const today = new Date();
    const startDateObj = new Date();
    // startDateObj.setDate(today.getDate() - 7);
    startDateObj.setDate(today.getDate());
    this.startDate = this.datePipe.transform(startDateObj, 'dd-MM-yyyy');
    this.endDate = this.datePipe.transform(today, 'dd-MM-yyyy');

    const date = new Date(this.data[0].tk_date_from);
    const year = date.getFullYear();
    this.data[0].year = year;

    this.data[0].tk_date_from_hetelim_today = new Date()
      .toISOString()
      .split('T')[0];
    var year1 = this.data[0].tk_date_to.split('-')[0];
    var month1 = this.data[0].tk_date_to.split('-')[1];
    var day_with_h = this.data[0].tk_date_to.split('-')[2];
    var day1 = day_with_h.split('T')[0];

    console.log('test');
    this.endDate = `${day1}-${month1}-${year1}`;
    console.log(this.endDate);

    this.data[0].tk_date_from = this.data[0].tk_date_from.substring(0, 10);
    this.data[0].tk_date_to = this.data[0].tk_date_to.substring(0, 10);

    console.log(this.data);
  }
  onDate_from_Change(newDate: string) {
    this.data[0].tk_date_from = newDate;
  }
  onDate_to_Change(newDate: string) {
    this.data[0].tk_date_to = newDate;
  }

  validateInput(event: any): void {
    // const enteredValue = event.target.value;
    // // Check if the entered value is less than 0
    // if (enteredValue < 0) {
    //   // Display a message, reset the value, or take any other appropriate action
    //   this.openSuccessDialog_fast('הסכום קטן מ 0');
    //   event.target.value = 0; // Reset to 0 or any default value
    // }
  }

  onstartDateChange(event: any): void {
    const enteredValue = event.target.value;

    // Check if the entered value is less than 0
    if (enteredValue > this.endDate) {
      // Display a message, reset the value, or take any other appropriate action
      this.openSuccessDialog_fast('התאריך ההתחלתי גדול מהתאריך הסופי');
      var startDateObj1 = new Date();
      var today1 = new Date();
      startDateObj1.setDate(today1.getDate());
      event.target.value = this.datePipe.transform(startDateObj1, 'dd-MM-yyyy');
      this.data[0].tk_date_from = this.datePipe.transform(
        startDateObj1,
        'dd-MM-yyyy'
      );
    } else {
      this.data[0].tk_date_from = event.target.value;
    }
  }

  toggleDatepicker() {
    this.datepicker.toggle();
  }
  toggleDatepickerTo() {
    this.dpTo.toggle();
  }

  transformDate(originalDate: string): string {
    const parts = originalDate.split('-'); // Split the date into parts
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Rearrange the parts
  }

  async saveRow(row: any) {
    console.log(row);
    if (row.mh_mhir < row.mhir_visot) {
      this.openSuccessDialog_fast('מחיר הויסות לא יכול להיות גדול ממחיר ההיטל');
    } else {
      if (row.mh_mhir < 0) {
        this.openSuccessDialog_fast('מחיר ההיטל לא יכול להיות קטן מ- 0');
      } else {
        if (row.mhir_visot < 0) {
          this.openSuccessDialog_fast('מחיר הויסות לא יכול להיות קטן מ- 0');
        } else {
          if (new Date(row.tk_date_to) < new Date(row.tk_date_from)) {
            this.openSuccessDialog_fast('תאריך לא יכול להיות קטן מעד תאריך');
          } else {
            var day_endDate = this.endDate.split('-')[0];
            var month_endDate = this.endDate.split('-')[1];
            var year_endDate = this.endDate.split('-')[2];
            this.endDate = `${year_endDate}-${month_endDate}-${day_endDate}`;

            var day_startDate = this.startDate.split('-')[0];
            var month_startDate = this.startDate.split('-')[1];
            var year_startDate = this.startDate.split('-')[2];
            this.startDate = `${year_startDate}-${month_startDate}-${day_startDate}`;
            console.log('test');

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

            console.log(this.endDate_to_search);

            var the_update_val =
              await this.megadelSearchService.update_hetelim_price_and_dates(
                this.startDate,
                this.endDate,
                row.mh_mhir,
                row.year,
                row.mh_tzrt
              );

            //   מעדכן את מחיר הויסות
            var the_update_visot =
              await this.MegadelSearchInsertService.update_visot_price(
                row.year,
                row.mh_tzrt,
                row.mhir_visot
              );

            // מכניס את שינוי המחיר לטבלת לוג שינויי המחיר
            var insert_price_updates_table =
              await this.MegadelSearchInsertService.insert_price_updates_new_2(
                row.mh_tzrt,
                row.mh_tkufa_num,
                this.startDate,
                this.endDate,
                row.mh_mhir,
                row.year.toString(),
                '02',
                row.mhir_visot
              );

            console.log(the_update_visot);
            console.log(the_update_visot);
            console.log(insert_price_updates_table);

            if (
              the_update_val &&
              the_update_visot &&
              insert_price_updates_table
            ) {
              this.openSuccessDialog_fast('הפעולה בוצעה בהצלחה');
            } else {
              this.openSuccessDialog_fast('שגיאה');
            }
            this.dialogRef_PopupAddPricesComponent.close();
          }
        }
      }
    }
  }

  openSuccessDialog(msg: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openSuccessDialog';
    dialogConfig.data = msg;
    const dialogRef = this.dialog.open(SuccessDialogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 1000);
  }

  openSuccessDialog_fast(msg: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openSuccessDialog';
    dialogConfig.data = msg;
    const dialogRef = this.dialog.open(SuccessDialogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 1000);
  }
}
