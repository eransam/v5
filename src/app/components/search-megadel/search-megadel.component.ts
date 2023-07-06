import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import {
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { TableApiService } from 'src/app/_services/table-api.service';
import { FormBuilder } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReportService } from '../../services/reports.service';
import { MegadelSearchService } from '../../services/MegadelSearch.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { TableexcelService } from '../../../../services/tableexcel.service';
import { NumberFormatPipe } from '../../content/dashboard/pipes/number-format.pipe/number-format.pipe';

import { TableexcelService } from '../../services/tableexcel.service';
import * as XLSX from 'xlsx';

import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify.service';
const { jsPDF } = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-search-megadel',
  templateUrl: './search-megadel.component.html',
  styleUrls: ['./search-megadel.component.scss'],
})
export class SearchMegadelComponent implements OnInit {
  purchases: any;
  AllTotalAmountByYearAndMonth: any = '';
  TotalAmountDay: any = '';
  TotalAmountMonth: any = '';
  TotalAmountYear: any = '';
  totalAmountTemplate: any = '';
  checkDecimal: any = '';
  chosenYear = 2023;
  @Output()
  public addRep = new EventEmitter<any>();
  mihsot3 = [];
  selectedDepartment: any;
  selectedMonth: string;
  selectedYear: string;
  username: string;
  numName: any;

  site: string;
  settlement: string;
  extension: string;
  theDetails: any[];
  gidolHotz: string;

  // the input box
  users: any[] = [];
  users2: any[];
  mihsot = [];
  settlement1: any[] = [];
  settlement2: any[];
  site1: any[] = [];
  site2: any[];

  extension1: any[] = [];
  extension2: any[];

  detailsFromformcheckbox: any = '';
  detailsFromformMonth: any = '';
  detailsFromformYear: any = '';

  //מגדירים פילטר חיפוש לכל שדה אינפוט
  filteredUsers: Observable<string[]>;
  filteredsite: Observable<string[]>;
  filteredsettlement: Observable<string[]>;
  filteredextension: Observable<string[]>;
  filterednumName: Observable<string[]>;

  // מגדירים את הפורם אינפוטים כדי שדרכם יועבר הערך המוזן באינפוט

  selectedDepartmentControl = new FormControl();
  monthInput: FormControl;
  usernameInput: FormControl;
  settlementInput: FormControl;
  gidolHotzInput: FormControl;
  siteInput: FormControl;
  extensionInput: FormControl;
  yearInput: FormControl;

  //   FormGroup:
  DetailsForm: FormGroup;

  //   the checkBox search:
  checkBoxActive = false;
  checkBoxNotActive = false;
  checkBoxAll = false;

  //   form varible:
  selectedCheckbox = '';
  numNameControl = new FormControl();
  usernameControl = new FormControl();
  siteControl = new FormControl();
  settlementControl = new FormControl();
  extensionControl = new FormControl();

  gidolHotzControl = new FormControl();
  SitetNameTomaaravi: any;

  @BlockUI('baseStyle') blockUIBaseStyle: NgBlockUI;
  @BlockUI('noStylingClasses') blockUINoStylingClasses: NgBlockUI;

  public config: PerfectScrollbarConfigInterface = { suppressScrollY: true };
  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true })
  directiveRef?: PerfectScrollbarDirective;

  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true,
  };
  temp = [];

  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;
  allInactive: any = false;
  constructor(
    private tableexcelService: TableexcelService,
    private tableApiservice: TableApiService,
    private formBuilder: FormBuilder,
    private megadelSearchService: MegadelSearchService,
    public router: Router,
    private notify: NotifyService
  ) {
    //ערך חדש וכל שינוי שמהשתמש הזין באינפוט this.filteredUsers כאן אנו מגדירים למשתנה
    this.filteredUsers = this.usernameControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterUser(value))
    );

    this.filterednumName = this.numNameControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterUser(value))
    );

    this.filteredsite = this.siteControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterSite(value))
    );

    this.filteredsettlement = this.settlementControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterSettlement(value))
    );

    this.filteredextension = this.extensionControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterExtension(value))
    );
  }

  updateValue() {
    if (this.checkBoxActive) {
      this.selectedCheckbox = 'active';
    } else if (this.checkBoxNotActive) {
      this.selectedCheckbox = 'notActive';
    } else if (this.checkBoxAll) {
      this.selectedCheckbox = 'all';
    } else {
      this.selectedCheckbox = '';
    }
  }

  checkboxClicked(checkboxValue: string) {
    if (checkboxValue === this.selectedCheckbox) {
      // If the clicked checkbox is already selected, unselect it
      this.selectedCheckbox = '';
    } else {
      // Otherwise, select the clicked checkbox and unselect the other checkboxes
      this.selectedCheckbox = checkboxValue;
      this.checkBoxActive = false;
      this.checkBoxNotActive = false;
      this.checkBoxAll = false;
    }
  }

  private _filterUser(value: string): string[] {
    const filterValue1 = value.toLowerCase();
    return this.users.filter((user) =>
      user.toLowerCase().includes(filterValue1)
    );
  }

  private _filterSite(value: string): string[] {
    const filterValue2 = value.toLowerCase();
    return this.site1.filter((site) =>
      site.toLowerCase().includes(filterValue2)
    );
  }
  private _filterSettlement(value: string): string[] {
    const filterValue3 = value.toLowerCase();
    console.log('filterValue3: ', filterValue3);
    console.log('this.settlement1/: ', this.settlement1);

    return this.settlement1.filter((settlement) =>
      settlement.toLowerCase().includes(filterValue3)
    );
  }
  private _filterExtension(value: string): string[] {
    const filterValue4 = value.toLowerCase();
    return this.extension1.filter((extension) =>
      extension.toLowerCase().includes(filterValue4)
    );
  }

  public breadcrumb: any;
  data: any;
  rows: any = [];
  stylerows: any;
  baserows: any;
  temp2 = this.rows;
  @BlockUI('projectInfo') blockUIProjectInfo: NgBlockUI;
  @BlockUI('userProfile') blockUIUserProfile: NgBlockUI;

  interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
  budget = [
    'less than 5000$',
    '5000$ - 10000$',
    '10000$ - 20000$',
    'more than 20000$',
  ];

  projectInfo: FormGroup;
  userProfile: FormGroup;
  timeSheet: FormGroup;
  eventRegistration: FormGroup;

  async ngOnInit() {
    //FormControl מגדירים את המשתנים כך שיהיו מסוג
    (this.monthInput = new FormControl('', Validators.required)),
      (this.yearInput = new FormControl('', Validators.required)),
      (this.usernameInput = new FormControl());
    this.siteInput = new FormControl();
    this.settlementInput = new FormControl();
    this.extensionInput = new FormControl();
    this.gidolHotzInput = new FormControl();
    this.DetailsForm = new FormGroup({
      nameBox: this.monthInput,
      usernameBox: this.usernameInput,
      yaerBox: this.yearInput,
    });

    this.extension2 = await this.megadelSearchService.GetAllShlohaNAME();
    console.log('this.extension2: ', this.extension2);

    for (let i = 0; i < this.extension2.length; i++) {
      this.extension1.push(`${this.extension2[i].name}`);
    }
    let mergedArray: any[] = this.mergeIdenticalValues(this.extension1);
    console.log('mergedArray: ', mergedArray);
    this.extension1 = mergedArray;

    console.log('this.extension1: ', this.extension1);

    this.users2 =
      await this.megadelSearchService.getAllMegadelDetailsWantedFunc();
    console.log('this.users2: ', this.users2);

    for (let i = 0; i < this.users2.length; i++) {
      this.users.push(
        `${this.users2[i].yz_first_name}-${this.users2[i].yz_last_name}-${this.users2[i].yz_zehut}-${this.users2[i].yz_shem}-${this.users2[i].yz_yzrn}-${this.users2[i].yz_is_activ}`
      );
    }

    this.site2 = await this.megadelSearchService.getAllNameSiteIdstatus();
    console.log('this.site2: ', this.site2);

    for (let i = 0; i < this.site2.length; i++) {
      this.site1.push(
        `${this.site2[i].name}-${this.site2[i].code}-${this.site2[i].farm_status_id}`
      );
      console.log();
    }

    this.settlement2 =
      await this.megadelSearchService.getAllYeshovimAndEzurim();
    console.log('this.settlement2: ', this.settlement2);

    for (let i = 0; i < this.settlement2.length; i++) {
      this.settlement1.push(
        `${this.settlement2[i].yv_Shem}-${this.settlement2[i].yv_Ezor}`
      );
    }

    console.log('settlement1: ', this.settlement1);

    this.breadcrumb = {
      mainlabel: 'Row Reparator Forms',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/dashboard/sales',
        },
        {
          name: 'Form Layouts',
          isLink: true,
          link: '#',
        },
        {
          name: 'Row Reparator Forms',
          isLink: true,
        },
      ],
    };

    this.projectInfo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      interestedIn: ['', Validators.required],
      budget: ['', Validators.required],
      selectFile: ['', Validators.required],
      aboutProject: ['', Validators.required],
    });

    this.userProfile = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      nickName: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      phone: ['', Validators.required],
      bio: ['', Validators.required],
    });

    this.timeSheet = this.formBuilder.group({
      employeeName: ['', Validators.required],
      projectname: ['', Validators.required],
      date: ['', Validators.required],
      ratePerHour: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      notes: ['', Validators.required],
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', Validators.required],
      title: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      customer1: ['', Validators.required],
    });

    this.breadcrumb = {
      mainlabel: 'Styling DataTable',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/dashboard/sales',
        },
        {
          name: 'DataTables',
          isLink: true,
          link: '#',
        },
        {
          name: 'Styling DataTable',
          isLink: false,
        },
      ],
    };
    this.tableApiservice.getStylingData().subscribe((Response) => {
      this.data = Response;
      this.getTabledata();
    });

    console.log('filteredextension: ', this.filteredextension);
  }

  checkBox1: boolean = false;
  checkBox2: boolean = false;
  checkBox3: boolean = false;

  onCheckboxClicked(clickedCheckbox: number) {
    if (clickedCheckbox === 1) {
      this.checkBox2 = false;
      this.checkBox3 = false;
    } else if (clickedCheckbox === 2) {
      this.checkBox1 = false;
      this.checkBox3 = false;
    } else if (clickedCheckbox === 3) {
      this.checkBox1 = false;
      this.checkBox2 = false;
    }
  }

  cleanInputFild() {
    this.theDetails = [];
    this.username = '';
    this.site = '';
    this.settlement = '';
    this.numName = '';
    // this.gidolHotz = '';
    // this.extension = '';
  }

  getTabledata() {
    this.rows = this.data.rows;
    this.stylerows = this.data.stylerows;
    this.baserows = this.data.baserows;
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  updatedefaultFilter(event) {
    const val = event.target.value.toLowerCase();
    this.stylerows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.stylerows];
    // filter our data
    const temp = this.stylerows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.stylerows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getExcelData(): void {
    this.tableexcelService.exportAsExcelFile(
      this.theDetails,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }

  getPdfData() {
    const doc = new jsPDF();
    const col = [
      'מס אתר',
      'שם יצרן',
      'שם פרטי',
      'שם משפחה',
      'מספר יצרן',
      'ת.ז',
      'ישוב',
      'סוג מגדל',
    ];
    const rows = [];

    this.theDetails.forEach((element) => {
      const temp = [
        element.yz_Id,
        element.yz_shem,
        element.yz_first_name,
        element.yz_last_name,
        element.yz_yzrn,
        element.yz_zehut,
        element.yz_shem_yeshuv,
      ];
      rows.push(temp);
    });
    doc.autoTable(col, rows);
    doc.save('Test.pdf');
  }
  getPrint(printME) {
    const printContents = document.getElementById(printME).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  updatecompactFilter(event) {
    const val = event.target.value.toLowerCase();
    this.baserows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.baserows];
    // filter our data
    const temp = this.baserows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.baserows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  reloadBaseStyle() {
    this.blockUIBaseStyle.start('Loading..');

    setTimeout(() => {
      this.blockUIBaseStyle.stop();
    }, 2500);
  }

  clearInput(inputName: string): void {
    switch (inputName) {
      case 'username':
        this.username = '';
        break;
      case 'numName':
        this.numName = '';
        break;
      case 'site':
        this.site = '';
        break;
      case 'settlement':
        this.settlement = '';
        break;
      case 'gidolHotz':
        this.gidolHotz = '';
        break;

      // Add cases for other input names if needed
    }
  }

  reloadNoStylingClasses() {
    this.blockUINoStylingClasses.start('Loading..');

    setTimeout(() => {
      this.blockUINoStylingClasses.stop();
    }, 2500);
  }

  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');

    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }

  test(yz_Id: any) {
    console.log(yz_Id);
  }

  reloadUserProfile() {
    this.blockUIUserProfile.start('Loading..');

    setTimeout(() => {
      this.blockUIUserProfile.stop();
    }, 2500);
  }

  mergeIdenticalValues(arr: any[]): any[] {
    const uniqueValues = new Set(arr);
    if (uniqueValues.size === 1) {
      return [arr[0]];
    }
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  }

  selectedButton: string;

  onButtonMenuClick(button: string) {
    this.selectedButton = button;
    console.log('Selected button:', button);
  }
  getSettlementName(value: string): string {
    const parts = value.split('-');
    return parts.slice(0, -1).join('-');
  }
  isLoading = false;
  isLoading_search_megadel = false;

  extractNumber(value: string): number {
    // Split the string based on the '/'
    const parts = value.split('/');

    // Retrieve the first part which represents the number
    const numberPart = parts[0];

    // Convert the number part to a numeric value
    const number = Number(numberPart);

    // Return the extracted number
    return number;
  }

  async add() {
    this.isLoading_search_megadel = true;

    this.theDetails = [];
    this.isLoading = true; // Start loading
    let SettlementName = '%';
    let SitetName: any = ' ';
    let Username = '%';
    let numName = '%';
    let gidolHotzName = ' ';
    this.SitetNameTomaaravi = ' ';
    // טיפול בערך בתיבת השלוחה
    let extension = this.extensionControl.value;
    if (extension === undefined) {
      extension = '';
    } else {
      const resultsCodeShloha =
        await this.megadelSearchService.Get_All_Shloha_Id_By_NAME(extension);
      extension = resultsCodeShloha[0]?.id;
    }

    // טיפול בערך מספר מגדל
    if (this.numNameControl.value) {
      numName = this.numNameControl.value;
    }

    // טיפול בערך התיבה שם ישוב
    if (this.settlementControl.value) {
      SettlementName = this.settlementControl.value;
    }

    // טיפול בערך התיבה ג''ח
    if (this.gidolHotzControl.value) {
      gidolHotzName = this.gidolHotzControl.value;
    }

    // טיפול בערך התיבה מס אתר
    if (this.siteControl.value) {
      SitetName = this.siteControl.value.split('-').pop();
      this.SitetNameTomaaravi = SitetName;

      //   מוציא את האיידי של המגדל כאשר מכניסים קוד אתר
      const results88 =
        await this.megadelSearchService.get_growerId_By_code_atar(SitetName);

      console.log('results88-test: ', results88);
      if (results88[0]?.grower_id) {
        SitetName = results88[0].grower_id;
      } else {
        SitetName = 'מספר לא קיים';
      }
    }

    if (this.usernameControl.value) {
      Username = this.usernameControl.value;
    }
    if (this.SitetNameTomaaravi !== ' ') {
      console.log('in the if SitetNameTomaaravi');
      console.log('this.SitetNameTomaaravi: ', this.SitetNameTomaaravi);

      if (this.selectedCheckbox === '' || this.selectedCheckbox === 'active') {
        console.log('gidolHotzName: ', gidolHotzName);

        console.log('numName9: ', numName);
        console.log('Username9: ', Username);
        console.log('SettlementName9: ', SettlementName);
        console.log('this.SitetNameTomaaravi9: ', this.SitetNameTomaaravi);

        const resultsMaaravi =
          await this.megadelSearchService.Yzrn_Select_For_Search_Yzrn_Atar(
            0,
            numName,
            Username,
            SettlementName,
            '%',
            '%',
            '',
            2023,
            '%',
            this.SitetNameTomaaravi,
            0
          );
        console.log('resultsMaaravi: ', resultsMaaravi);

        if (resultsMaaravi.length === 0) {
          this.theDetails = resultsMaaravi;
        } else {
          console.log('resultsMaaravi: ', resultsMaaravi);

          for (let item of resultsMaaravi) {
            const results3 =
              await this.megadelSearchService.get_siteName_by_yzId(
                item.v_yzrn_id
              );

            console.log(' item444.YazRishaion: ', item.YazRishaion);
            const codes = [];
            for (let obj of results3) {
              const code = await obj.code;
              codes.push(code);
            }
            const joinedString = codes.join(', ');
            item.yz_IdReal = item.v_yzrn_id;
            item.yz_Id = joinedString;
          }

          // הוספה לפרטי האתר שדה המכיל גידול חוץ
          for (let item of resultsMaaravi) {
            let YazRishaion = item.YazRishaion;
            const extractedNumber_YazRishaion = this.extractNumber(YazRishaion);
            item.yz_Id += ' ,' + extractedNumber_YazRishaion.toString();

            const numbersString = item.yz_Id;

            // Step 1: Split the string into an array
            const numbersArray = await numbersString.split(',');

            // Step 2: Create a Set to remove duplicate values
            const uniqueNumbersSet = new Set(numbersArray);

            // Step 3: Convert the Set back to an array
            const uniqueNumbersArray = [...uniqueNumbersSet];

            // Step 4: Join the array elements back into a string
            const uniqueNumbersString = uniqueNumbersArray.join(',');
            item.yz_Id = uniqueNumbersString;

            let yz_yzrn = item.v_yzrn;
            const results2 =
              await this.megadelSearchService.Get_num_of_gidol_hotz_from_yz_yzrn(
                yz_yzrn
              );
            if (results2[0]?.pa_Counter) {
              item.pa_Counter = results2[0].pa_Counter;
            } else {
              item.pa_Counter = '';
            }
          }

          // יוצר שדה מיכסה
          resultsMaaravi.forEach(async (item444) => {
            this.mihsot3 = await this.megadelSearchService.Micsa_Select_New(
              5,
              item444?.v_yzrn,
              this.chosenYear,
              '30 - ביצי מאכל',
              88
            );
            item444.micsa = this.mihsot3[0]?.mi_kamut;
          });

          for (let item of resultsMaaravi) {
            this.mihsot3 = await this.megadelSearchService.Micsa_Select_New(
              5,
              item?.v_yzrn,
              this.chosenYear,
              '30 - ביצי מאכל',
              88
            );
            item.micsa = this.mihsot3[0]?.mi_kamut;
          }

          console.log('resultsMaaravi426: ', resultsMaaravi);

          this.theDetails = resultsMaaravi;
          localStorage.setItem('theDetails', JSON.stringify(this.theDetails));
        }
      }
    } else {
      if (this.selectedCheckbox === '' || this.selectedCheckbox === 'active') {
        console.log('gidolHotzName: ', gidolHotzName);

        console.log('numName9: ', numName);
        console.log('Username9: ', Username);
        console.log('SettlementName9: ', SettlementName);
        console.log('this.SitetNameTomaaravi9: ', this.SitetNameTomaaravi);

        const resultsMaaravi2 =
          await this.megadelSearchService.Yzrn_Select_For_Search_Yzrn(
            18,
            numName,
            Username,
            SettlementName,
            1,
            '%',
            30,
            this.chosenYear,
            '%',
            '%',
            '%',
            1,
            '%'
          );
        console.log('resultsMaaravi2: ', resultsMaaravi2);

        if (resultsMaaravi2.length === 0) {
          this.theDetails = resultsMaaravi2;
        } else {
          console.log('resultsMaaravi2: ', resultsMaaravi2);

          // הוספה לפרטי האתר שדה המכיל גידול חוץ
          for (let item of resultsMaaravi2) {
            if (item?.YazRishaion !== undefined) {
              let YazRishaion = item?.YazRishaion;
              const extractedNumber_YazRishaion =
                this.extractNumber(YazRishaion);
              item.yz_Id += ' ,' + extractedNumber_YazRishaion.toString();
            }

            let yz_yzrn = item.v_yzrn;
            const results2 =
              await this.megadelSearchService.Get_num_of_gidol_hotz_from_yz_yzrn(
                yz_yzrn
              );
            if (results2[0]?.pa_Counter) {
              item.pa_Counter = results2[0].pa_Counter;
            } else {
              item.pa_Counter = '';
            }
          }

          // יוצר שדה המכיל מספרי אתרים
          for (let item of resultsMaaravi2) {
            // const results3 =
            //   await this.megadelSearchService.get_siteName_by_yzId(
            //     item.v_yzrn_id
            //   );

            const results3 =
              await this.megadelSearchService.Tables_Select_All_Atarim_Of_Yzrn(
                50,
                '',
                '%',
                0,
                '17,18,19,20,21,22,23,25,26,27,28',
                item.v_yzrn,
                99
              );
            this.allInactive = results3.every(
              (obj) => obj.RishaionSts === 'לא פעיל'
            );
            console.log(this.allInactive);

            const codes = results3.map((obj) => obj.code);
            const joinedString = codes.join(', ');
            item.yz_IdReal = item.v_yzrn_id;
            item.yz_Id = joinedString;
            item.all_not_active = this.allInactive;
          }

          // יוצר שדה מיכסה
          for (let item of resultsMaaravi2) {
            this.mihsot3 = await this.megadelSearchService.Micsa_Select_New(
              5,
              item?.v_yzrn,
              this.chosenYear,
              '30 - ביצי מאכל',
              88
            );
            item.micsa = this.mihsot3[0]?.mi_kamut;
          }

          console.log('resultsMaaravi after micsa: ', resultsMaaravi2);

          this.theDetails = resultsMaaravi2;
          localStorage.setItem('theDetails', JSON.stringify(this.theDetails));
        }

        console.log('resultsMaaravi999: ', resultsMaaravi2);
      }
    }
    this.isLoading = false; // Stop loading
    this.isLoading_search_megadel = false;
  }
}
// #F1B80B
