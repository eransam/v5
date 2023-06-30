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
import { TableexcelService } from '../../../services/tableexcel.service';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { MegadelSearchService } from '../../../services/MegadelSearch.service';
@Component({
  selector: 'app-popup-rav-shnati',
  templateUrl: './popup-rav-shnati.component.html',
  styleUrls: ['./popup-rav-shnati.component.css'],
})
export class PopupRavShnatiComponent {
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
  rav_shnati_payControl = new FormControl();
  chosenSiteControl = new FormControl();
  chosenShlohaControl = new FormControl();
  isLoading_FarmDetails = false;
  chosenyear_cartificate: any = '2023';
  chosenYear: any = '';
  rav_shnati_pay: any = '';

  years = ['2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  chosenShloha: any = 0;
  certificates_by_grewernum: any[] = [];
  rav_shnati_det: any[] = [];
  rav_shnati_tashlom: any[] = [];
  theStartDate: any = '';
  theEndDateControl: any = '';
  theChosenSiteControl: any = 0;
  theChosenYearControl: any = 2023;
  the_rav_shnati_payControl: any = '2';
  theChosenShlohaControl: any = '30';
  startDateControl_placeHolder: any = '20230101';
  endDateControl_placeHolder: any = '20231231';
  grower_extention: any[] = [];
  grower_extention_name: any[] = [];
  growerDet: any[] = [];
  shlohot_cartificate: any[] = [];
  initialEndDate: any;
  chosenYear_placeHolder: any = 'בחר שנה';
  theUserDet: any[] = [];
  public currentPage: number = 1; // Current page number
  public rowsPerPage: number = 20; // Number of rows per page
  itemsPerPage = 20;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private formBuilder: FormBuilder,
    private megadelSearchService: MegadelSearchService,
    private tableexcelService: TableexcelService
  ) {
    this.chosenYear = '2023';
    this.chosenSite = 'כולם';
    this.chosenShloha = 'תרנגולות - הטלה';
    this.rav_shnati_pay = '2';
    // this.initialEndDate = '2023/12/31';

    console.log('data in constractor: ', data);
    localStorage.setItem('cartificates_data', JSON.stringify(data));

    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    this.get_pay_option();
    if (localStorage.getItem('theDetails')) {
      this.theUserDet = JSON.parse(localStorage.getItem('theDetails'));
    }

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
    console.log(this.paginatedData);
  }

  getExcelDataFarmDetails(): void {
    this.tableexcelService.exportAsExcelFile(
      this.paginatedData,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
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
    console.log('chosenYearControl: ', this.chosenYearControl.value);
    console.log('chosenSiteControl: ', this.chosenSiteControl.value);
    console.log('chosenShlohaControl: ', this.chosenShlohaControl.value);
    console.log('rav_shnati_payControl: ', this.rav_shnati_payControl.value);

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

    //  this.theChosenSiteControl
    this.theChosenSiteControl = this.chosenSiteControl.value;

    if (this.theChosenSiteControl === 'כולם') {
      this.theChosenSiteControl = 0;
    } else {
      if (!this.theChosenSiteControl) {
        this.theChosenSiteControl = 0;
      }
    }

    this.rav_shnati_det = await this.megadelSearchService.Bizua_Rav_Shnati_Scr(
      this.theChosenYearControl,
      7,
      this.theChosenShlohaControl,
      `${this.theChosenYearControl}0101`,
      `${this.theChosenYearControl}1231`,
      '00',
      '99',
      this.userDetails[0]?.v_yzrn,
      this.userDetails[0]?.v_yzrn,
      this.rav_shnati_pay,
      parseInt(this.theChosenYearControl) - 1,
      parseInt(this.theChosenYearControl) - 2,
      parseInt(this.theChosenYearControl) - 3,
      parseInt(this.theChosenYearControl) - 4,
      0,
      '00',
      this.theChosenSiteControl,
      1,
      '',
      '',
      '',
      0
    );

    this.data = this.rav_shnati_det;
    this.isLoading_FarmDetails = false;
  }

  async get_pay_option() {
    this.rav_shnati_tashlom = await this.megadelSearchService.Tables_Select_New(
      78,
      'SMHR',
      '%',
      0,
      ' ',
      ' ',
      99
    );
    console.log('Df');
  }
}
