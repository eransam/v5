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
    // {year: 2023, month: 6, day: 10}

    // start date:
    var theStartDate = this.startDateControl.value;

    theStartDate.year = theStartDate.year.toString();
    if (parseInt(theStartDate.month, 10) <= 9) {
      theStartDate.month = '0' + theStartDate.month.toString();
    } else {
      theStartDate.month = theStartDate.month.toString();
    }

    if (theStartDate.day <= 9) {
      theStartDate.day = '0' + theStartDate.day.toString();
    } else {
      theStartDate.day = theStartDate.day.toString();
    }
    theStartDate =
      theStartDate.year.toString() + theStartDate.month + theStartDate.day;

    var endDateControl = this.endDateControl.value;
    if (endDateControl.month.length <= 9) {
      endDateControl.month = '0' + endDateControl.month.toString();
    } else {
      endDateControl.month = endDateControl.month.toString();
    }

    if (endDateControl.day <= 9) {
      endDateControl.day = '0' + endDateControl.day.toString();
    } else {
      endDateControl.day = endDateControl.day.toString();
    }
    endDateControl =
      endDateControl.year.toString() +
      endDateControl.month +
      endDateControl.day;

    var chosenSiteControl = this.chosenSiteControl.value;

    if (chosenSiteControl === 'כולם') {
      chosenSiteControl = 0;
    }

    this.certificates_by_grewernum =
      await this.megadelSearchService.Teuda_Select_New(
        1,
        this.chosenYearControl.value,
        30,
        this.userDetails[0]?.yz_yzrn,
        theStartDate,
        endDateControl,
        0,
        chosenSiteControl
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
