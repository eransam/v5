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
  selector: 'app-popup-payment',
  templateUrl: './popup-payment.component.html',
  styleUrls: ['./popup-payment.component.css'],
})
export class PopupPaymentComponent {
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
  paymentControl = new FormControl();

  isLoading_FarmDetails = false;
  chosenyear_cartificate: any = '2023';
  chosenYear: any = '';
  years = ['2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  chosenShloha: any = 0;
  payment: any = 0;
  the_change_shloha: any = '';
  payment_by_grewernum: any[] = [];

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
  type_of_payment: any[] = [];
  Hok_Galil: any[] = [];
  public currentPage: number = 1; // Current page number
  public rowsPerPage: number = 20; // Number of rows per page
  itemsPerPage = 20;
  theUserDet: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private formBuilder: FormBuilder,
    private megadelSearchService: MegadelSearchService,
    private tableexcelService: TableexcelService
  ) {
    this.chosenYear = '2023';
    this.chosenSite = 'כולם';
    this.chosenShloha = 'ביצי מאכל';
    this.payment = 2;
    // this.initialEndDate = '2023/12/31';

    console.log('data in constractor: ', data);
    localStorage.setItem('cartificates_data', JSON.stringify(data));

    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    // this.initialEndDate = this.endDate;

    if (localStorage.getItem('theDetails')) {
      this.theUserDet = JSON.parse(localStorage.getItem('theDetails'));
    }

    console.log('growerDet');

    this.grower_extention = this.data[this.data.length - 1].grower_Extensions;
    console.log(this.grower_extention);
    for (let obj of this.grower_extention) {
      this.grower_extention_name.push(this.getCategoryLabel(obj));
    }

    this.shlohot_cartificate = await this.megadelSearchService.Tz_By_Yzrn(
      1,
      this.theUserDet[0].v_yzrn,
      this.chosenyear_cartificate,
      '',
      ''
    );
    console.log('v');

    this.DetailsForm = new FormGroup({});
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ RishaionSts: '', code: 'כולם' });
    this.userDetails = JSON.parse(localStorage.getItem('theDetails'));
    console.log('this.userDetails: ', this.userDetails);
  }

  async change_shloha() {
    this.the_change_shloha = this.chosenShlohaControl.value;
    console.log(this.the_change_shloha);
    if (this.the_change_shloha === '30' || this.the_change_shloha === '10') {
      this.Hok_Galil = await this.megadelSearchService.Yzrn_Chk_Hok_Galil(
        this.userDetails[0].v_yzrn,
        this.the_change_shloha,
        this.chosenyear_cartificate,
        '19000101'
      );

      if (this.Hok_Galil[0].Galil === 1) {
        this.type_of_payment = [
          { name: 'סובסידיה', code: '01' },
          { name: 'היטלים', code: '02' },
        ];

        this.paymentControl.setValue('01');
      } else {
        this.type_of_payment = [{ name: 'היטלים', code: '02' }];
        this.paymentControl.setValue('02');
      }
    } else {
      if (this.the_change_shloha === '01') {
        this.type_of_payment = [{ name: 'היטלים', code: '02' }];
        this.paymentControl.setValue('02');
      } else {
        if (
          this.the_change_shloha === '01' ||
          this.the_change_shloha === '40' ||
          this.the_change_shloha === '41' ||
          this.the_change_shloha === '43' ||
          (this.the_change_shloha >= '44' && this.the_change_shloha <= '47') ||
          (this.the_change_shloha >= '90' && this.the_change_shloha <= '93')
        ) {
          this.type_of_payment = [{ name: 'פרמיה', code: '07' }];
          this.paymentControl.setValue('07');
        } else {
          this.type_of_payment = [{ name: '', code: '' }];
        }
      }
    }
    console.log(this.type_of_payment);
    
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
    console.log('chosenShlohaControl: ', this.chosenShlohaControl.value);
    console.log('paymentControl: ', this.paymentControl.value);

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
      }
    }
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

    this.chosenYear_placeHolder = await this.theChosenYearControl;

    console.log(this.theChosenShlohaControl);
    console.log(this.theChosenYearControl);
    console.log(this.paymentControl.value);

    if (this.paymentControl.value === '07') {
      this.payment_by_grewernum =
        await this.megadelSearchService.Tkufa_Mhir_Select_New(
          40,
          this.userDetails[0]?.v_yzrn,
          this.theChosenShlohaControl,
          this.paymentControl.value,
          this.theChosenYearControl,
          ''
        );

      this.data = this.payment_by_grewernum;
      this.isLoading_FarmDetails = false;
    } else {
      this.payment_by_grewernum =
        await this.megadelSearchService.Tkufa_Mhir_Select_New(
          6,
          this.userDetails[0]?.v_yzrn,
          this.theChosenShlohaControl,
          this.paymentControl.value,
          this.theChosenYearControl,
          ''
        );

      this.data = this.payment_by_grewernum;
      this.isLoading_FarmDetails = false;
    }
    this.paymentControl.setValue('');
  }
}
