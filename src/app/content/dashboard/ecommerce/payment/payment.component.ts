import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { TableexcelService } from 'src/app/services/tableexcel.service';
import { log } from 'console';
import { PopupSibaTableComponent } from '../popup-siba-table/popup-siba-table.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentComponent implements OnInit {
  premia_table: boolean = false;
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
  transformedData: any[];
  Kamut_SHTshlm: any = 0;
  Shum_Tshlm: any = 0;
  HefTas: any = 0;
  HefTas_Tshlm: any = 0;
  tot_Cam_tshlm: any = 0;
  tot_shum_tshlm: any = 0;

  Kamut_premia: any = 0;
  Shum_Tshlm_premia: any = 0;
  Shum_Tshlm_nk_premia: any = 0;
  Shum_Tshlm_sl_premia: any = 0;
  total_premia: any = 0;
  siba_table:any[]=[];
  constructor(
    private dialog: MatDialog,
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
    this.Kamut_premia = 0;
    this.Shum_Tshlm_premia = 0;
    this.Shum_Tshlm_nk_premia = 0;
    this.Shum_Tshlm_sl_premia = 0;
    this.total_premia = 0;

    this.Kamut_SHTshlm = 0;
    this.Shum_Tshlm = 0;
    this.HefTas = 0;
    this.HefTas_Tshlm = 0;
    this.tot_Cam_tshlm = 0;
    this.tot_shum_tshlm = 0;
    this.yearInput = new FormControl('', Validators.required);

    // פרטי מגדל
    if (localStorage.getItem('theDetails')) {
      this.theUserDet = JSON.parse(localStorage.getItem('theDetails'));
    }

    // פרטי טבלה
    if (localStorage.getItem('this.grower_payment_det')) {
      this.data = JSON.parse(localStorage.getItem('this.grower_payment_det'));
      this.count_total_details_hetelim(this.data);
    }

    // שלוחת תשלומים התחלתית
    if (localStorage.getItem('tz')) {
      this.the_first_tz = JSON.parse(localStorage.getItem('tz'));
      var the_first_tz_convert = this.convert_from_maaravi_to_oshik(
        this.the_first_tz
      );
      this.chosenShloha = the_first_tz_convert;
      await this.first_payment(this.the_first_tz);
      console.log(this.type_of_payment);
    }
    this.chosenShloha = this.the_first_tz;

    // משתנה המכיל את מספרי השלוחות של המגדל
    this.grower_extention = this.data[this.data.length - 1].grower_Extensions;

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
  }
  //   and ngOnInit

  async openPopup_siba_table(openPopup_siba_table) {
    localStorage.setItem('openPopup_siba_table', JSON.stringify(openPopup_siba_table));
    var siba_table = await this.megadelSearchService.Tables_Select_Gnrl(
      21,
      'TSSB'
    );
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog-more-info';
    dialogConfig.data = siba_table;
    const dialogRef = this.dialog.open(PopupSibaTableComponent, dialogConfig);

    let isSecondClick = false;

    const handleDocumentClick = () => {
      if (isSecondClick) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      } else {
        isSecondClick = true;
      }
    };

    const handleButtonClick = () => {
      if (dialogRef) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    // Add a click event listener to the button that triggers the main function
    const buttonElement = document.querySelector('#moreInfoBtn'); // Replace 'your-button-id' with the actual ID of your button
    buttonElement.addEventListener('click', handleButtonClick);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      isSecondClick = false;
      document.removeEventListener('click', handleDocumentClick);
      buttonElement.removeEventListener('click', handleButtonClick);
    });
  }


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

  //   מופעלת באון איניט ומביאה את הפרטי תשלום ההתחלתיים לפי השלוחה ההתחלתית
  async first_payment(shloha: any) {
    this.the_change_shloha = shloha;
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
  }

  //   מביאה את סוגי התשלום בבחירת שלוחה
  async change_shloha() {
    this.the_change_shloha = this.chosenShlohaControl.value;
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
  }

  //   מייצא קובץ אקסל
  getExcelDataFarmDetails(): void {
    this.tableexcelService.exportAsExcelFile(this.data, 'תשלומים');
  }

  // פונ הורדה לאקסל
  getExcelData(): void {
    if (this.paymentControl.value === '07') {
      const selectedFieldsArray = this.data.map((item) => {
        return {
          hodesh_name: item.hodesh_name,
          kt_Hodesh_Rtr: item.kt_Hodesh_Rtr,
          kt_mdgr: item.kt_mdgr,

          Madgir_Name: item.Madgir_Name,

          kt_kbln: item.kt_kbln,

          shem_kbln: item.shem_kbln,

          Kamut: item.Kamut,

          kt_Mhir: item.kt_Mhir,

          Shum_Tshlm: item.Shum_Tshlm,

          kt_Mhir_Nk: item.kt_Mhir_Nk,

          Shum_Tshlm_nk: item.Shum_Tshlm_nk,

          kt_Mhir_sl: item.kt_Mhir_sl,

          Shum_Tshlm_sl: item.Shum_Tshlm_sl,

          total: item.total,
        };
      });

      const fieldTitleMapping = {
        hodesh_name: 'חודש',
        kt_Hodesh_Rtr: 'חודש רטרו',
        kt_mdgr: 'מדגיר',
        Madgir_Name: 'שם מדגיר',

        kt_kbln: 'קבלן',

        shem_kbln: 'שם קבלן',

        Kamut: 'כמות',

        kt_Mhir: 'מחיר רגיל',

        Shum_Tshlm: 'תשלום רגיל',

        kt_Mhir_Nk: 'מחיר ניוקאסל',

        Shum_Tshlm_nk: 'תשלום ניוקאסל',

        kt_Mhir_sl: 'מחיר סלמונלה',

        Shum_Tshlm_sl: 'תשלום סלמונלה',

        total: 'תשלום סהכ',
      };

      this.transformedData = selectedFieldsArray.map((item) => {
        const transformedItem = {};
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            transformedItem[fieldTitleMapping[key] || key] = item[key];
          }
        }
        return transformedItem;
      });

      this.tableexcelService.exportAsExcelFile(
        this.transformedData,
        'תשלומים - פרמיה'
      );
    } else {
      if (this.paymentControl.value === '02') {
        const selectedFieldsArray = this.data.map((item) => {
          return {
            hodesh_name: item.hodesh_name,
            kt_Msvk: item.kt_Msvk,
            shem_msvk: item.shem_msvk,
            Micsa_Tshlm: item.Micsa_Tshlm,
            Kamut_In_Tkufa: item.Kamut_In_Tkufa,
            kt_Mztbr: item.kt_Mztbr,
            rtro: item.rtro,
            kt_mhir: item.kt_mhir,
            Kamut_SHTshlm: item.Kamut_SHTshlm,
            Shum_Tshlm: item.Shum_Tshlm,
            HefTas: item.HefTas,
            HefTas_Tshlm: item.HefTas_Tshlm,
            tot_Cam_tshlm: item.tot_Cam_tshlm,
            tot_shum_tshlm: item.tot_shum_tshlm,
            SibaHakpaa: item.SibaHakpaa,
            kt_siba_not_tslm: item.kt_siba_not_tslm,
          };
        });
        const fieldTitleMapping = {
          hodesh_name: 'חודש',
          kt_Msvk: 'משווק',
          shem_msvk: 'שם משווק',
          Micsa_Tshlm: 'מכסה קבועה',
          Kamut_In_Tkufa: 'כמות בתקופה',
          kt_Mztbr: 'מצטבר',
          rtro: 'רטרו',
          kt_mhir: 'מחיר',
          Kamut_SHTshlm: 'כמות שולמה',
          Shum_Tshlm: 'תשלום',
          HefTas: 'כמות תוספת',
          HefTas_Tshlm: 'תוספת תשלום',
          tot_Cam_tshlm: 'סהכ כמות שולמה',
          tot_shum_tshlm: 'סהכ תשלום',
          SibaHakpaa: 'הקפאה',
          kt_siba_not_tslm: 'סיבה',
        };

        this.transformedData = selectedFieldsArray.map((item) => {
          const transformedItem = {};
          for (const key in item) {
            if (item.hasOwnProperty(key)) {
              transformedItem[fieldTitleMapping[key] || key] = item[key];
            }
          }
          return transformedItem;
        });

        this.tableexcelService.exportAsExcelFile(
          this.transformedData,
          'תשלומים - היטלים'
        );
      } else {
        const selectedFieldsArray = this.data.map((item) => {
          return {
            hodesh_name: item.hodesh_name,
            kt_Msvk: item.kt_Msvk,
            shem_msvk: item.shem_msvk,
            Micsa_Tshlm: item.Micsa_Tshlm,
            Kamut_In_Tkufa: item.Kamut_In_Tkufa,
            kt_Mztbr: item.kt_Mztbr,
            rtro: item.rtro,
            kt_mhir: item.kt_mhir,
            Kamut_SHTshlm: item.Kamut_SHTshlm,
            Shum_Tshlm: item.Shum_Tshlm,
            HefTas: item.HefTas,
            HefTas_Tshlm: item.HefTas_Tshlm,
            tot_Cam_tshlm: item.tot_Cam_tshlm,
            tot_shum_tshlm: item.tot_shum_tshlm,
            SibaHakpaa: item.SibaHakpaa,
            kt_siba_not_tslm: item.kt_siba_not_tslm,
          };
        });
        const fieldTitleMapping = {
          hodesh_name: 'חודש',
          kt_Msvk: 'משווק',
          shem_msvk: 'שם משווק',
          Micsa_Tshlm: 'תשלום מכסה',
          Kamut_In_Tkufa: 'כמות בתקופה',
          kt_Mztbr: 'מצטבר',
          rtro: 'רטרו',
          kt_mhir: 'מחיר',
          Kamut_SHTshlm: 'כמות שולמה',
          Shum_Tshlm: 'תשלום',
          HefTas: 'כמות תוספת',
          HefTas_Tshlm: 'תוספת תשלום',
          tot_Cam_tshlm: 'סהכ כמות שולמה',
          tot_shum_tshlm: 'סהכ תשלום',
          SibaHakpaa: 'הקפאה',
          kt_siba_not_tslm: 'סיבה',
        };

        this.transformedData = selectedFieldsArray.map((item) => {
          const transformedItem = {};
          for (const key in item) {
            if (item.hasOwnProperty(key)) {
              transformedItem[fieldTitleMapping[key] || key] = item[key];
            }
          }
          return transformedItem;
        });

        this.tableexcelService.exportAsExcelFile(
          this.transformedData,
          'תשלומים - סובסידיה'
        );
      }
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
    this.Kamut_premia = 0;
    this.Shum_Tshlm_premia = 0;
    this.Shum_Tshlm_nk_premia = 0;
    this.Shum_Tshlm_sl_premia = 0;
    this.total_premia = 0;
    this.Kamut_SHTshlm = 0;
    this.Shum_Tshlm = 0;
    this.HefTas = 0;
    this.HefTas_Tshlm = 0;
    this.tot_Cam_tshlm = 0;
    this.tot_shum_tshlm = 0;
    this.premia_table = false;

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
      this.premia_table = true;
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
      this.count_total_details_premia(this.data);

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
      this.count_total_details_hetelim(this.data);
      this.isLoading_FarmDetails = false;
    }
    this.paymentControl.setValue(this.paymentControl.value);
    // this.payment.setValue(this.paymentControl.value);
    this.payment = this.paymentControl.value;
    console.log('d');
  }

  count_total_details_hetelim(data) {
    console.log('g');

    this.Kamut_SHTshlm = data.reduce((sum, obj) => {
      if (typeof obj.Kamut_SHTshlm === 'string') {
        const stringWithoutCommas = obj.Kamut_SHTshlm.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    this.Shum_Tshlm = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm === 'string') {
        const stringWithoutCommas = obj.Shum_Tshlm.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    this.HefTas = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm === 'string') {
        const stringWithoutCommas = obj.HefTas.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    this.HefTas_Tshlm = data.reduce((sum, obj) => {
      if (obj.HefTas_Tshlm) {
        sum + obj.HefTas_Tshlm;
      } else {
        return sum;
      }
    }, 0);

    this.tot_Cam_tshlm = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm === 'string') {
        const stringWithoutCommas = obj.tot_Cam_tshlm.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    this.tot_shum_tshlm = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm === 'string') {
        const stringWithoutCommas = obj.tot_shum_tshlm.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    console.log('l');
  }

  count_total_details_premia(data) {
    console.log('g');

    // this.Kamut_premia = data.reduce((sum, obj) => {
    //   if (obj.Kamut) {
    //     sum + obj.Kamut;
    //   } else {
    //     return sum;
    //   }
    // }, 0);

    this.Kamut_premia = data.reduce((sum, obj) => {
      if (obj.Kamut) {
        return sum + obj.Kamut;
      } else {
        return sum;
      }
    }, 0);

    console.log(this.Kamut_premia);

    this.Shum_Tshlm_premia = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm === 'string') {
        const stringWithoutCommas = obj.Shum_Tshlm.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    this.Shum_Tshlm_nk_premia = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm_nk === 'string') {
        const stringWithoutCommas = obj.Shum_Tshlm_nk.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    this.Shum_Tshlm_sl_premia = data.reduce((sum, obj) => {
      if (typeof obj.Shum_Tshlm_sl === 'string') {
        const stringWithoutCommas = obj.Shum_Tshlm_sl.replace(/,/g, '');
        const parsedNumber = parseFloat(stringWithoutCommas);
        return sum + parsedNumber;
      } else {
        return sum;
      }
    }, 0);

    // this.total_premia = data.reduce((sum, obj) => {
    //   if (obj.total) {
    //     sum + obj.total;
    //   } else {
    //     return sum;
    //   }
    // }, 0);

    this.total_premia = data.reduce((sum, obj) => {
      if (obj.total) {
        return sum + obj.total;
      } else {
        return sum;
      }
    }, 0);

    //   -----------------------------
  }
}
