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
  selector: 'app-payments-prices',
  templateUrl: './payments-prices.component.html',
  styleUrls: ['./payments-prices.component.css'],
})
export class PaymentsPricesComponent {
  shlohot: any[];
  all_payment_type: any[];
  DetailsForm: FormGroup;
  chosenYearControl = new FormControl();
  chosenMonthControl = new FormControl();
  chosenShlohaControl = new FormControl();
  paymentControl = new FormControl();
  isLoading_FarmDetails = false;
  chosenYear: any = 2023;
  chosenMonth: any = 'ינואר';
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

  chosenShloha: any = 'ביצי מאכל';
  payment: any = '02';
  the_change_shloha: any = '';
  payment_by_grewernum: any[] = [];
  theStartDate: any = '';
  theEndDateControl: any = '';
  theChosenYearControl: any = 2023;
  theChosenShlohaControl: any = '30';
  type_of_payment: any[] = [
    { name: 'סובסידיה', code: '01' },
    { name: 'היטלים', code: '02' },
  ];
  data: any[] = [];
  yearInput: FormControl;
  transformedData: any[];

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private megadelSearchService: MegadelSearchService,
    private tableexcelService: TableexcelService
  ) {
    this.DetailsForm = this.formBuilder.group({
      chosenYear: new FormControl(),
      chosenMonth: new FormControl(),
      chosenShloha: new FormControl(),
      payment: new FormControl(),
    });
  }
  async ngOnInit() {
    this.chosenMonth = 'ינואר';
    this.chosenShloha = 'ביצי מאכל';
    this.payment = '02';
    const currentDate = new Date();
    this.chosenYear = currentDate.getFullYear();

    this.yearInput = new FormControl('', Validators.required);
    this.DetailsForm = new FormGroup({
      yaerBox: this.yearInput,
    });
    // שלוחות עדכניות
    this.shlohot = await this.megadelSearchService.get_all_new_shlohot();
    // כל סוגי התשלום
    this.all_payment_type =
      await this.megadelSearchService.get_all_payment_type_to_prices();

    // המידע ההתחלתי
    this.data = await this.megadelSearchService.Mhirim_Get_Tkufa(
      this.chosenYear,
      '30',
      '02',
      '01'
    );

    console.log(this.data);
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

  //   מביאה את סוגי התשלום בבחירת שלוחה
  async change_shloha(obj: any) {
    console.log(obj);
    console.log(event.target);

    // הוצאת קוד השלוחה
    this.the_change_shloha = this.shlohot.filter(
      (obj) => obj.name === this.chosenShlohaControl.value
    );

    if (this.the_change_shloha.length > 0) {
      var chosenShloha_code = this.the_change_shloha[0]?.code;
    } else {
      console.log('No objects found.');
    }

    if (chosenShloha_code === '30' || chosenShloha_code === '10') {
      this.type_of_payment = [
        { name: 'סובסידיה', code: '01' },
        { name: 'היטלים', code: '02' },
      ];
      this.payment = '02';
    } else {
      if (
        chosenShloha_code === '01' ||
        chosenShloha_code === '21' ||
        chosenShloha_code === '22' ||
        chosenShloha_code === '26' ||
        chosenShloha_code === '29' ||
        chosenShloha_code === '20'
      ) {
        this.type_of_payment = [{ name: 'היטלים', code: '02' }];
        this.payment = '02';
      } else {
        this.type_of_payment = [{ name: 'ביטוחים', code: '03' }];
        this.payment = '03';
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
    try {
      this.isLoading_FarmDetails = true;

      console.log(this.chosenYearControl.value);
      console.log(this.chosenMonthControl.value);
      console.log(this.chosenShlohaControl.value);
      console.log(this.paymentControl.value);

      const searchName = this.chosenShlohaControl.value;
      const filteredObjects = this.shlohot.filter(
        (obj) => obj.name === searchName
      );

      if (filteredObjects.length > 0) {
        var chosenShloha = filteredObjects[0]?.code;
      } else {
        console.log('No objects found.');
      }

      console.log(chosenShloha);

      if (this.paymentControl.value === '03') {
        this.data =
          await this.megadelSearchService.Mhirim_Get_Tkufa_bitohim_by_year_and_tz(
            chosenShloha,
            this.chosenYear
          );
      }

      console.log(this.data);
    } catch (error) {
    } finally {
      this.isLoading_FarmDetails = false;
    }
  }
}
