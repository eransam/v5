import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { TableexcelService } from 'src/app/services/tableexcel.service';
import { log } from 'console';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  order: any = 6;
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
  chosenYear: any = 2023;
  enteredYear: any = '2023';
  years = ['2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  chosenShloha: any;
  payment: any = '02';
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
  public currentPage: number = 1;
  public rowsPerPage: number = 20;
  itemsPerPage = 20;
  theUserDet: any[] = [];
  data: any[] = [];
  yearInput: FormControl;
  myForm: FormGroup;
  the_first_tz: any = '';
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private megadelSearchService: MegadelSearchService,
    private tableexcelService: TableexcelService
  ) {
    this.DetailsForm = this.formBuilder.group({
      chosenYear: new FormControl(),
      chosenShloha: new FormControl(),
      payment: new FormControl(),
    });

    this.chosenYear = '2023';
    this.enteredYear = '2023';
    this.chosenSite = 'כולם';
    this.chosenShloha = '30';
    this.payment = '02';
  }

  async ngOnInit() {
    console.log('start_ngOnInit');
    this.yearInput = new FormControl('', Validators.required);

    // פרטי מגדל
    if (localStorage.getItem('theDetails')) {
      this.theUserDet = JSON.parse(localStorage.getItem('theDetails'));
    }

    // פרטי תשלומים
    if (localStorage.getItem('this.grower_payment_det')) {
      this.data = JSON.parse(localStorage.getItem('this.grower_payment_det'));
    }

    // שלוחת תשלומים התחלתית
    if (localStorage.getItem('tz')) {
      this.the_first_tz = JSON.parse(localStorage.getItem('tz'));
      var the_first_tz_convert = this.convert_from_maaravi_to_oshik(
        this.the_first_tz
      );
      this.chosenShloha = the_first_tz_convert;
      this.first_payment(this.the_first_tz);
    }
    this.chosenShloha = this.the_first_tz;

    // משתנה המכיל את מספרי השלוחות של המגדל
    this.grower_extention = this.data[this.data.length - 1].grower_Extensions;
    console.log(this.grower_extention);

    // משתנה המכיל את שמות השלוחות של המגדל
    for (let obj of this.grower_extention) {
      this.grower_extention_name.push(this.getCategoryLabel(obj));
    }

    // מציג את השלוחות של המגדל
    this.shlohot_cartificate = await this.megadelSearchService.Tz_By_Yzrn(
      1,
      this.theUserDet[0].v_yzrn,
      this.chosenyear_cartificate,
      '',
      ''
    );
    console.log(this.shlohot_cartificate);

    //   מחיקת שלוחת פינוי המטילות
    const valueToRemove = '11';
    const index = this.shlohot_cartificate.findIndex(
      (obj) => obj.code === valueToRemove
    );
    if (index !== -1) {
      this.shlohot_cartificate.splice(index, 1);
    }

    this.DetailsForm = new FormGroup({
      yaerBox: this.yearInput,
    });

    // מספרי אתרי המגדל
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ RishaionSts: '', code: 'כולם' });

    this.theUserDet = JSON.parse(localStorage.getItem('theDetails'));
    console.log('this.userDetails: ', this.theUserDet);

    console.log('this.chosenShloha: ', this.chosenShloha);
    console.log('this.chosenShlohaControl: ', this.chosenShlohaControl);
  }
  //   and ngOnInit

  convert_from_oshik_to_maaravi(key: string): string {
    switch (key) {
      case '17':
        return '21';
      case '18':
        return '20';
      case '19':
        return '10';
      case '20':
        return '30';
      case '21':
        return '22';
      case '22':
        return '01';
      case '23':
        return '98';
      case '25':
        return '97';
      case '26':
        return '96';
      case '28':
        return '31';
      default:
        return '';
    }
  }

  convert_from_maaravi_to_oshik(key: string): string {
    switch (key) {
      case '21':
        return '17';
      case '20':
        return '18';
      case '10':
        return '19';
      case '30':
        return '20';
      case '22':
        return '21';
      case '01':
        return '22';
      case '98':
        return '23';
      case '97':
        return '25';
      case '96':
        return '26';
      case '31':
        return '28';
      default:
        return '';
    }
  }

  onSelectChange() {
    console.log(this.chosenYear.toString());
  }

  async first_payment(shloha: any) {
    console.log(shloha);
    this.the_change_shloha = shloha;
    console.log(this.the_change_shloha);
    if (this.the_change_shloha === '30' || this.the_change_shloha === '10') {
      this.Hok_Galil = await this.megadelSearchService.Yzrn_Chk_Hok_Galil(
        this.theUserDet[0].v_yzrn,
        this.the_change_shloha,
        this.chosenyear_cartificate,
        '19000101'
      );

      if (this.Hok_Galil[0].Galil === 1) {
        this.type_of_payment = [
          { name: 'סובסידיה', code: '01' },
          { name: 'היטלים', code: '02' },
        ];
        this.payment = '02';
        this.paymentControl.setValue('02');
      } else {
        this.type_of_payment = [{ name: 'היטלים', code: '02' }];
        this.payment = '02';
        this.paymentControl.setValue('02');
      }
    } else {
      if (
        this.the_change_shloha === '01' ||
        this.the_change_shloha === '26' ||
        this.the_change_shloha === '21'
      ) {
        this.type_of_payment = [{ name: 'היטלים', code: '02' }];
        this.payment = '02';
        this.paymentControl.setValue('02');
      } else {
        if (
          this.the_change_shloha === '40' ||
          this.the_change_shloha === '41' ||
          this.the_change_shloha === '43' ||
          (this.the_change_shloha >= '44' && this.the_change_shloha <= '47') ||
          (this.the_change_shloha >= '90' && this.the_change_shloha <= '93')
        ) {
          this.type_of_payment = [{ name: 'פרמיה', code: '07' }];
          this.paymentControl.setValue('07');
          this.payment = '07';
        } else {
          this.type_of_payment = [{ name: '', code: '' }];
        }
      }
    }
    console.log(this.type_of_payment);
  }

  async change_shloha() {
    this.the_change_shloha = this.chosenShlohaControl.value;
    console.log(this.the_change_shloha);
    if (this.the_change_shloha === '30' || this.the_change_shloha === '10') {
      this.Hok_Galil = await this.megadelSearchService.Yzrn_Chk_Hok_Galil(
        this.theUserDet[0].v_yzrn,
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
      if (
        this.the_change_shloha === '01' ||
        this.the_change_shloha === '26' ||
        this.the_change_shloha === '21'
      ) {
        this.type_of_payment = [{ name: 'היטלים', code: '02' }];
        this.paymentControl.setValue('02');
      } else {
        if (
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
    console.log(this.paymentControl.value);

    this.isLoading_FarmDetails = true;

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
    if (this.paymentControl.value === '07') {
      this.payment_by_grewernum =
        await this.megadelSearchService.Tkufa_Mhir_Select_New(
          40,
          this.theUserDet[0]?.v_yzrn,
          this.theChosenShlohaControl,
          this.paymentControl.value,
          this.theChosenYearControl,
          ''
        );

      this.data = this.payment_by_grewernum;
      this.isLoading_FarmDetails = false;
    } else {
      if (
        this.theChosenShlohaControl === '01' ||
        this.theChosenShlohaControl === '30' ||
        this.theChosenShlohaControl === '10'
      ) {
        this.order = 4;
      }
      if (
        this.theChosenShlohaControl === '21' ||
        this.theChosenShlohaControl === '26' ||
        this.theChosenShlohaControl === '20'
      ) {
        this.order = 20;
      }

      if (this.paymentControl.value === '01') {
        this.order = 6;
      }

      this.payment_by_grewernum =
        await this.megadelSearchService.Tkufa_Mhir_Select_New(
          this.order,
          this.theUserDet[0]?.v_yzrn,
          this.theChosenShlohaControl,
          this.paymentControl.value,
          this.theChosenYearControl,
          ''
        );

      this.data = this.payment_by_grewernum;
      this.isLoading_FarmDetails = false;
    }
    this.paymentControl.setValue(this.paymentControl.value);
    this.payment.setValue(this.paymentControl.value);
  }
}
