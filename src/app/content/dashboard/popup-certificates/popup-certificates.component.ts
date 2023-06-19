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

  startDateControl = new FormControl();
  endDateControl = new FormControl();
  chosenYearControl = new FormControl();
  chosenSiteControl = new FormControl();
  isLoading_FarmDetails = false;

  chosenYear = '';
  years = ['2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  certificates_by_grewernum: any[] = [];
  theStartDate: any = '';
  theEndDateControl: any = '';
  theChosenSiteControl: any = 0;
  theChosenYearControl: any = 2023;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private formBuilder: FormBuilder,
    private megadelSearchService: MegadelSearchService
  ) {
    console.log('data in constractor: ', data);
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    this.DetailsForm = new FormGroup({});
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ code: 'כולם' });
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    console.log('this.userDetails: ', this.userDetails);
  }

  async add() {
    this.isLoading_FarmDetails = true;

    console.log('startDateControl: ', this.startDateControl.value);
    console.log('siteControl: ', this.endDateControl.value);
    console.log('chosenYearControl: ', this.chosenYearControl.value);
    console.log('chosenSiteControl: ', this.chosenSiteControl.value);

    //  this.theChosenYearControl
    if (this.chosenYearControl.value === '') {
      this.theChosenYearControl = '2023';
    } else {
      if (this.chosenYearControl.value) {
        this.theChosenYearControl = this.chosenYearControl.value;
      } else {
        this.theChosenYearControl = '2023';
      }
    }
    // {year: 2023, month: 6, day: 10}

    //   this.theStartDate
    if (this.startDateControl.value) {
      this.theStartDate = this.startDateControl.value;

      this.theStartDate.year = this.theStartDate.year.toString();
      if (parseInt(this.theStartDate.month, 10) <= 9) {
        this.theStartDate.month = '0' + this.theStartDate.month.toString();
      } else {
        this.theStartDate.month = this.theStartDate.month.toString();
      }

      if (this.theStartDate.day <= 9) {
        this.theStartDate.day = '0' + this.theStartDate.day.toString();
      } else {
        this.theStartDate.day = this.theStartDate.day.toString();
      }
      this.theStartDate =
        this.theStartDate.year.toString() +
        this.theStartDate.month +
        this.theStartDate.day;
    } else {
      this.theStartDate = '20230101';
    }

    //   this.theEndDateControl
    if (this.endDateControl.value) {
      this.theEndDateControl = this.endDateControl.value;
      if (this.theEndDateControl.month.length <= 9) {
        this.theEndDateControl.month =
          '0' + this.theEndDateControl.month.toString();
      } else {
        this.theEndDateControl.month = this.theEndDateControl.month.toString();
      }

      if (this.theEndDateControl.day <= 9) {
        this.theEndDateControl.day =
          '0' + this.theEndDateControl.day.toString();
      } else {
        this.theEndDateControl.day = this.theEndDateControl.day.toString();
      }
      this.theEndDateControl =
        this.theEndDateControl.year.toString() +
        this.theEndDateControl.month +
        this.theEndDateControl.day;
    } else {
      this.theEndDateControl = '20211231';
    }

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
        30,
        this.userDetails[0]?.yz_yzrn,
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
    this.startDateControl.setValue(null); // Set the value to null
    this.endDateControl.setValue(null); // Set the value to null
    this.chosenYearControl.setValue(null); // Set the value to null
    this.chosenSiteControl.setValue(null); // Set the value to null
  }
}
