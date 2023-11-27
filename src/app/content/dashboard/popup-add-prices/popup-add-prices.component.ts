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

    const date = new Date(this.data[0].tk_date_from);
    const year = date.getFullYear();
    this.data[0].year = year;
    this.data[0].tk_date_from_hetelim_today = new Date()
      .toISOString()
      .split('T')[0];
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

  toggleDatepicker() {
    this.datepicker.toggle();
  }
  toggleDatepickerTo() {
    this.dpTo.toggle();
  }

  async saveRow(row: any) {
    console.log(row);

    // מעדכן את טבלת המחירים הקבועה הראשית
    var the_update_val =
      await this.megadelSearchService.update_hetelim_price_and_dates(
        row.tk_date_from_hetelim_today,
        row.tk_date_to,
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

    //   var insert_price_updates_table =
    //   await this.MegadelSearchInsertService.insert_price_updates(
    //     row.mh_mhir_hetelim,
    //     row.mh_mhir_visot,
    //     row.mh_tzrt,
    //     row.name_shloha,
    //    '02',
    //     row.tk_date_from_hetelim,
    //     row.tk_date_to_hetelim,
    //     row.year
    //   );

    // מכניס את שינוי המחיר לטבלת לוג שינויי המחיר
    var insert_price_updates_table =
      await this.MegadelSearchInsertService.insert_price_updates_new_2(
        row.mh_tzrt,
        row.mh_tkufa_num,
        row.tk_date_from,
        row.tk_date_to,
        row.mh_mhir,
        row.year.toString(),
        '02',
        row.mhir_visot
      );

    console.log(the_update_visot);
    console.log(the_update_visot);
    console.log(insert_price_updates_table);

    if (the_update_val && the_update_visot && insert_price_updates_table) {
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
