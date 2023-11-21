import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { MegadelSearchInsertService } from 'src/app/services/megadel-search-insert.service';
import { MegadelSearchDeleteService } from 'src/app/services/megadel-search-delete.service';
import { QaServiceService } from 'src/app/services/qa-service.service';

import { TableexcelService } from 'src/app/services/tableexcel.service';
import { log } from 'console';
import { PopupSibaTableComponent } from '../popup-siba-table/popup-siba-table.component';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-close-payments',
  templateUrl: './close-payments.component.html',
  styleUrls: ['./close-payments.component.css'],
})
export class ClosePaymentsComponent {
  selected_option_status: string = '0';
  selected_option_status_excel: string = 'merokaz';
  isLoading: boolean = false;
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
  excelForm: FormGroup;
  site: string;
  shlohaOption = [0, 0, 0];
  startDateControl = new FormControl();
  endDateControl = new FormControl();
  chosenYearControl = new FormControl();

  chosenYearControl_excel = new FormControl();
  chosenMonthControl = new FormControl();
  chosenMonthControl_excel = new FormControl();
  chosenSiteControl = new FormControl();
  chosenShlohaControl = new FormControl();
  chosenShlohaControl_excel = new FormControl();
  paymentControl = new FormControl();
  paymentControl_excel = new FormControl();
  selected_option_statusControl = new FormControl();
  selected_option_statusControl_excel = new FormControl();
  isLoading_FarmDetails = false;
  chosenyear_cartificate: any = '2023';
  chosenYear: any = 2023;
  chosenYear_excel: any = 2023;
  chosenMonth: any = '01';
  chosenMonth_excel: any = '01';
  enteredYear: any = '2023';
  years = ['2020', '2021', '2022', '2023'];
  months = [
    { code: '01', name: 'ינואר' },
    { code: '02', name: 'פברואר' },
    { code: '03', name: 'מרץ' },
    { code: '04', name: 'אפריל' },
    { code: '05', name: 'מאי' },
    { code: '06', name: 'יוני' },
    { code: '07', name: 'יולי' },
    { code: '08', name: 'אוגוסט' },
    { code: '09', name: 'ספטמבר' },
    { code: '10', name: 'אוקטובר' },
    { code: '11', name: 'נובמבר' },
    { code: '12', name: 'דצמבר' },
  ];

  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  chosenShloha: any;
  chosenShloha_excel: any;
  payment: any = '02';
  payment_excel: any = '02';
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
  shlohot_cartificate: any[] = [
    { code: '01', name: 'הודים' },
    { code: '10', name: 'פיטום' },
    { code: '30', name: 'ביצי מאכל' },
  ];
  initialEndDate: any;
  type_of_payment: any[] = [
    { name: 'סובסידיה', code: '01' },
    { name: 'היטלים', code: '02' },
    { name: 'ביטוחים', code: '07' },
  ];
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
  siba_table: any[] = [];
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public router: Router,
    private megadelSearchService: MegadelSearchService,
    private MegadelSearchInsertService: MegadelSearchInsertService,
    private MegadelSearchDeleteService: MegadelSearchDeleteService,
    private QaServiceService: QaServiceService,

    private tableexcelService: TableexcelService
  ) {
    this.DetailsForm = this.formBuilder.group({
      chosenYear: new FormControl(),
      chosenMonth: new FormControl(),
      chosenShloha: new FormControl(),
      payment: new FormControl(),
      selected_option_status: new FormControl(),
    });
    this.excelForm = this.formBuilder.group({
      chosenYear_excel: new FormControl(),
      chosenMonth_excel: new FormControl(),
      chosenShloha_excel: new FormControl(),
      payment_excel: new FormControl(),
      selected_option_status_excel: new FormControl(),
    });

    this.chosenMonth = '01';
    this.chosenMonth_excel = '01';

    this.chosenYear = '2023';
    this.chosenYear_excel = '2023';

    this.enteredYear = '2023';
    this.chosenSite = 'כולם';
    this.chosenShloha = '30';
    this.chosenShloha_excel = '30';

    this.payment = '02';
    this.payment_excel = '02';
  }
  async ngOnInit() {
    this.yearInput = new FormControl('', Validators.required);
    this.DetailsForm = new FormGroup({
      yaerBox: this.yearInput,
    });
    this.excelForm = new FormGroup({
      yaerBox: this.yearInput,
    });
  }
  //   and ngOnInit

  async calc() {}
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

  //   מביאה את סוגי התשלום בבחירת שלוחה
  async change_shloha() {
    this.the_change_shloha = this.chosenShlohaControl.value;
    if (this.the_change_shloha === '30' || this.the_change_shloha === '10') {
      this.type_of_payment = [
        { name: 'סובסידיה', code: '01' },
        { name: 'היטלים', code: '02' },
      ];
    } else {
      this.type_of_payment = [{ name: 'היטלים', code: '02' }];
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

  getExcelData_new_test(data_to_excel): void {
    // פרמיות
    if (this.paymentControl.value === '07') {
      const selectedFieldsArray = data_to_excel.map((item) => {
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
      // היטלים
      if (this.paymentControl.value === '02') {
        if (this.selected_option_statusControl_excel.value === 'merokaz') {
          const selectedFieldsArray = data_to_excel.map((item) => {
            return {
              shana: item.shana,
              month: item.month,
              tzrt: item.tzrt,
              payment_type: item.payment_type,
              msvk_code: item.msvk_code,
              msvk_name: item.msvk_name,
              micsa_kvoha: item.micsa_kvoha,
              kamut_tashlom: item.kamut_tashlom,
              mhir: item.mhir,
              amount_to_pay: item.amount_to_pay,
            };
          });
          const fieldTitleMapping = {
            shana: 'שנה',
            month: 'חודש',
            tzrt: 'תוצרת',
            payment_type: 'סוג תשלום',
            msvk_code: 'קוד משווק',
            msvk_name: 'שם משווק',
            micsa_kvoha: 'מכסה קבוע',
            kamut_tashlom: 'כמות לתשלום',
            mhir: 'מחיר היטל',
            amount_to_pay: 'סכום לתשלום',
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
            'סגירת חודש - היטלים מרוכז'
          );
        }
        if (this.selected_option_statusControl_excel.value === 'meforat') {
          const selectedFieldsArray = data_to_excel.map((item) => {
            return {
              mh_Shana: item.mh_Shana,
              the_month: item.the_month,
              mh_Tzrt: item.mh_Tzrt,
              mh_Sug_Mhir: item.mh_Sug_Mhir,
              msvk_code: item.msvk_code,
              msvk_name: item.msvk_name,
              grower_grower_num: item.grower_grower_num,
              micsa_kvoha: item.micsa_kvoha,
              marketing_sum: item.marketing_sum,
              mh_Mhir: item.mh_Mhir,
              amount: item.amount,
            };
          });
          const fieldTitleMapping = {
            mh_Shana: 'שנה',
            the_month: 'חודש',
            mh_Tzrt: 'תוצרת',
            mh_Sug_Mhir: 'סוג תשלום',
            msvk_code: 'קוד משווק',
            msvk_name: 'שם משווק',
            grower_grower_num: 'מס מגדל',
            micsa_kvoha: 'מכסה קבוע',
            marketing_sum: ' כמות לתשלום',
            mh_Mhir: 'מחיר',
            amount: 'סכום לתשלום',
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
            'סגירת חודש - היטלים - מפורט'
          );
        }
      } else {
        // סובסידיה
        const selectedFieldsArray = data_to_excel.map((item) => {
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

  async delete_month() {
    this.isLoading = true;
    console.log(this.chosenYearControl.value);
    console.log(this.chosenMonthControl.value);
    console.log(this.chosenShlohaControl.value);
    console.log(this.paymentControl.value);
    var delete_month =
      await this.MegadelSearchDeleteService.delete_close_month_main(
        this.chosenMonthControl.value,
        this.chosenYearControl.value,
        this.chosenShlohaControl.value,
        this.paymentControl.value
      );
    this.openSuccessDialog_delete('החודש נמחק בהצלחה');

    this.isLoading = false;
  }

  async add() {
    this.isLoading = true;
    console.log(this.chosenYearControl.value);
    console.log(this.chosenMonthControl.value);
    console.log(this.chosenShlohaControl.value);
    console.log(this.paymentControl.value);
    console.log('d');

    // qa
    if (this.chosenShlohaControl.value === '30') {
      // יוצרים סטרינגים אשר מכילים את התאריך המלא מהיום הראשון של החודש לאחרון לפי מס חודש
      var lastDay = this.getLastDayOfMonth(
        Number(this.chosenMonthControl.value)
      );
      var first_day = '01';
      var last_day_of_the_month_full_year = `${this.chosenYearControl.value}${this.chosenMonthControl.value}${lastDay}`;
      var first_day_of_the_month_full_year = `${this.chosenYearControl.value}${this.chosenMonthControl.value}${first_day}`;

      //grower_split עברו את תהליך הפיצול ונמצאים עכשיו בטבלת  packege בדיקה האם כל המגדלים מטבלת
      var if_all_grower_from_packege_in_grower_split: any[] =
        await this.QaServiceService.qa_if_all_grower_from_packege_in_grower_split_by_dates(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(if_all_grower_from_packege_in_grower_split);

      // בדיקה האם כל התעודות של סגירת החודש המבוקש נמצאים בסטטוס "נקלטו במכון" כ
      var if_all_certificate_is_in_transfer_status_id_3: any[] =
        await this.QaServiceService.qa_check_if_all_certificate_is_in_transfer_status_id_3(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(if_all_certificate_is_in_transfer_status_id_3);

      // אשר כמות השיווק שלהם היא 0 packege בדיקה האם יש תעודות בטבלת
      var _check_if_there_is_certificate_from_packege_that_sum_0: any[] =
        await this.QaServiceService.qa_check_if_there_is_certificate_from_packege_that_sum_0(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(_check_if_there_is_certificate_from_packege_that_sum_0);

      //בודק האם יש מיכסה למגדל אשר עבר את הפיצול וקיים שיווקים
      var check_if_all_grower_after_split_have_micsa: any[] =
        await this.QaServiceService.qa_check_if_all_grower_after_split_have_micsa(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year,
          this.chosenYearControl.value,
          this.chosenShlohaControl.value
        );
      console.log(check_if_all_grower_after_split_have_micsa);

      // בודק האם יש מגדלים אשר יש להם מינוס בשיווק בגרואר ספליט
      var check_if_grower_have_minos_shivok: any[] =
        await this.QaServiceService.qa_check_if_grower_have_minos_shivok(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(check_if_grower_have_minos_shivok);

      //   בודק האם יש למגדל שיווק אך אין לו חידוש
      var check_if_grower_have_shivok_and_not_hidosh: any[] =
        await this.QaServiceService.qa_check_if_grower_have_shivok_and_not_hidosh(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(check_if_grower_have_shivok_and_not_hidosh);

      if (
        check_if_grower_have_shivok_and_not_hidosh.length === 0 &&
        check_if_grower_have_minos_shivok.length === 0 &&
        check_if_all_grower_after_split_have_micsa.length === 0 &&
        _check_if_there_is_certificate_from_packege_that_sum_0.length === 0 &&
        if_all_certificate_is_in_transfer_status_id_3.length === 0 &&
        if_all_grower_from_packege_in_grower_split.length === 0
      ) {
        var Calc = await this.MegadelSearchInsertService.close_month_main(
          this.chosenMonthControl.value,
          this.chosenYearControl.value,
          this.paymentControl.value,
          this.chosenShlohaControl.value
        );

        console.log(Calc);

        if (Calc[0]?.status === 'exist') {
          this.openSuccessDialog('שגיאה - חודש זה כבר נסגר');
        }
        if (Calc[0]?.status === 'insert-successfully') {
          console.log('in');

          this.openSuccessDialog('החודש נסגר בהצלחה');
        }
      }
    }

    this.isLoading = false;
  }

  async create_excel() {
    this.isLoading = true;
    console.log(this.chosenYearControl_excel.value);
    console.log(this.chosenMonthControl_excel.value);
    console.log(this.chosenShlohaControl_excel.value);
    console.log(this.paymentControl_excel.value);
    console.log(this.selected_option_statusControl_excel.value);

    console.log('d');

    const lastDay = this.getLastDayOfMonth(
      Number(this.chosenMonthControl_excel.value)
    );

    var full_date = `${this.chosenYearControl_excel.value}${this.chosenMonthControl_excel.value}${lastDay}`;
    console.log(full_date);

    if (this.selected_option_statusControl_excel.value === 'merokaz') {
      var data =
        await this.megadelSearchService.get_data_from_close_month_by_msvk(
          this.chosenYearControl_excel.value,
          this.paymentControl_excel.value,
          this.chosenShlohaControl_excel.value,

          this.chosenMonthControl_excel.value
        );
      console.log(data);

      if (data.length > 0) {
        this.getExcelData_new_test(data);
      } else {
        this.openSuccessDialog('לא קיים מידע');
      }
    }
    if (this.selected_option_statusControl_excel.value === 'meforat') {
      var data =
        await this.megadelSearchService.get_data_from_close_month_by_grower(
          this.chosenYearControl_excel.value,
          this.paymentControl_excel.value,
          this.chosenShlohaControl_excel.value,

          this.chosenMonthControl_excel.value
        );
      if (data.length > 0) {
        this.getExcelData_new_test(data);
      } else {
        this.openSuccessDialog('לא קיים מידע');
      }
    }

    this.isLoading = false;
  }

  openSuccessDialog(msg: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openSuccessDialog';
    dialogConfig.data = msg;
    const dialogRef = this.dialog.open(SuccessDialogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }

  openSuccessDialog_delete(msg: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openSuccessDialogDelete';
    dialogConfig.data = msg;
    const dialogRef = this.dialog.open(SuccessDialogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }

  getLastDayOfMonth(month: number): number {
    const date = new Date(); // Get the current date
    date.setMonth(month); // Set the month to the one you want
    date.setDate(0); // Set the day to 0, which refers to the last day of the previous month

    return date.getDate();
  }
}
6;
