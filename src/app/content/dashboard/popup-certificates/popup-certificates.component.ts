import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { MegadelSearchService } from '../../../services/MegadelSearch.service';
@Component({
  selector: 'app-popup-certificates',
  templateUrl: './popup-certificates.component.html',
  styleUrls: ['./popup-certificates.component.css'],
})
export class PopupCertificatesComponent {
  userTypeID;
  certificateSum = 0;
  startDate: Date;
  endDate: Date;
  selectedDate: Date = new Date();
  dateStartControl = new FormControl();
  dateStart: any;
  usernameControl = new FormControl();
  DetailsForm2: FormGroup;
  ngbDatepickerStart: any;
  ngbDatepickerStartControl: FormControl;
  DetailsForm: FormGroup;
  site: string;
  shlohaOption = [0, 0, 0];
  startDateControl = new FormControl();
  endDateControl = new FormControl();
  chosenYearControl = new FormControl();
  chosenSiteControl = new FormControl();
  chosenShlohaControl = new FormControl();
  isLoading_FarmDetails = false;
  chosenyear_cartificate: any = '2023';
  chosenYear: any = '';
  years = ['2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  chosenShloha: any = 0;
  certificates_by_grewernum: any[] = [];
  theStartDate: any = '';
  theEndDateControl: any = '';
  theChosenSiteControl: any = 0;
  theChosenYearControl: any = 2023;
  theChosenShlohaControl: any = '30';
  startDateControl_placeHolder: any = '20230101';
  endDateControl_placeHolder: any = '20231231';
  grower_extention: any[] = [];
  grower_extention_name: any[] = [];
  growerDet: any[] = [];
  shlohot_cartificate: any[] = [];
  initialEndDate: any;
  chosenYear_placeHolder: any = 'בחר שנה';

  public currentPage: number = 1; // Current page number
  public rowsPerPage: number = 20; // Number of rows per page
  itemsPerPage = 20;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private formBuilder: FormBuilder,
    private megadelSearchService: MegadelSearchService
  ) {
    this.chosenYear = '2023';
    this.chosenSite = 'כולם';
    this.chosenShloha = 'תרנגולות - הטלה';
    // this.initialEndDate = '2023/12/31';

    console.log('data in constractor: ', data);
    localStorage.setItem('cartificates_data', JSON.stringify(data));

    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    // this.initialEndDate = this.endDate;
    this.growerDet = JSON.parse(localStorage.getItem('theDetails'));

    console.log('growerDet');

    this.grower_extention = this.data[this.data.length - 1].grower_Extensions;
    console.log(this.grower_extention);
    for (let obj of this.grower_extention) {
      this.grower_extention_name.push(this.getCategoryLabel(obj));
    }

    this.shlohot_cartificate = await this.megadelSearchService.Tz_By_Yzrn(
      1,
      this.growerDet[0].v_yzrn,
      this.chosenyear_cartificate,
      '',
      ''
    );

    this.DetailsForm = new FormGroup({});
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ RishaionSts: '', code: 'כולם' });
    this.userDetails = JSON.parse(localStorage.getItem('theDetails'));
    console.log('this.userDetails: ', this.userDetails);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  public get totalPages(): number {
    return Math.ceil(this.data.length / this.rowsPerPage);
  }

  public get visibleData(): any[] {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.data.slice(startIndex, endIndex);
  }
  public goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  public goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getCategoryKey(label: string): string {
    switch (label) {
      case 'תרנגולות - רבייה כבדה':
        return '17';
      case 'תרנגולות - רבייה קלה':
        return '18';
      case 'תרנגולות - פיטום':
        return '19';
      case 'תרנגולות - הטלה':
        return '20';
      case 'הודים - רבייה':
        return '21';
      case 'הודים - פיטום':
        return '22';
      case 'עופות - שונים':
        return '23';
      case 'ברווזים - פיטום':
        return '25';
      case 'ברווזים - רבייה':
        return '26';
      case 'שלווים - ביצי מאכל':
        return '28';
      default:
        return '';
    }
  }

  getCategoryLabel(key: string): string {
    switch (key) {
      case '17':
        return 'תרנגולות - רבייה כבדה';
      case '18':
        return 'תרנגולות - רבייה קלה';
      case '19':
        return 'תרנגולות - פיטום';
      case '20':
        return 'תרנגולות - הטלה';
      case '21':
        return 'הודים - רבייה';
      case '22':
        return 'הודים - פיטום';
      case '23':
        return 'עופות - שונים';
      case '25':
        return 'ברווזים - פיטום';
      case '26':
        return 'ברווזים - רבייה';
      case '28':
        return 'שלווים - ביצי מאכל';
      default:
        return '';
    }
  }

  async add() {
    this.isLoading_FarmDetails = true;
    console.log('startDateControl: ', this.startDateControl.value);
    console.log('siteControl: ', this.endDateControl.value);
    console.log('chosenYearControl: ', this.chosenYearControl.value);
    console.log('chosenSiteControl: ', this.chosenSiteControl.value);
    console.log('chosenShlohaControl: ', this.chosenShlohaControl.value);

    // chosenShlohaControl
    if (this.chosenShlohaControl.value === 0) {
      this.theChosenShlohaControl = '30';
    } else {
      if (this.chosenShlohaControl.value) {
        this.theChosenShlohaControl = this.chosenShlohaControl.value;
      } else {
        this.theChosenShlohaControl = '30';
      }

      if (this.theChosenShlohaControl === '20') {
        this.theChosenShlohaControl = '30';
      } else {
      }
    }

    //  this.theChosenYearControl
    // {year: 2023, month: 6, day: 10}
    if (this.chosenYearControl.value === '') {
      this.theChosenYearControl = '2023';
    } else {
      if (this.chosenYearControl.value) {
        this.theChosenYearControl = this.chosenYearControl.value;
      } else {
        this.theChosenYearControl = '2023';
      }
    }

    this.chosenYear_placeHolder = await this.theChosenYearControl;

    //   this.theStartDate
    if (this.startDateControl?.value) {
      this.theStartDate = this.startDateControl.value;

      this.theStartDate.year = this.theStartDate.year.toString();
      if (parseInt(this.theStartDate.month, 10) <= 9) {
        this.theStartDate.month = '0' + this.theStartDate.month.toString();
      } else {
        this.theStartDate.month = this.theStartDate.month.toString();
      }
      this.theStartDate.month = await this.theStartDate.month.slice(-2);

      if (this.theStartDate.day <= 9) {
        this.theStartDate.day = '0' + this.theStartDate.day.toString();
      } else {
        this.theStartDate.day = this.theStartDate.day.toString();
      }
      this.theStartDate.day = await this.theStartDate.day.slice(-2);

      this.theStartDate =
        this.theStartDate.year.toString() +
        this.theStartDate.month +
        this.theStartDate.day;
    } else {
      this.theStartDate = `${this.chosenYearControl.value}0101`;
    }

    this.startDateControl_placeHolder = await this.theStartDate;

    //   this.theEndDateControl
    if (this.endDateControl.value) {
      this.theEndDateControl = this.endDateControl.value;

      if (this.theEndDateControl.month.length <= 9) {
        this.theEndDateControl.month =
          '0' + this.theEndDateControl.month.toString();
      } else {
        this.theEndDateControl.month = this.theEndDateControl.month.toString();
      }
      this.theEndDateControl.month = await this.theEndDateControl.month.slice(
        -2
      );

      if (this.theEndDateControl.day <= 9) {
        this.theEndDateControl.day =
          '0' + this.theEndDateControl.day.toString();
      } else {
        this.theEndDateControl.day = this.theEndDateControl.day.toString();
      }
      this.theEndDateControl.day = await this.theEndDateControl.day.slice(-2);
      this.theEndDateControl =
        this.theEndDateControl.year.toString() +
        this.theEndDateControl.month +
        this.theEndDateControl.day;
    } else {
      this.theEndDateControl = `${this.chosenYearControl.value}1231`;
    }
    this.endDateControl_placeHolder = await this.theEndDateControl;

    //  this.theChosenSiteControl
    this.theChosenSiteControl = this.chosenSiteControl.value;

    if (this.theChosenSiteControl === 'כולם') {
      this.theChosenSiteControl = 0;
    } else {
      if (!this.theChosenSiteControl) {
        this.theChosenSiteControl = 0;
      }
    }

    if (
      (parseInt(this.theChosenShlohaControl) >= 39 &&
        parseInt(this.theChosenShlohaControl) < 45) ||
      (parseInt(this.theChosenShlohaControl) >= 89 &&
        parseInt(this.theChosenShlohaControl) < 94) ||
      (parseInt(this.theChosenShlohaControl) >= 39 &&
        parseInt(this.theChosenShlohaControl) <= 45) ||
      parseInt(this.theChosenShlohaControl) === 47
    ) {
      this.certificates_by_grewernum =
        await this.megadelSearchService.Mdgrot_Teuda(
          3,
          this.userDetails[0]?.v_yzrn,
          this.theChosenShlohaControl,
          this.theChosenYearControl,
          this.theStartDate,
          this.theEndDateControl,
          0
        );

      this.data = this.certificates_by_grewernum;
      this.isLoading_FarmDetails = false;
    } else {
      if (
        parseInt(this.theChosenShlohaControl) === 30 ||
        parseInt(this.theChosenShlohaControl) === 31 ||
        parseInt(this.theChosenShlohaControl) === 1 ||
        parseInt(this.theChosenShlohaControl) === 10 ||
        parseInt(this.theChosenShlohaControl) === 80
      ) {
        this.certificates_by_grewernum =
          await this.megadelSearchService.Teuda_Select_New(
            1,
            this.theChosenYearControl,
            this.theChosenShlohaControl,
            this.userDetails[0]?.v_yzrn,
            this.theStartDate,
            this.theEndDateControl,
            0,
            this.theChosenSiteControl
          );

        this.data = this.certificates_by_grewernum;
        this.isLoading_FarmDetails = false;
      } else {
        if (
          parseInt(this.theChosenShlohaControl) > 19 &&
          parseInt(this.theChosenShlohaControl) < 30
        ) {
          this.certificates_by_grewernum =
            await this.megadelSearchService.Mdgrot_Teuda(
              1,
              this.userDetails[0]?.v_yzrn,
              this.theChosenShlohaControl,
              this.theChosenYearControl,
              this.theStartDate,
              this.theEndDateControl,
              0
            );

          this.data = this.certificates_by_grewernum;
          this.isLoading_FarmDetails = false;
        } else {
          if (
            (this.theChosenShlohaControl >= 45 &&
              this.theChosenShlohaControl < 50) ||
            this.theChosenShlohaControl === 53 ||
            this.theChosenShlohaControl === 56 ||
            this.theChosenShlohaControl === 57 ||
            this.theChosenShlohaControl === 59
          ) {
            if (
              this.theChosenShlohaControl === 46 ||
              this.theChosenShlohaControl === 45 ||
              this.theChosenShlohaControl === 57
            ) {
              this.certificates_by_grewernum =
                await this.megadelSearchService.Pargit_Teuda(
                  5,
                  this.userDetails[0]?.v_yzrn,
                  this.theChosenShlohaControl,
                  this.theChosenYearControl,
                  this.theStartDate,
                  this.theEndDateControl,
                  0
                );

              this.data = this.certificates_by_grewernum;
              this.isLoading_FarmDetails = false;
            } else {
              this.certificates_by_grewernum =
                await this.megadelSearchService.Pargit_Teuda(
                  1,
                  this.userDetails[0]?.v_yzrn,
                  this.theChosenShlohaControl,
                  this.theChosenYearControl,
                  this.theStartDate,
                  this.theEndDateControl,
                  0
                );

              this.data = this.certificates_by_grewernum;
              this.isLoading_FarmDetails = false;
            }
          }
        }
      }
    }

    // this.startDateControl.setValue(null); // Set the value to null
    // this.endDateControl.setValue(null); // Set the value to null
    // this.chosenYearControl.setValue(null); // Set the value to null
    // this.chosenSiteControl.setValue(null); // Set the value to null
  }
}
