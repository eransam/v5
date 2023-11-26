import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';
import { TableexcelService } from 'src/app/services/tableexcel.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupAddPricesComponent } from '../../popup-add-prices/popup-add-prices.component';

@Component({
  selector: 'app-payments-prices',
  templateUrl: './payments-prices.component.html',
  styleUrls: ['./payments-prices.component.css'],
})
export class PaymentsPricesComponent {
  all_table = true;
  start_mergedArray: any[];
  open_table: any;
  mergedArray_bitohim: any[];
  count: any = 0;
  newArray_newkasel: any[];
  newArray_Regular: any[];
  newArray_salmonela: any[];
  data_all_shlohot_bitohim: any[];
  full_arr: any[];
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
  all_shlohot: any[];
  chosenShloha: any = 'ביצי מאכל';
  payment: any = '02';
  the_change_shloha: any = '';
  payment_by_grewernum: any[] = [];
  theStartDate: any = '';
  theEndDateControl: any = '';
  theChosenYearControl: any = 2023;
  theChosenShlohaControl: any = '30';
  type_of_payment: any[] = ['02 - היטלים', '01 - סובסידיה', '07 - ביטוחים'];
  data: any[] = [];
  yearInput: FormControl;
  transformedData: any[];
  selectedRow: number | null = null; // To track the edited row index
  margeArr: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private megadelSearchService: MegadelSearchService,
    private tableexcelService: TableexcelService,
    private dialog: MatDialog
  ) {
    this.DetailsForm = this.formBuilder.group({
      chosenYear: new FormControl(),
      chosenMonth: new FormControl(),
      chosenShloha: new FormControl(),
      payment: new FormControl(),
    });
  }
  async ngOnInit() {
    this.margeArr = [];
    this.chosenMonth = 'ינואר';
    this.payment = '02 - היטלים';
    const currentDate = new Date();
    this.chosenYear = currentDate.getFullYear();

    this.yearInput = new FormControl('', Validators.required);
    this.DetailsForm = new FormGroup({
      yaerBox: this.yearInput,
    });

    // ייבוא כל השלוחות
    this.all_shlohot = await this.megadelSearchService.get_all_new_shlohot();

    // מביא את כל המידע הכולל של כל שלוחות הביטוחים
    await this.bring_all_data_shlohot_bitohim_by_year(this.chosenYear);

    // שלוחות עדכניות לפי פרטי תשלום היטלים - לפי היטלים פרטים התחלתיים
    this.shlohot = await this.megadelSearchService.get_all_new_shlohot();
    this.shlohot = this.shlohot.filter(
      (obj) =>
        obj.code === '01' ||
        obj.code === '10' ||
        obj.code === '20' ||
        obj.code === '21' ||
        obj.code === '22' ||
        obj.code === '26' ||
        obj.code === '29' ||
        obj.code === '30'
    );
    this.shlohot.push({ id: 1, name: 'כולם', code: '100' });
    this.chosenShlohaControl.setValue('כולם');

    // כל סוגי התשלום
    this.all_payment_type =
      await this.megadelSearchService.get_all_payment_type_to_prices();

    //   מידע של כל השלוחות בהיטלים
    this.start_mergedArray = await this.get_data_hetelim_all_shlohot_by_yaer(
      this.chosenYear
    );
    // כל שינויי המחיר הנוספים פר שנה
    var get_all_data_from_update_all_prices_by_year =
      await this.megadelSearchService.get_all_data_from_update_all_prices_by_year(
        this.chosenYear
      );

    get_all_data_from_update_all_prices_by_year =
      get_all_data_from_update_all_prices_by_year.map((item) => ({
        id: item.id,
        mh_mhir_hetelim: item.mh_mhir_hetelim,
        mh_mhir_visot: item.mh_mhir_visot,
        mh_tzrt: item.mh_tzrt,
        name_shloha: item.name_shloha,
        payment_type: item.payment_type,
        tk_date_from_hetelim: item.tk_date_from_hetelim,
        tk_date_to_hetelim: item.tk_date_to_hetelim,
        update_time: item.update_time,
        year: item.year,
      }));

    this.margeArr = [
      ...get_all_data_from_update_all_prices_by_year,
      ...this.start_mergedArray,
    ];

    this.margeArr = this.margeArr.sort((a, b) => {
      // Compare 'mh_tzrt' first
      if (a.mh_tzrt !== b.mh_tzrt) {
        return a.mh_tzrt.localeCompare(b.mh_tzrt);
      }

      // If 'mh_tzrt' is the same, compare 'update_time'
      const dateA: any = new Date(a.update_time);
      const dateB: any = new Date(b.update_time);

      return dateA - dateB;
    });

    console.log(this.margeArr);

    this.data = this.start_mergedArray;
    // this.data = margeArr;

    // פתיחת טבלה מתאימה
    this.open_table = '02';
  }
  //   end oninit

  all_the_change_price() {
    this.data = this.margeArr;
  }

  openPopup_editRowBtn(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog-add-prices';
    dialogConfig.data = [data];
    const dialogRef = this.dialog.open(PopupAddPricesComponent, dialogConfig);
  }

  editRow(row_to_add: any): void {
    this.openPopup_editRowBtn(row_to_add);
  }

  async get_data_hetelim_all_shlohot_by_yaer(year: any) {
    // המידע ההתחלתי של כל השלוחות של ההיטלים
    var hetelim = await this.megadelSearchService.Mhirim_Get_Tkufa_all_shlohot(
      year,
      '02',
      '01'
    );
    for (let obj of hetelim) {
      obj.payment_name = '02 - היטלים';
      obj.payment_name_en = 'hetelim';
    }

    // שינוי שם ייחודי לכל שלוחה
    hetelim = hetelim.map((obj) => ({
      ['mh_mhir_' + obj.payment_name_en]: obj.mh_mhir,
      ['mh_tkufa_num_' + obj.payment_name_en]: obj.mh_tkufa_num,
      ['payment_name_' + obj.payment_name_en]: obj.payment_name,
      ['payment_name_en_' + obj.payment_name_en]: obj.payment_name_en,
      ['tk_date_from_' + obj.payment_name_en]: obj.tk_date_from,
      ['tk_date_to_' + obj.payment_name_en]: obj.tk_date_to,
      ['mh_tzrt']: obj.mh_tzrt,
    }));

    // פרטי קרן ויסות שלוחת ביצי מאכל
    var visot = await this.megadelSearchService.Mhirim_Get_Tkufa_all_shlohot(
      year,
      '35',
      '01'
    );

    for (let obj of visot) {
      obj.payment_name = 'קרן ויסות';
      obj.payment_name_en = 'visot';
    }

    // שינוי שם ייחודי לכל שלוחה
    visot = visot.map((obj) => ({
      ['mh_mhir_' + obj.payment_name_en]: obj.mh_mhir,
      ['mh_tkufa_num_' + obj.payment_name_en]: obj.mh_tkufa_num,
      ['payment_name_' + obj.payment_name_en]: obj.payment_name,
      ['payment_name_en_' + obj.payment_name_en]: obj.payment_name_en,
      ['tk_date_from_' + obj.payment_name_en]: obj.tk_date_from,
      ['tk_date_to_' + obj.payment_name_en]: obj.tk_date_to,
      ['mh_tzrt']: obj.mh_tzrt,
    }));

    // הכנסת האובייקטים למערך אחד
    var merge = [...hetelim, ...visot];

    // מיזוג אובייקטים פר שלוחה
    const groupedObjects = merge.reduce((result, obj) => {
      const mh_tzrt = obj.mh_tzrt;
      if (!result[mh_tzrt]) {
        result[mh_tzrt] = {};
      }
      Object.keys(obj).forEach((key) => {
        // if (key !== 'mh_tzrt') {
        result[mh_tzrt][key] = obj[key];
        // }
      });
      return result;
    }, {});
    const mergedArray = Object.values(groupedObjects);
    this.start_mergedArray = mergedArray;

    // הוספת שדה שם שלוחה לכל שלוחה
    for (let obj of this.start_mergedArray) {
      var name_shloha = this.all_shlohot.filter(
        (obj2) => obj2.code === obj.mh_tzrt
      );
      obj.name_shloha = name_shloha[0].name;
    }

    return this.start_mergedArray;
  }

  //   and ngOnInit
  async bring_all_data_shlohot_bitohim_by_year(chosenYear: any) {
    // ייבוא כל המידע של הביטוחים של כל השלוחות
    this.data_all_shlohot_bitohim =
      await this.megadelSearchService.Mhirim_Get_Tkufa_bitohim_all_shlohot(
        chosenYear
      );

    //   הוצאת שלוחות לא רלוונטיות
    this.data_all_shlohot_bitohim = this.data_all_shlohot_bitohim.filter(
      (obj) => obj.mh_tzrt !== '42' && obj.mh_tzrt !== '94'
    );

    //הוספת שדה שם שלוחה לכל שלוחה
    for (let obj of this.data_all_shlohot_bitohim) {
      var name_shloha = this.all_shlohot.filter(
        (obj2) => obj2.code === obj.mh_tzrt
      );
      obj.name_shloha = name_shloha[0].name;
    }

    // שינוי שם ייחודי לכל שלוחה
    this.data_all_shlohot_bitohim = this.data_all_shlohot_bitohim.map(
      (obj) => ({
        ['insurance_name_' + obj.mh_Sug_Mhir]: obj.insurance_name,
        ['mh_mhir_' + obj.mh_Sug_Mhir]: obj.mh_mhir,
        ['mh_Sug_Mhir_' + obj.mh_Sug_Mhir]: obj.mh_Sug_Mhir,
        ['mh_tkufa_num_' + obj.mh_Sug_Mhir]: obj.mh_tkufa_num,
        ['mh_tzrt_' + obj.mh_Sug_Mhir]: obj.mh_tzrt,
        ['tk_date_from_' + obj.mh_Sug_Mhir]: obj.tk_date_from,
        ['tk_date_to_' + obj.mh_Sug_Mhir]: obj.tk_date_to,
        ['tzrt']: obj.mh_tzrt,
        ['name_shloha' + obj.mh_Sug_Mhir]: obj.name_shloha,
      })
    );

    // מיזוג אובייקטים פר שלוחה
    const groupedObjects = this.data_all_shlohot_bitohim.reduce(
      (result, obj) => {
        const tzrt = obj.tzrt;
        if (!result[tzrt]) {
          result[tzrt] = {};
        }
        Object.keys(obj).forEach((key) => {
          if (key !== 'tzrt') {
            result[tzrt][key] = obj[key];
          }
        });
        return result;
      },
      {}
    );
    const mergedArray = Object.values(groupedObjects);
    this.mergedArray_bitohim = mergedArray;

    //הוספת שדה שם שלוחה לכל שלוחה
    for (let obj of this.mergedArray_bitohim) {
      var count = 0;
      if (obj.mh_mhir_06) {
        count += obj.mh_mhir_06;
      }
      if (obj.mh_mhir_07) {
        count += obj.mh_mhir_07;
      }
      if (obj.mh_mhir_09) {
        count += obj.mh_mhir_09;
      }

      obj.count = count;
    }
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

  async change_payment(obj: any) {
    console.log(event.target);
    this.shlohot = await this.megadelSearchService.get_all_new_shlohot();

    if (this.paymentControl.value === '01 - סובסידיה') {
      this.shlohot = this.shlohot.filter(
        (obj) => obj.code === '10' || obj.code === '30'
      );
      this.shlohot.unshift({ id: 1, name: 'כולם', code: '100' });
    }

    if (this.paymentControl.value === '02 - היטלים') {
      this.shlohot = this.shlohot.filter(
        (obj) =>
          obj.code === '01' ||
          obj.code === '10' ||
          obj.code === '20' ||
          obj.code === '21' ||
          obj.code === '22' ||
          obj.code === '26' ||
          obj.code === '29' ||
          obj.code === '30'
      );
      this.shlohot.unshift({ id: 1, name: 'כולם', code: '100' });
    }

    if (this.paymentControl.value === '07 - ביטוחים') {
      this.shlohot = this.shlohot.filter(
        (obj) =>
          obj.code === '40' ||
          obj.code === '41' ||
          obj.code === '42' ||
          obj.code === '43' ||
          obj.code === '44' ||
          obj.code === '45' ||
          obj.code === '46' ||
          obj.code === '47' ||
          obj.code === '90' ||
          obj.code === '91' ||
          obj.code === '92' ||
          obj.code === '93' ||
          obj.code === '94'
      );
      this.shlohot.unshift({ id: 1, name: 'כולם', code: '100' });
    }
    this.chosenShlohaControl.setValue('כולם');
  }

  //   מביאה את סוגי התשלום בבחירת שלוחה
  async change_shloha(obj: any) {
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
        { name: '01 - סובסידיה', code: '01' },
        { name: '02 - היטלים', code: '02' },
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
        this.type_of_payment = [{ name: '02 - היטלים', code: '02' }];
        this.payment = '02';
      } else {
        this.type_of_payment = [{ name: '07 - ביטוחים', code: '03' }];
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
      this.all_table = false;
      this.isLoading_FarmDetails = true;
      this.count = 0;
      console.log(this.chosenYearControl.value);
      console.log(this.chosenMonthControl.value);
      console.log(this.chosenShlohaControl.value);
      console.log(this.paymentControl.value);

      if (this.paymentControl.value === '01 - סובסידיה') {
        var the_payment = '01';
        this.open_table = '01';
      }
      if (this.paymentControl.value === '02 - היטלים') {
        var the_payment = '02';
        this.open_table = '02';
      }
      if (this.paymentControl.value === '07 - ביטוחים') {
        var the_payment = '03';
        this.open_table = '03';
      }

      const searchName = this.chosenShlohaControl.value;
      const filteredObjects = this.shlohot.filter(
        (obj) => obj.name === searchName
      );

      if (filteredObjects.length > 0) {
        var chosenShloha = filteredObjects[0]?.code;
      } else {
        console.log('No objects found.');
      }

      if (this.paymentControl.value === '07 - ביטוחים') {
        if (this.chosenShlohaControl.value === 'כולם') {
          await this.bring_all_data_shlohot_bitohim_by_year(
            this.chosenYearControl.value
          );
          this.data = this.mergedArray_bitohim;
        } else {
          await this.bring_all_data_shlohot_bitohim_by_year(
            this.chosenYearControl.value
          );

          const searchName = this.chosenShlohaControl.value;
          const filteredObjects = this.mergedArray_bitohim.filter(
            (obj) => obj.name_shloha07 === searchName
          );
          this.data = filteredObjects;
        }
      } else {
        if (
          this.paymentControl.value === '02 - היטלים' &&
          this.chosenShlohaControl.value === 'כולם'
        ) {
          this.all_table = true;
          //   מידע של כל השלוחות בהיטלים
          await this.get_data_hetelim_all_shlohot_by_yaer(this.chosenYear);
          this.data = this.start_mergedArray;
        } else {
          if (
            this.paymentControl.value === '01 - סובסידיה' &&
            this.chosenShlohaControl.value === 'כולם'
          ) {
            this.all_table = true;

            var sobsidia =
              await this.megadelSearchService.Mhirim_Get_Tkufa_all_shlohot(
                this.chosenYear,
                the_payment,
                '01'
              );
            // הוספת שדה שם שלוחה לכל שלוחה
            for (let obj of sobsidia) {
              var name_shloha = this.all_shlohot.filter(
                (obj2) => obj2.code === obj.mh_tzrt
              );
              obj.name_shloha = name_shloha[0].name;
              obj.payment_name = '01 - סובסידיה';
            }
            this.data = sobsidia;
          } else {
            var hetelim_or_sobsidia =
              await this.megadelSearchService.Mhirim_Get_Tkufa(
                this.chosenYear,
                chosenShloha,
                the_payment,
                '01'
              );
            if (the_payment === '01') {
              hetelim_or_sobsidia[0].payment_name = '01 - סובסידיה';
              var name_shloha = this.all_shlohot.filter(
                (obj2) => obj2.code === chosenShloha
              );
              hetelim_or_sobsidia[0].name_shloha = name_shloha[0].name;
              hetelim_or_sobsidia[0].mh_tzrt = chosenShloha;
              this.data = hetelim_or_sobsidia;
            }
            if (the_payment === '02') {
              hetelim_or_sobsidia[0].payment_name = '02 - היטלים';
              hetelim_or_sobsidia[0].payment_name_en = 'hetelim';
              var visot = await this.megadelSearchService.Mhirim_Get_Tkufa(
                this.chosenYear,
                chosenShloha,
                '35',
                '01'
              );
              visot[0].payment_name = 'קרן ויסות';
              visot[0].payment_name_en = 'visot';

              var merge = [...hetelim_or_sobsidia, ...visot];

              // שינוי שם ייחודי לכל שלוחה
              merge = merge.map((obj) => ({
                ['mh_mhir_' + obj.payment_name_en]: obj.mh_mhir,
                ['mh_tkufa_num_' + obj.payment_name_en]: obj.mh_tkufa_num,
                ['payment_name_' + obj.payment_name_en]: obj.payment_name,
                ['tk_date_from_' + obj.payment_name_en]: obj.tk_date_from,
                ['tk_date_to_' + obj.payment_name_en]: obj.tk_date_to,
                ['payment_name_en_' + obj.payment_name_en]: obj.payment_name_en,
              }));

              const mergedObject = Object.assign({}, ...merge);
              var name_shloha = this.all_shlohot.filter(
                (obj2) => obj2.code === chosenShloha
              );
              mergedObject.name_shloha = name_shloha[0].name;
              mergedObject.mh_tzrt = chosenShloha;
              this.data = [mergedObject];
            }
          }
        }
      }
      console.log('end_try');
    } catch (error) {
    } finally {
      this.isLoading_FarmDetails = false;
    }
  }
}
