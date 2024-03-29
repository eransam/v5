// ge_all_from_close_month_by_msvk_new_history

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
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
import { ConfirmMsgComponent } from '../confirm-msg/confirm-msg.component';

@Component({
  selector: 'app-close-payments',
  templateUrl: './close-payments.component.html',
  styleUrls: ['./close-payments.component.css'],
  //    encapsulation: ViewEncapsulation.None,
})
export class ClosePaymentsComponent implements OnInit, OnDestroy {
  history_close_month: any[] = [];
  sortedField: string = ''; // Track the currently sorted field
  sortDirection: number = 1; // 1 for ascending, -1 for descending
  total_count_marketing_sum = 0;
  click_on_search: boolean = false;
  Advanced_Search_varible: boolean = false;
  username_test: string;
  siteNum_test: string;
  gidulHotzNum_test: string;
  growerNum_test: string;
  grower_zeut_test: string;
  yeshuv_test: string;
  msvk_code_test: string;
  flock_id_test: string;
  farm_sattelment_test: string;

  msvk_name_test: string;
  usernameControl_test = new FormControl();
  siteNumControl_test = new FormControl();
  gidulHotzNumControl_test = new FormControl();
  growerNumControl_test = new FormControl();
  grower_zeut_testControl_test = new FormControl();
  yeshuvControl_test = new FormControl();
  msvk_name_Control_test = new FormControl();
  msvk_code_Control_test = new FormControl();
  flock_id_Control_test = new FormControl();
  farm_sattelment_Control_test = new FormControl();
  bakara_shloha: boolean = false;
  main_arr: any[] = [];
  main_arr2: any[] = [];

  split_all_grower_qa = 3;
  status_all_grower_qa = 3;
  shivok_count_0 = 3;
  micsot_all_growers_qa = 3;
  grower_with_minos_in_split = 3;
  check_hidosh_all_growers_qa = 3;
  selected_option_status: string = '1';
  selected_option_status_excel: string = 'merokaz';
  isLoading: boolean = false;
  premia_table: boolean = false;
  search_click: boolean = false;
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

  to_chosenYearControl_excel = new FormControl();
  chosenMonthControl = new FormControl();
  chosenMonthControl_excel = new FormControl();
  to_chosenMonthControl_excel = new FormControl();

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
  to_chosenYear_excel: any = 2023;

  chosenMonth: any = '01';
  chosenMonth_excel: any = '01';
  to_chosenMonth_excel: any = '01';
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
  theChosenShlohaControl: any = '';
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
  currentMonth: number;

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
  loadingText: string = 'מתחיל בתהליך הבקרה...';
  private textChangeInterval: any;
  loadingTextCounter: number;
  bakara_name = [
    'בדיקת פיצול לכלל המגדלים...',
    'בדיקת סטטוס כלל התעודות...',
    'בדיקת שיווק בכמות 0...',
    'בדיקת מכסות מגדלים...',
    'בדיקת חידוש למגדלים...',
    'בדיקת חידוש למגדלים...',
  ];

  if_all_grower_from_packege_in_grower_split: any[];
  if_all_certificate_is_in_transfer_status_id_3: any[];
  check_if_there_is_certificate_from_packege_that_sum_0: any[];
  check_if_all_grower_after_split_have_micsa: any[];
  check_if_grower_have_minos_shivok: any[];
  check_if_grower_have_shivok_and_not_hidosh: any[];
  isButtonDisabled: boolean = true;
  isButton_delete_Disabled: boolean = true;
  user_confirm_close: boolean = false;
  result_test: any;
  //   סיום משתנים
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

      to_chosenYear_excel: new FormControl(),

      chosenMonth_excel: new FormControl(),

      to_chosenMonth_excel: new FormControl(),
      chosenShloha_excel: new FormControl(),
      payment_excel: new FormControl(),
      selected_option_status_excel: new FormControl(),
      usernameControl_test: new FormControl(),
      siteNumControl_test: new FormControl(),
      gidulHotzNumControl_test: new FormControl(),
      growerNumControl_test: new FormControl(),
      grower_zeut_testControl_test: new FormControl(),
      yeshuvControl_test: new FormControl(),
      msvk_name_Control_test: new FormControl(),
      msvk_code_Control_test: new FormControl(),
      flock_id_Control_test: new FormControl(),
      farm_sattelment_Control_test: new FormControl(),
    });

    this.chosenMonth = '01';
    this.chosenMonth_excel = '01';
    this.to_chosenMonth_excel = '01';
    this.chosenYear = '2023';
    this.chosenYear_excel = '2023';

    this.to_chosenYear_excel = '2023';

    this.enteredYear = '2023';
    this.chosenSite = 'כולם';
    this.chosenShloha = '';
    this.chosenShloha_excel = '30';

    this.payment = '02';
    this.payment_excel = '02';
  }
  async ngOnInit() {
    this.click_on_search = false;
    this.Advanced_Search_varible = false;
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth() + 1;
    console.log(this.currentMonth);
    if (this.currentMonth > 1) {
      this.currentMonth = this.currentMonth - 1;
      this.chosenMonth = this.currentMonth.toString();
    } else {
      this.chosenMonth = this.currentMonth.toString();
    }

    this.isButtonDisabled = true;
    this.isButton_delete_Disabled = true;

    this.yearInput = new FormControl('', Validators.required);
    this.DetailsForm = new FormGroup({
      yaerBox: this.yearInput,
    });
    this.excelForm = new FormGroup({
      yaerBox: this.yearInput,
    });
  }
  //   and ngOnInit

  ngOnDestroy(): void {
    clearInterval(this.textChangeInterval);
  }

  // Sorting function
  sortTable(field: string): void {
    // Toggle sort direction if the same field is clicked again
    if (field === this.sortedField) {
      this.sortDirection = -this.sortDirection;
    } else {
      this.sortedField = field;
      this.sortDirection = 1;
    }

    // Perform sorting based on the selected field and direction
    this.data.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA < valueB) {
        return -1 * this.sortDirection;
      } else if (valueA > valueB) {
        return 1 * this.sortDirection;
      } else {
        return 0;
      }
    });

    console.log(this.data);
  }

  // Inside your component class
  isColumnSorted(column: string): boolean {
    return this.sortedField === column;
  }

  isColumnSortedAsc(column: string): boolean {
    return this.isColumnSorted(column) && this.sortDirection === 1;
  }

  isColumnSortedDesc(column: string): boolean {
    return this.isColumnSorted(column) && this.sortDirection === -1;
  }

  //   מנקה שדות
  cleanInputFild() {
    this.msvk_name_test = '';
    this.flock_id_test = '';
    this.farm_sattelment_test = '';
    this.msvk_code_test = '';
    this.yeshuv_test = '';
    this.growerNum_test = '';
    this.grower_zeut_test = '';
    this.gidulHotzNum_test = '';
    this.siteNum_test = '';
    this.username_test = '';
  }

  //   מנקה שדות
  clearInput(inputName: string): void {
    switch (inputName) {
      case 'msvk_name_test':
        this.msvk_name_test = '';
        break;

      case 'flock_id_test':
        this.flock_id_test = '';
        break;

      case 'farm_sattelment_test':
        this.farm_sattelment_test = '';
        break;

      case 'msvk_code_test':
        this.msvk_code_test = '';
        break;

      case 'yeshuv_test':
        this.yeshuv_test = '';
        break;

      case 'growerNum_test':
        this.growerNum_test = '';
        break;

      case 'grower_zeut_test':
        this.grower_zeut_test = '';
        break;

      case 'gidulHotzNum_test':
        this.gidulHotzNum_test = '';
        break;
      case 'siteNum_test':
        this.siteNum_test = '';
        break;
      case 'username_test':
        this.username_test = '';
        break;
      // Add cases for other input names if needed
    }
  }

  //   qa
  async main_testing() {
    this.search_click = true;
    this.split_all_grower_qa = 4;
    this.status_all_grower_qa = 4;
    this.shivok_count_0 = 4;
    this.micsot_all_growers_qa = 4;
    this.grower_with_minos_in_split = 4;
    this.check_hidosh_all_growers_qa = 4;
    if (this.chosenShlohaControl.value === '30') {
      // יוצרים סטרינגים אשר מכילים את התאריך המלא מהיום הראשון של החודש לאחרון לפי מס חודש
      var lastDay = this.getLastDayOfMonth(
        Number(this.chosenMonthControl.value)
      );
      var first_day = '01';
      var last_day_of_the_month_full_year = `${this.chosenYearControl.value}${this.chosenMonthControl.value}${lastDay}`;
      var first_day_of_the_month_full_year = `${this.chosenYearControl.value}${this.chosenMonthControl.value}${first_day}`;

      //grower_split עברו את תהליך הפיצול ונמצאים עכשיו בטבלת  packege בדיקה האם כל המגדלים מטבלת
      this.if_all_grower_from_packege_in_grower_split =
        await this.QaServiceService.qa_if_all_grower_from_packege_in_grower_split_by_dates(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(this.if_all_grower_from_packege_in_grower_split);

      if (this.if_all_grower_from_packege_in_grower_split.length === 0) {
        this.split_all_grower_qa = 1;
      } else {
        this.split_all_grower_qa = 2;
        var arr: any[];
        this.main_arr = [];

        for (let obj of this.if_all_grower_from_packege_in_grower_split) {
          arr = await this.megadelSearchService.get_grower_all_det(
            this.chosenMonthControl.value,
            this.chosenYearControl.value,
            first_day_of_the_month_full_year,
            last_day_of_the_month_full_year,
            obj.lull2000_code,
            this.chosenShlohaControl.value
          );
          this.main_arr = [...this.main_arr, ...arr];
        }
        this.if_all_grower_from_packege_in_grower_split = this.main_arr;
      }

      //   בדיקת סטטוס כלל התעודות
      // בדיקה האם כל התעודות של סגירת החודש המבוקש נמצאים בסטטוס "נקלטו במכון" כ
      this.if_all_certificate_is_in_transfer_status_id_3 =
        await this.QaServiceService.qa_check_if_all_certificate_is_in_transfer_status_id_3(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(this.if_all_certificate_is_in_transfer_status_id_3);
      if (this.if_all_certificate_is_in_transfer_status_id_3.length === 0) {
        this.status_all_grower_qa = 1;
      } else {
        this.status_all_grower_qa = 2;
      }

      // אשר כמות השיווק שלהם היא 0 packege בדיקה האם יש תעודות בטבלת
      this.check_if_there_is_certificate_from_packege_that_sum_0 =
        await this.QaServiceService.qa_check_if_there_is_certificate_from_packege_that_sum_0(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(this.check_if_there_is_certificate_from_packege_that_sum_0);
      if (
        this.check_if_there_is_certificate_from_packege_that_sum_0.length === 0
      ) {
        this.shivok_count_0 = 1;
      } else {
        this.shivok_count_0 = 2;
        var arr: any[];
        this.main_arr = [];
        for (let obj of this
          .check_if_there_is_certificate_from_packege_that_sum_0) {
          arr = await this.megadelSearchService.get_grower_all_det(
            this.chosenMonthControl.value,
            this.chosenYearControl.value,
            first_day_of_the_month_full_year,
            last_day_of_the_month_full_year,
            obj.lull2000_code,
            this.chosenShlohaControl.value
          );
          this.main_arr = [...this.main_arr, ...arr];
        }
        this.check_if_there_is_certificate_from_packege_that_sum_0 =
          this.main_arr;
      }

      //בודק האם יש מיכסה למגדל אשר עבר את הפיצול וקיים שיווקים
      this.check_if_all_grower_after_split_have_micsa =
        await this.QaServiceService.qa_check_if_all_grower_after_split_have_micsa(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year,
          this.chosenYearControl.value,
          this.chosenShlohaControl.value
        );
      console.log(this.check_if_all_grower_after_split_have_micsa);
      if (this.check_if_all_grower_after_split_have_micsa.length === 0) {
        this.micsot_all_growers_qa = 1;
      } else {
        this.micsot_all_growers_qa = 2;
        var arr: any[];
        this.main_arr = [];
        for (let obj of this.check_if_all_grower_after_split_have_micsa) {
          arr = await this.megadelSearchService.get_grower_all_det(
            this.chosenMonthControl.value,
            this.chosenYearControl.value,
            first_day_of_the_month_full_year,
            last_day_of_the_month_full_year,
            obj.lull2000_code,
            this.chosenShlohaControl.value
          );
          this.main_arr = [...this.main_arr, ...arr];
        }
        if (this.main_arr.length === 0) {
          var arr2: any[];
          this.main_arr2 = [];
          for (let obj of this.check_if_all_grower_after_split_have_micsa) {
            arr2 = await this.megadelSearchService.get_start_grower_det(
              '',
              '',
              '',
              obj.lull2000_code,
              '',
              '',
              ''
            );
            this.main_arr2 = [...this.main_arr2, ...arr2];
            this.check_if_all_grower_after_split_have_micsa = this.main_arr2;
          }
        } else {
          this.check_if_all_grower_after_split_have_micsa = this.main_arr;
        }

        console.log(this.check_if_all_grower_after_split_have_micsa);
      }

      // בודק האם יש מגדלים אשר יש להם מינוס בשיווק בגרואר ספליט
      this.check_if_grower_have_minos_shivok =
        await this.QaServiceService.qa_check_if_grower_have_minos_shivok(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(this.check_if_grower_have_minos_shivok);
      if (this.check_if_grower_have_minos_shivok.length === 0) {
        this.grower_with_minos_in_split = 1;
      } else {
        this.grower_with_minos_in_split = 2;
        var arr: any[];
        this.main_arr = [];
        for (let obj of this.check_if_grower_have_minos_shivok) {
          arr = await this.megadelSearchService.get_grower_all_det(
            this.chosenMonthControl.value,
            this.chosenYearControl.value,
            first_day_of_the_month_full_year,
            last_day_of_the_month_full_year,
            obj.lull2000_code,
            this.chosenShlohaControl.value
          );
          this.main_arr = [...this.main_arr, ...arr];
        }
        this.check_if_grower_have_minos_shivok = this.main_arr;
      }

      //   בודק האם יש למגדל שיווק אך אין לו חידוש
      this.check_if_grower_have_shivok_and_not_hidosh =
        await this.QaServiceService.qa_check_if_grower_have_shivok_and_not_hidosh(
          first_day_of_the_month_full_year,
          last_day_of_the_month_full_year
        );
      console.log(this.check_if_grower_have_shivok_and_not_hidosh);
      if (this.check_if_grower_have_shivok_and_not_hidosh.length === 0) {
        this.check_hidosh_all_growers_qa = 1;
      } else {
        this.check_hidosh_all_growers_qa = 2;
        var arr: any[] = [];
        this.main_arr = [];
        for (let obj of this.check_if_grower_have_shivok_and_not_hidosh) {
          arr = await this.megadelSearchService.get_grower_all_det(
            this.chosenMonthControl.value,
            this.chosenYearControl.value,
            first_day_of_the_month_full_year,
            last_day_of_the_month_full_year,
            obj.lull2000_code,
            this.chosenShlohaControl.value
          );
          this.main_arr = [...this.main_arr, ...arr];
        }
        this.check_if_grower_have_shivok_and_not_hidosh = this.main_arr;
      }
    }

    if (
      this.if_all_grower_from_packege_in_grower_split.length === 0 &&
      this.if_all_certificate_is_in_transfer_status_id_3.length === 0 &&
      this.check_if_there_is_certificate_from_packege_that_sum_0.length === 0 &&
      this.check_if_all_grower_after_split_have_micsa.length === 0 &&
      this.check_if_grower_have_minos_shivok.length === 0 &&
      this.check_if_grower_have_shivok_and_not_hidosh.length === 0
    ) {
      this.isButtonDisabled = false;
    } else {
      const check: any = await this.open_confirm_msg_Dialog(
        'חלק מהבקרות לא עברו בהצלחה, האם ברצונך להמשיך בתהליך הסגירה?'
      );

      console.log(check);
      if (check) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    }
  }

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

  //   מנתב לכתובות
  navto(str: any) {
    let returnUrl = str;
    this.router.navigate([returnUrl]);
  }

  //   בשינוי שנה
  async change_year() {
    this.isButtonDisabled = true;
    this.split_all_grower_qa = 3;
    this.status_all_grower_qa = 3;
    this.shivok_count_0 = 3;
    this.micsot_all_growers_qa = 3;
    this.grower_with_minos_in_split = 3;
    this.check_hidosh_all_growers_qa = 3;

    // שיחרור כפתור מחיקת חודש
    var check_if_month_exist_in_close_month =
      await this.megadelSearchService.check_if_month_exist_in_close_month(
        this.chosenShlohaControl.value,
        this.paymentControl.value,
        this.chosenYearControl.value,
        this.chosenMonthControl.value
      );
    console.log(check_if_month_exist_in_close_month);
    if (check_if_month_exist_in_close_month[0].Result) {
      this.isButton_delete_Disabled = false;
    } else {
      this.isButton_delete_Disabled = true;
    }

    // הבאת היסטוריית פעולות
    this.history_close_month =
      await this.megadelSearchService.ge_all_from_close_month_by_msvk_new_history_by_tzrt_pay_year_month(
        this.chosenShlohaControl.value,
        this.paymentControl.value,
        this.chosenYearControl.value,
        this.chosenMonthControl.value
      );
  }
  //   בשינוי חודש
  async change_month() {
    this.isButtonDisabled = true;
    this.isButton_delete_Disabled = true;
    this.split_all_grower_qa = 3;
    this.status_all_grower_qa = 3;
    this.shivok_count_0 = 3;
    this.micsot_all_growers_qa = 3;
    this.grower_with_minos_in_split = 3;
    this.check_hidosh_all_growers_qa = 3;

    // שיחרור כפתור המחיקת חודש
    var check_if_month_exist_in_close_month =
      await this.megadelSearchService.check_if_month_exist_in_close_month(
        this.chosenShlohaControl.value,
        this.paymentControl.value,
        this.chosenYearControl.value,
        this.chosenMonthControl.value
      );
    console.log(check_if_month_exist_in_close_month);
    if (check_if_month_exist_in_close_month[0].Result) {
      this.isButton_delete_Disabled = false;
    } else {
      this.isButton_delete_Disabled = true;
    }

    // הבאת פרטי היסטוריית הפעולות
    this.history_close_month =
      await this.megadelSearchService.ge_all_from_close_month_by_msvk_new_history_by_tzrt_pay_year_month(
        this.chosenShlohaControl.value,
        this.paymentControl.value,
        this.chosenYearControl.value,
        this.chosenMonthControl.value
      );
  }

  //   מביאה את סוגי התשלום בבחירת שלוחה
  async change_shloha() {
    this.isButton_delete_Disabled = true;
    this.isButtonDisabled = true;
    this.split_all_grower_qa = 3;
    this.status_all_grower_qa = 3;
    this.shivok_count_0 = 3;
    this.micsot_all_growers_qa = 3;
    this.grower_with_minos_in_split = 3;
    this.check_hidosh_all_growers_qa = 3;
    this.the_change_shloha = this.chosenShlohaControl.value;

    console.log(this.chosenYearControl.value);
    console.log(this.chosenMonthControl.value);
    console.log(this.chosenShlohaControl.value);
    console.log(this.paymentControl.value);

    var check_if_month_exist_in_close_month =
      await this.megadelSearchService.check_if_month_exist_in_close_month(
        this.chosenShlohaControl.value,
        this.paymentControl.value,
        this.chosenYearControl.value,
        this.chosenMonthControl.value
      );
    console.log(check_if_month_exist_in_close_month);
    if (check_if_month_exist_in_close_month[0].Result) {
      this.isButton_delete_Disabled = false;
    } else {
      this.isButton_delete_Disabled = true;
    }

    if (this.the_change_shloha === '30') {
      this.bakara_shloha = true;

      this.history_close_month =
        await this.megadelSearchService.ge_all_from_close_month_by_msvk_new_history_by_tzrt_pay_year_month(
          this.chosenShlohaControl.value,
          this.paymentControl.value,
          this.chosenYearControl.value,
          this.chosenMonthControl.value
        );

      console.log(this.history_close_month);
    }
    if (this.the_change_shloha === '30' || this.the_change_shloha === '10') {
      if (this.the_change_shloha === '10') {
        this.bakara_shloha = false;
      }
      this.type_of_payment = [
        { name: 'היטלים', code: '02' },
        { name: 'סובסידיה', code: '01' },
      ];
    } else {
      this.type_of_payment = [{ name: 'היטלים', code: '02' }];
      this.bakara_shloha = false;
    }
    console.log('test');
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

  // אקסל בדיקת מכסות
  create_ecxel_testing_micsot_megadlim(data_to_excel): void {
    console.log(data_to_excel);

    if (this.main_arr.length === 0) {
      const fieldTitleMapping = {
        yz_first_name: 'שם פרטי מגדל',
        yz_Id: 'קוד מגדל',
        yz_last_name: 'שם משפחה מגדל',
        yz_shem: 'שם אתר',
        yz_status: 'סטטוס',
        yz_sug: ' סוג מגדל',
        yz_yeshuv: 'שם ישוב מגדל',
        yz_yzrn: 'מס מגדל',
        yz_zehut: 'ת.זהות',
      };
      this.transformedData = data_to_excel.map((item) => {
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
        'בקרה - בדיקת מכסות מגדלים'
      );
    } else {
      //   קביעת שמות בעברית לתצוגה באקסל

      const fieldTitleMapping = {
        flock_close_date: 'תאריך סגירת להקה',
        flock_status_id: 'סטטוס להקה',
        flock_hatch_date: 'תאריך בקיעה',
        flock_week_age: 'גיל בשבועות',
        flock_month_age: 'גיל בחודשים',
        month_shivok: 'חודש שיווק',
        year_shivok: 'שנת שיווק',
        lull2000_code: 'מס מגדל',
        cd_gidul: 'קוד גידול',
        Internal_Marketing: 'העברות פנימיות',
        grower_name: 'שם מגדל',
        settlement_name: 'שם ישוב',
        is_main_grower: 'סוג מגדל',
        farm_code: 'מס אתר',
        flock_id: 'קוד אתר',
        first_hiclos: 'איכלוס ראשוני',
        marketing_sum: 'שיווק',
        main_grower: 'מגדל ראשי',
        micsa_kvoha: 'מיכסה קבועה',
        marketing_main_grower: 'שיווק מגדל ראשי',
      };
      this.transformedData = data_to_excel.map((item) => {
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
        'בקרה - בדיקת מכסות מגדלים'
      );
    }
  }

  // אקסל פיצול כלל המגדלים
  create_ecxel_testing_if_all_grower_from_packege_in_grower_split(
    data_to_excel
  ): void {
    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      flock_close_date: 'תאריך סגירת להקה',
      flock_status_id: 'סטטוס להקה',
      flock_hatch_date: 'תאריך בקיעה',
      flock_week_age: 'גיל בשבועות',
      flock_month_age: 'גיל בחודשים',
      month_shivok: 'חודש שיווק',
      year_shivok: 'שנת שיווק',
      lull2000_code: 'מס מגדל',
      cd_gidul: 'קוד גידול',
      Internal_Marketing: 'העברות פנימיות',
      grower_name: 'שם מגדל',
      settlement_name: 'שם ישוב',
      is_main_grower: 'סוג מגדל',
      farm_code: 'מס אתר',
      flock_id: 'קוד אתר',
      first_hiclos: 'איכלוס ראשוני',
      marketing_sum: 'שיווק',
      main_grower: 'מגדל ראשי',
      micsa_kvoha: 'מיכסה קבועה',
      marketing_main_grower: 'שיווק מגדל ראשי',
    };

    this.transformedData = data_to_excel.map((item) => {
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
      'בקרה -  בדיקת פיצול לכלל המגדלים'
    );
  }
  main_excel_report_btn(data_to_excel) {
    if (this.selected_option_statusControl_excel.value === 'Advanced') {
      for (let obj of data_to_excel) {
        let existingDate = obj.flock_hatch_date.split('T')[0];
        let existingDate2 = obj.the_min3.split('T')[0];
        obj.flock_hatch_date = existingDate;
        obj.the_min3 = existingDate2;
      }
      this.Excel_button_reports_advanced(data_to_excel);
    } else {
      if (this.selected_option_statusControl_excel.value === 'merokaz') {
        this.Excel_button_reports_merokaz(data_to_excel);
      } else {
        if (this.selected_option_statusControl_excel.value === 'meforat') {
          this.Excel_button_reports_meforat(data_to_excel);
        }
      }
    }
  }
  // אקסל דוחות מרוכז
  Excel_button_reports_merokaz(data_to_excel): void {
    console.log(data_to_excel);
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

    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      shana: 'שנה',
      month: 'חודש',
      tzrt: 'תוצרת',
      payment_type: 'סוג תשלום',
      msvk_code: 'קוד משווק',
      msvk_name: 'שם משווק',
      micsa_kvoha: 'מיכסה קבועה',
      kamut_tashlom: 'כמות לתשלום',
      mhir: 'מחיר',
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
      'דוחות- מרוכז'
    );
  }

  //   אקסל דוחות מפורט
  Excel_button_reports_meforat(data_to_excel): void {
    console.log(data_to_excel);
    const selectedFieldsArray = data_to_excel.map((item) => {
      return {
        mh_Shana: item.mh_Shana,
        the_month: item.the_month,
        mh_Tzrt: item.mh_Tzrt,
        mh_Sug_Mhir: item.mh_Sug_Mhir,
        lull2000_code: item.lull2000_code,
        grower_name: item.grower_name,
        micsa_kvoha: item.micsa_kvoha,
        settlement_id: item.settlement_id,
        settlement_name: item.settlement_name,
        msvk_code: item.msvk_code,
        msvk_name: item.msvk_name,
        marketing_sum: item.marketing_sum,
        mh_Mhir: item.mh_Mhir,
        amount: item.amount,
      };
    });

    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      mh_Shana: 'שנה',
      the_month: 'חודש',
      mh_Tzrt: 'תוצרת',
      mh_Sug_Mhir: 'סוג תשלום',
      lull2000_code: 'מס מגדל',
      grower_name: 'שם מגדל',
      micsa_kvoha: 'מיכסה קבועה',
      settlement_id: 'קוד ישוב',
      settlement_name: 'שם ישוב',
      msvk_code: 'קוד משווק',
      msvk_name: 'שם משווק',
      marketing_sum: 'כמות לתשלום',
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
      'דוחות- מפורט'
    );
  }

  //   אקסל דוחות מתקדם
  Excel_button_reports_advanced(data_to_excel): void {
    const selectedFieldsArray = data_to_excel.map((item) => {
      return {
        mh_Shana: item.mh_Shana,
        the_month: item.the_month,
        mh_Tzrt: item.mh_Tzrt,
        mh_Sug_Mhir: item.mh_Sug_Mhir,
        lull2000_code: item.lull2000_code,
        grower_name: item.grower_name,
        yz_zehut: item.yz_zehut,
        is_main_grower: item.is_main_grower,
        micsa_kvoha: item.micsa_kvoha,
        farm_code: item.farm_code,
        farm_name: item.farm_name,
        flock_id: item.flock_id,
        cd_gidul: item.cd_gidul,
        percent_: item.percent_,
        settlement_id: item.settlement_id,
        settlement_name: item.settlement_name,
        msvk_code: item.msvk_code,
        msvk_name: item.msvk_name,
        marketing_sum: item.marketing_sum,
        mh_Mhir: item.mh_Mhir,
        amount: item.amount,

        flock_month_age: item.flock_month_age,
        flock_hatch_date: item.flock_hatch_date,
        settlement_name_farm: item.settlement_name_farm,
        total_hidosh: item.total_hidosh,
        the_min3: item.the_min3,
      };
    });

    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      mh_Shana: 'שנה',
      the_month: 'חודש',
      mh_Tzrt: 'תוצרת',
      mh_Sug_Mhir: 'סוג תשלום',
      lull2000_code: 'מס מגדל',
      grower_name: 'שם מגדל',
      yz_zehut: 'ת.ז מגדל',
      is_main_grower: 'סוג מגדל',
      micsa_kvoha: 'מיכסה קבועה',
      farm_code: 'קוד אתר',
      farm_name: 'שם אתר',
      flock_id: 'מס להקה',
      cd_gidul: 'קוד גידול',
      percent_: 'אחוז שותפות',
      settlement_id: 'קוד ישוב',
      settlement_name: 'שם ישוב',
      msvk_code: 'קוד משווק',
      msvk_name: 'שם משווק',
      marketing_sum: 'כמות לתשלום',
      mh_Mhir: 'מחיר',
      amount: 'סכום לתשלום',
      flock_month_age: 'גיל להקה בחודשים',
      flock_hatch_date: 'תאריך בקיעה',
      settlement_name_farm: 'שם ישוב גידול',
      total_hidosh: 'חידוש',
      the_min3: 'תאריך איכלוס',
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
      'דוחות- מתקדם'
    );
  }

  create_ecxel_testing_if_there_is_certificate_from_packege_that_sum_0(
    data_to_excel
  ): void {
    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      flock_close_date: 'תאריך סגירת להקה',
      flock_status_id: 'סטטוס להקה',
      flock_hatch_date: 'תאריך בקיעה',
      flock_week_age: 'גיל בשבועות',
      flock_month_age: 'גיל בחודשים',
      month_shivok: 'חודש שיווק',
      year_shivok: 'שנת שיווק',
      lull2000_code: 'מס מגדל',
      cd_gidul: 'קוד גידול',
      Internal_Marketing: 'העברות פנימיות',
      grower_name: 'שם מגדל',
      settlement_name: 'שם ישוב',
      is_main_grower: 'סוג מגדל',
      farm_code: 'מס אתר',
      flock_id: 'קוד אתר',
      first_hiclos: 'איכלוס ראשוני',
      marketing_sum: 'שיווק',
      main_grower: 'מגדל ראשי',
      micsa_kvoha: 'מיכסה קבועה',
      marketing_main_grower: 'שיווק מגדל ראשי',
    };

    this.transformedData = data_to_excel.map((item) => {
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
      'בקרה -  בדיקת כמות 0'
    );
  }

  // אקסל  שיווק מגדל במינוס
  create_ecxel_testing_if_grower_have_minos_shivok(data_to_excel): void {
    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      flock_close_date: 'תאריך סגירת להקה',
      flock_status_id: 'סטטוס להקה',
      flock_hatch_date: 'תאריך בקיעה',
      flock_week_age: 'גיל בשבועות',
      flock_month_age: 'גיל בחודשים',
      month_shivok: 'חודש שיווק',
      year_shivok: 'שנת שיווק',
      lull2000_code: 'מס מגדל',
      cd_gidul: 'קוד גידול',
      Internal_Marketing: 'העברות פנימיות',
      grower_name: 'שם מגדל',
      settlement_name: 'שם ישוב',
      is_main_grower: 'סוג מגדל',
      farm_code: 'מס אתר',
      flock_id: 'קוד אתר',
      first_hiclos: 'איכלוס ראשוני',
      marketing_sum: 'שיווק',
      main_grower: 'מגדל ראשי',
      micsa_kvoha: 'מיכסה קבועה',
      marketing_main_grower: 'שיווק מגדל ראשי',
    };

    this.transformedData = data_to_excel.map((item) => {
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
      'בקרה -  שיווק מגדל במינוס'
    );
  }

  //   אקסל בדיקת חידושים למגדלים
  create_ecxel_testing_if_grower_have_shivok_and_not_hidosh(
    data_to_excel
  ): void {
    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      flock_close_date: 'תאריך סגירת להקה',
      flock_status_id: 'סטטוס להקה',
      flock_hatch_date: 'תאריך בקיעה',
      flock_week_age: 'גיל בשבועות',
      flock_month_age: 'גיל בחודשים',
      month_shivok: 'חודש שיווק',
      year_shivok: 'שנת שיווק',
      lull2000_code: 'מס מגדל',
      cd_gidul: 'קוד גידול',
      Internal_Marketing: 'העברות פנימיות',
      grower_name: 'שם מגדל',
      settlement_name: 'שם ישוב',
      is_main_grower: 'סוג מגדל',
      farm_code: 'מס אתר',
      flock_id: 'קוד אתר',
      first_hiclos: 'איכלוס ראשוני',
      marketing_sum: 'שיווק',
      main_grower: 'מגדל ראשי',
      micsa_kvoha: 'מיכסה קבועה',
      marketing_main_grower: 'שיווק מגדל ראשי',
    };

    this.transformedData = data_to_excel.map((item) => {
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
      'בקרה -  שיווק מגדל במינוס'
    );
  }

  // אקסל בדיקת סטטוס תעודה
  create_ecxel_testing_if_all_certificate_is_in_transfer_status_id_3(
    data_to_excel
  ): void {
    //   קביעת שמות בעברית לתצוגה באקסל
    const fieldTitleMapping = {
      certificate_id: 'מס תעודה',
      flock_id: 'מס להקה',
      grower_name: 'שם מגדל',
      lull2000_code: 'מס מגדל',
      farm_code: 'קוד אתר',
      msvk_name: 'שם משווק',
      msvk_code: 'קוד משווק',
      transfer_status_id: 'סטטוס העברה',
    };

    this.transformedData = data_to_excel.map((item) => {
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
      'בקרה -  בדיקת סטטוס תעודה'
    );
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
    const check: any = await this.open_confirm_msg_Dialog(
      'האם אתה בטוח שברצונך למחוק חודש?'
    );

    console.log(check);
    if (check) {
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
    } else {
    }
  }

  changeLoadingText_func(): void {
    this.textChangeInterval = setInterval(() => {
      this.changeLoadingText();
    }, 2000);
  }

  private changeLoadingText(): void {
    const texts = [
      'בדיקת פיצול לכלל המגדלים...',
      'בדיקת סטטוס כלל התעודות...',
      'בדיקת שיווק בכמות 0...',
      'בדיקת מכסות מגדלים...',
      'בדיקת חידוש למגדלים...',
      'בדיקת חידוש למגדלים...',
    ];

    // Initialize or increment the counter
    if (
      this.loadingTextCounter === undefined ||
      this.loadingTextCounter === texts.length - 1
    ) {
      this.loadingTextCounter = 0;
    } else {
      this.loadingTextCounter++;
    }

    // Set the loading text based on the counter
    this.loadingText = texts[this.loadingTextCounter];
  }

  async add() {
    this.isLoading = true;
    this.changeLoadingText_func();
    console.log(this.chosenYearControl.value);
    console.log(this.chosenMonthControl.value);
    console.log(this.chosenShlohaControl.value);
    console.log(this.paymentControl.value);
    console.log('d');

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

    this.isLoading = false;
  }

  test() {
    console.log('test');
  }
  async create_excel() {
    this.isLoading = true;
    this.click_on_search = true;
    this.search_click = true;
    this.isLoading = true;

    if (this.chosenShlohaControl_excel.value === undefined) {
      this.chosenShlohaControl_excel.setValue('');
    }
    if (this.usernameControl_test.value === undefined) {
      this.usernameControl_test.setValue('');
    }
    if (this.paymentControl_excel.value === undefined) {
      this.paymentControl_excel.setValue('');
    }
    if (this.siteNumControl_test.value === undefined) {
      this.siteNumControl_test.setValue('');
    }
    if (this.gidulHotzNumControl_test.value === undefined) {
      this.gidulHotzNumControl_test.setValue('');
    }
    if (this.msvk_name_Control_test.value === undefined) {
      this.msvk_name_Control_test.setValue('');
    }
    if (this.msvk_code_Control_test.value === undefined) {
      this.msvk_code_Control_test.setValue('');
    }
    if (this.flock_id_Control_test.value === undefined) {
      this.flock_id_Control_test.setValue('');
    }
    if (this.farm_sattelment_Control_test.value === undefined) {
      this.farm_sattelment_Control_test.setValue('');
    }

    if (this.growerNumControl_test.value === undefined) {
      this.growerNumControl_test.setValue('');
    }
    if (this.grower_zeut_testControl_test.value === undefined) {
      this.grower_zeut_testControl_test.setValue('');
    }
    if (this.yeshuvControl_test.value === undefined) {
      this.yeshuvControl_test.setValue('');
    }

    console.log(this.chosenYearControl_excel.value);
    console.log(this.to_chosenYearControl_excel.value);
    console.log(this.chosenMonthControl_excel.value);
    console.log(this.to_chosenMonthControl_excel.value);
    console.log(this.chosenShlohaControl_excel.value);
    console.log(this.usernameControl_test.value);
    console.log(this.paymentControl_excel.value);
    console.log(this.selected_option_statusControl_excel.value);
    console.log(this.siteNumControl_test.value);
    console.log(this.gidulHotzNumControl_test.value);
    console.log(this.msvk_name_Control_test.value);
    console.log(this.growerNumControl_test.value);
    console.log(this.grower_zeut_testControl_test.value);
    console.log(this.yeshuvControl_test.value);
    console.log(this.flock_id_Control_test.value);
    console.log(this.farm_sattelment_Control_test.value);

    console.log('d');

    if (this.selected_option_statusControl_excel.value === 'Advanced') {
      this.total_count_marketing_sum = 0;

      this.data =
        await this.megadelSearchService.get_data_growers_from_close_month(
          this.chosenYearControl_excel.value,
          this.to_chosenYearControl_excel.value,
          this.chosenMonthControl_excel.value,
          this.to_chosenMonthControl_excel.value,
          this.chosenShlohaControl_excel.value,
          this.usernameControl_test.value,
          this.paymentControl_excel.value,
          this.siteNumControl_test.value,
          this.gidulHotzNumControl_test.value,
          this.msvk_name_Control_test.value,
          this.msvk_code_Control_test.value,
          this.growerNumControl_test.value,
          this.grower_zeut_testControl_test.value,
          this.yeshuvControl_test.value,
          this.flock_id_Control_test.value,
          this.farm_sattelment_Control_test.value
        );

      console.log(this.data);
      this.total_count_marketing_sum = this.data.reduce(
        (sum, obj) => sum + obj.marketing_sum,
        0
      );
      this.isLoading = false;
    } else {
      if (this.selected_option_statusControl_excel.value === 'merokaz') {
        this.total_count_marketing_sum = 0;
        this.data =
          await this.megadelSearchService.get_data_from_close_month_by_msvk_merokaz(
            this.chosenYearControl_excel.value,
            this.to_chosenYearControl_excel.value,
            this.chosenMonthControl_excel.value,
            this.to_chosenMonthControl_excel.value
          );

        console.log(this.data);
        this.total_count_marketing_sum = this.data.reduce(
          (sum, obj) => sum + obj.kamut_tashlom,
          0
        );
        this.isLoading = false;
      } else {
        if (this.selected_option_statusControl_excel.value === 'meforat') {
          this.total_count_marketing_sum = 0;
          this.data =
            await this.megadelSearchService.get_data_from_close_month_by_grower_meforat(
              this.chosenYearControl_excel.value,
              this.to_chosenYearControl_excel.value,
              this.chosenMonthControl_excel.value,
              this.to_chosenMonthControl_excel.value
            );

          console.log(this.data);

          this.total_count_marketing_sum = this.data.reduce(
            (sum, obj) => sum + obj.marketing_sum,
            0
          );

          this.isLoading = false;
        } else {
          this.total_count_marketing_sum = 0;
          this.data = [];
          this.isLoading = false;
        }
      }
    }

    const lastDay = this.getLastDayOfMonth(
      Number(this.chosenMonthControl_excel.value)
    );

    const lastDay_to = this.getLastDayOfMonth(
      Number(this.to_chosenMonthControl_excel.value)
    );

    var full_date = `${this.chosenYearControl_excel.value}${this.chosenMonthControl_excel.value}${lastDay}`;
    console.log(full_date);

    var full_date_to = `${this.to_chosenYearControl_excel.value}${this.to_chosenMonthControl_excel.value}${lastDay_to}`;
    console.log(full_date_to);

    this.isLoading = false;
  }

  Advanced_Search() {
    this.click_on_search = false;
    this.Advanced_Search_varible = true;
  }

  merokaz_radio_click() {
    this.click_on_search = false;
    this.Advanced_Search_varible = false;
  }

  meforat_radio_click() {
    this.click_on_search = false;
    this.Advanced_Search_varible = false;
  }

  open_confirm_msg_Dialog(msg: any): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'open_confirm_msg_Dialog';
      dialogConfig.data = msg;
      const dialogRef = this.dialog.open(ConfirmMsgComponent, dialogConfig);

      dialogRef.afterClosed().subscribe((result) => {
        if (result === true) {
          console.log('User clicked אישור');
          resolve(true);
        } else {
          console.log('User clicked ביטול');
          resolve(false);
        }
      });
    });
  }

  openSuccessDialog(msg: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openSuccessDialog';
    dialogConfig.data = msg;
    const dialogRef = this.dialog.open(SuccessDialogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
    this.router.navigate(['/dashboard/MidPageComponent']);
  }

  openSuccessDialog_delete(msg: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openSuccessDialogDelete';
    dialogConfig.data = msg;
    const dialogRef = this.dialog.open(SuccessDialogComponent, dialogConfig);
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
    this.router.navigate(['/dashboard/MidPageComponent']);
  }

  getLastDayOfMonth(month: number): number {
    const date = new Date(); // Get the current date
    date.setMonth(month); // Set the month to the one you want
    date.setDate(0); // Set the day to 0, which refers to the last day of the previous month

    return date.getDate();
  }
}
6;
