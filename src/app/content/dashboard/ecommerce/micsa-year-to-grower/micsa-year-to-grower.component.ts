import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CristalsService } from '../../../../services/cristals.service';
import { MegadelSearchService } from '../../../../services/MegadelSearch.service';
import { TableexcelService } from 'src/app/services/tableexcel.service';

@Component({
  selector: 'app-micsa-year-to-grower',
  templateUrl: './micsa-year-to-grower.component.html',
  styleUrls: ['./micsa-year-to-grower.component.scss'],
})
export class MicsaYearToGrowerComponent {
  chosenYear: any = 2023;
  @ViewChild('dp') datepicker: BsDatepickerDirective; // Reference to the datepicker
  @ViewChild('dpTo') dpTo: BsDatepickerDirective;
  theDate: any;
  selected_Option_atar: string = '1';
  selected_option_status: string = '0';
  eventRegistration2: FormGroup;
  isLoading_main = true;
  years: string[] = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ];
  selectedCategory: string = '20';
  keys_of_categorizedArrays: any[] = [
    '01',
    '10',
    '20',
    '21',
    '22',
    '30',
    '40',
    '41',
    '44',
  ];
  constructor(
    private tableexcelService: TableexcelService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private CristalsService: CristalsService,
    private MegadelSearchService: MegadelSearchService
  ) {}
  ngOnInit(): void {
    const today = new Date();
    this.theDate = this.datePipe.transform(today, 'dd-MM-yyyy');
    this.isLoading_main = false;
  }

  async exel_func() {
    // שנה
    console.log(this.chosenYear);
    // שלוחה
    console.log(this.selectedCategory);
    // תאריך
    console.log(this.theDate);
    // radio 1
    console.log(this.selected_Option_atar);
    // radio 2
    console.log(this.selected_option_status);

    try {
      this.isLoading_main = true;
      var tzrt: any = this.selectedCategory;
      if (tzrt === 20 || tzrt === '20') {
        tzrt = '30';
      }

      if (tzrt === 22 || tzrt === '22') {
        tzrt = '01';
      }

      if (tzrt === 19 || tzrt === '19') {
        tzrt = '10';
      } else {
        tzrt = '30';
      }

      var theDate = this.theDate;

      if (!theDate.toString().includes('-')) {
        const date = new Date(theDate);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so we add 1
        const day = date.getDate().toString().padStart(2, '0');
        theDate = `${year}${month}${day}`;
      } else {
        theDate = this.transformDate(theDate);
      }

      var selected_Option_atar = this.selected_Option_atar;
      if (selected_Option_atar === '00') {
        selected_Option_atar = '0';
      }

      if (this.selected_Option_atar === '2') {
        var Alfon_Atarim_By_Tz =
          await this.MegadelSearchService.Bezim_Atarim_Only_Yzrn_With_Mcsa_Peilut(
            '1',
            this.chosenYear.toString(),
            tzrt,
            theDate,
            this.selected_option_status
          );
        await this.getExcelData(Alfon_Atarim_By_Tz);
      } else {
        var Alfon_Atarim_By_Tz =
          await this.MegadelSearchService.Alfon_Atarim_By_Tz(
            '1',
            this.chosenYear.toString(),
            tzrt,
            this.selected_Option_atar,
            this.selected_option_status,
            theDate
          );
        await this.getExcelData(Alfon_Atarim_By_Tz);
      }
    } catch (error) {
    } finally {
      this.stop_the_isLoading_main();
    }
  }

  // פונ הורדה לאקסל
  getExcelData(data: any): void {
    this.tableexcelService.exportAsExcelFile(
      data,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }

  async search() {
    // שנה
    console.log(this.chosenYear);
    // שלוחה
    console.log(this.selectedCategory);

    try {
      this.isLoading_main = true;
      var selected_Option_atar = this.selected_Option_atar;
      if (selected_Option_atar === '00') {
        selected_Option_atar = '0';
      }

      await this.MicsaYearToGrowerComponent_cristal(
        this.chosenYear,
        this.selectedCategory
      );
    } catch (error) {
    } finally {
      this.stop_the_isLoading_main();
    }
  }

  async stop_the_isLoading_main() {
    setTimeout(() => {
      this.isLoading_main = false;
    }, 5000);
  }

  transformDate(originalDate: string): string {
    const parts = originalDate.split('-'); // Split the date into parts
    return `${parts[2]}${parts[1]}${parts[0]}`; // Rearrange the parts
  }

  async MicsaYearToGrowerComponent_cristal(year: any, tozeret: any) {
    var tzrt = tozeret;
    await this.CristalsService.MicsaYearToGrowerComponent_cristal(
      year.toString(),
      tzrt
    );
  }

  async onYearChange2() {
    console.log('g');
  }
  async selectCategory(category: string) {
    console.log(category);
    console.log(this.selectedCategory);
  }

  toggleDatepicker() {
    this.datepicker.toggle();
  }

  getCategoryLabel(key: string): string {
    switch (key) {
      case '01':
        return 'הודים';
      case '10':
        return 'פיטום';
      case '20':
        return 'ביצי רבייה קלות';
      case '21':
        return 'ביצי רבייה כבדות';
      case '22':
        return 'ביצי רבייה הודו';
      case '30':
        return 'ביצי מאכל';
      case '40':
        return 'אפרוחי פיטום';
      case '41':
        return 'אפרוחי הטלה';
      case '44':
        return 'אפרוחי הודים';
      default:
        return '';
    }
  }
}
