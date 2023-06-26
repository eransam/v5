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

  initialEndDate: any;
  chosenYear_placeHolder: any = 'בחר שנה';
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
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    // this.initialEndDate = this.endDate;

    this.grower_extention = this.data[this.data.length - 1].grower_Extensions;
    console.log(this.grower_extention);
    for (let obj of this.grower_extention) {
      this.grower_extention_name.push(this.getCategoryLabel(obj));
    }

    this.DetailsForm = new FormGroup({});
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ RishaionSts: '', code: 'כולם' });
    this.userDetails = JSON.parse(localStorage.getItem('theDetails'));
    console.log('this.userDetails: ', this.userDetails);
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
        this.theChosenShlohaControl = this.getCategoryKey(
          this.theChosenShlohaControl
        );
      } else {
        this.theChosenShlohaControl = '30';
      }

      if (this.theChosenShlohaControl === '20') {
        this.theChosenShlohaControl = '30';
      } else {
        const shloha_Maaravi =
          await this.megadelSearchService.convert_shlohaOshik_to_shlohaMaaravi(
            this.theChosenShlohaControl
          );
        const tbCodeValues = shloha_Maaravi.map((obj) => obj.tb_code);
        const tbCodeString = tbCodeValues.join(',');
        this.theChosenShlohaControl = tbCodeString;
        console.log(this.theChosenShlohaControl);
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
    console.log(
      'this.certificates_by_grewernum: ',
      this.certificates_by_grewernum
    );

    this.data = this.certificates_by_grewernum;
    this.isLoading_FarmDetails = false;
    // this.startDateControl.setValue(null); // Set the value to null
    // this.endDateControl.setValue(null); // Set the value to null
    // this.chosenYearControl.setValue(null); // Set the value to null
    // this.chosenSiteControl.setValue(null); // Set the value to null
  }
}
