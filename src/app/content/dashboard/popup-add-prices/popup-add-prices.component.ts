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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe,
    private megadelSearchService: MegadelSearchService,
    private dialog: MatDialog,
    private dialogRef_PopupAddPricesComponent: MatDialogRef<PopupAddPricesComponent>
  ) {}
  async ngOnInit() {
    const date = new Date(this.data[0].tk_date_from_hetelim);
    const year = date.getFullYear();
    this.data[0].year = year;
    this.data[0].tk_date_from_hetelim =
      this.data[0].tk_date_from_hetelim.substring(0, 10);
    this.data[0].tk_date_to_hetelim = this.data[0].tk_date_to_hetelim.substring(
      0,
      10
    );
  }
  onDate_from_Change(newDate: string) {
    this.data[0].tk_date_from_hetelim = newDate;
  }
  onDate_to_Change(newDate: string) {
    this.data[0].tk_date_to_hetelim = newDate;
  }

  toggleDatepicker() {
    this.datepicker.toggle();
  }
  toggleDatepickerTo() {
    this.dpTo.toggle();
  }

  async saveRow(row: any) {
    console.log(row);
    var the_update_val =
      await this.megadelSearchService.update_hetelim_price_and_dates(
        row.tk_date_from_hetelim,
        row.tk_date_to_hetelim,
        row.mh_mhir_hetelim,
        row.year,
        row.mh_tzrt
      );
    console.log(the_update_val);
    if (the_update_val) {
      this.openSuccessDialog('הפעולה בוצעה בהצלחה');
    } else {
      this.openSuccessDialog('שגיאה');
    }
    this.dialogRef_PopupAddPricesComponent.close();
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
}
