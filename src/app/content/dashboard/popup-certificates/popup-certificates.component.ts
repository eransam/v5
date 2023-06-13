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
  chosenYear = '';
  years = ['2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  chosenSite: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    console.log('data in constractor: ', data);
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    this.DetailsForm = new FormGroup({});
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ code: 'כולם' });
  }

  add() {
    console.log('siteControl: ', this.startDateControl.value);
    console.log('siteControl: ', this.endDateControl.value);
    console.log('chosenYear: ', this.chosenYear);
    console.log('siteName: ', this.siteName);
    console.log('chosenSite: ', this.chosenSite);
  }
}
