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
import { MegadelSearchService } from '../../../services/MegadelSearch.service';

@Component({
  selector: 'app-popup-grower-card',
  templateUrl: './popup-grower-card.component.html',
  styleUrls: ['./popup-grower-card.component.css'],
})
export class PopupGrowerCardComponent {
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
  chosenYearControl = new FormControl();
  chosenSiteControl = new FormControl();
  isLoading_FarmDetails = false;
  isLoading_Cart = false;
  isLoading_userDet = false;

  chosenYear: any = 9999;
  years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  siteName: any[] = [];
  userDetails: any[] = [];
  chosenSite: any = 0;
  certificates_by_grewernum: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    private formBuilder: FormBuilder,
    private megadelSearchService: MegadelSearchService
  ) {
    console.log('data in constractor: ', data);
    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    this.DetailsForm = new FormGroup({});
    this.siteName = JSON.parse(localStorage.getItem('siteName'));
    this.siteName.push({ code: 'כולם' });
    this.userDetails = JSON.parse(localStorage.getItem('theDetails'));
    console.log('this.userDetails: ', this.userDetails);
  }

  onYearChange() {
    console.log('test');
  }

  async new_data_on_year_change() {
    console.log('test');

    var Yazran_Cartis_Select =
      await this.megadelSearchService.Yazran_Cartis_Select(
        2,
        this.userDetails[0].v_yzrn,
        9999,
        '',
        ''
      );
    var sortedArray = Yazran_Cartis_Select.sort((a, b) => b.yr - a.yr);
    var newArray = sortedArray.filter(
      (obj) => obj.yr.toString() === this.chosenYear
    );
    sortedArray = newArray;
    const uniqueObjects = [];
    const uniqueNames = new Set();

    for (let obj of sortedArray) {
      if (!uniqueNames.has(obj.name_Tz)) {
        uniqueNames.add(obj.name_Tz);
        uniqueObjects.push(obj);
      }
    }
    console.log(uniqueObjects);

    let targetObject4 = null;
    let targetIndex4 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 4) {
        targetObject4 = uniqueObjects[i];
        targetIndex4 = i;
        break;
      }
    }

    if (targetIndex4 !== -1 && targetIndex4 !== 0 && targetIndex4 !== null) {
      uniqueObjects.splice(targetIndex4, 1);

      var Teuda_Select_New4 = await this.megadelSearchService.Teuda_Select_New(
        6,
        targetObject4.yr,
        '04',
        this.userDetails[0].v_yzrn,
        '',
        '',
        0,
        0
      );

      targetObject4.dates = Teuda_Select_New4[0];
      uniqueObjects.push(targetObject4);
    }
    let targetObject11 = null;
    let targetIndex11 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 11) {
        targetObject11 = uniqueObjects[i];
        targetIndex11 = i;
        break;
      }
    }

    if (targetIndex11 !== -1 && targetIndex11 !== 0 && targetIndex11 !== null) {
      uniqueObjects.splice(targetIndex11, 1);

      var Teuda_Select_New11 = await this.megadelSearchService.Teuda_Select_New(
        6,
        targetObject11.yr,
        targetObject11.tzrt,
        this.userDetails[0].v_yzrn,
        '',
        '',
        0,
        0
      );

      targetObject11.dates = Teuda_Select_New11[0];
      uniqueObjects.push(targetObject11);
    }
    let targetObject30 = null;
    let targetIndex30 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 30) {
        targetObject30 = uniqueObjects[i];
        targetIndex30 = i;
        break;
      }
    }

    if (targetIndex30 !== -1 && targetIndex30 !== 0 && targetIndex30 !== null) {
      uniqueObjects.splice(targetIndex30, 1);

      var Teuda_Select_New = await this.megadelSearchService.Teuda_Select_New(
        6,
        targetObject30.yr,
        targetObject30.tzrt,
        this.userDetails[0].v_yzrn,

        '',
        '',
        0,
        0
      );

      targetObject30.dates = Teuda_Select_New[0];
      uniqueObjects.push(targetObject30);
    }
    let targetObject1 = null;
    let targetIndex1 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 1) {
        targetObject1 = uniqueObjects[i];
        targetIndex1 = i;
        break;
      }
    }

    if (targetIndex1 !== -1 && targetIndex1 !== 0 && targetIndex1 !== null) {
      uniqueObjects.splice(targetIndex1, 1);

      var Teuda_Select_New01 = await this.megadelSearchService.Teuda_Select_New(
        6,
        targetObject1.yr,
        '01',
        this.userDetails[0].v_yzrn,
        '',
        '',
        0,
        0
      );

      targetObject1.dates = Teuda_Select_New01[0];
      uniqueObjects.push(targetObject1);
    }
    let targetObject41 = null;
    let targetIndex41 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 41) {
        targetObject41 = uniqueObjects[i];
        targetIndex41 = i;
        break;
      }
    }

    if (targetIndex41 !== -1 && targetIndex41 !== 0 && targetIndex41 !== null) {
      uniqueObjects.splice(targetIndex41, 1);

      var Mdgrot_Teuda41 = await this.megadelSearchService.Mdgrot_Teuda(
        6,
        this.userDetails[0].v_yzrn,
        targetObject41.tzrt,
        targetObject41.yr,
        '',
        '',
        0
      );

      targetObject41.dates = Mdgrot_Teuda41[0];
      uniqueObjects.push(targetObject41);
    }
    let targetObject44 = null;
    let targetIndex44 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 44) {
        targetObject44 = uniqueObjects[i];
        targetIndex44 = i;
        break;
      }
    }

    if (targetIndex44 !== -1 && targetIndex44 !== 0 && targetIndex44 !== null) {
      uniqueObjects.splice(targetIndex44, 1);

      var Mdgrot_Teuda44 = await this.megadelSearchService.Mdgrot_Teuda(
        6,
        this.userDetails[0].v_yzrn,
        targetObject44.tzrt,
        targetObject44.yr,
        '',
        '',
        0
      );

      targetObject44.dates = Mdgrot_Teuda44[0];
      uniqueObjects.push(targetObject44);
    }
    let targetObject45 = null;
    let targetIndex45 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 45) {
        targetObject45 = uniqueObjects[i];
        targetIndex45 = i;
        break;
      }
    }

    if (targetIndex45 !== -1 && targetIndex45 !== 0 && targetIndex45 !== null) {
      uniqueObjects.splice(targetIndex45, 1);

      var Pargit_Teuda45 = await this.megadelSearchService.Pargit_Teuda(
        4,
        this.userDetails[0].v_yzrn,
        targetObject45.tzrt,
        targetObject45.yr,
        '',
        '',
        0
      );

      targetObject45.dates = Pargit_Teuda45[0];
      uniqueObjects.push(targetObject45);
    }
    let targetObject46 = null;
    let targetIndex46 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 46) {
        targetObject46 = uniqueObjects[i];
        targetIndex46 = i;
        break;
      }
    }

    if (targetIndex46 !== -1 && targetIndex46 !== 0 && targetIndex46 !== null) {
      uniqueObjects.splice(targetIndex46, 1);

      var Pargit_Teuda46 = await this.megadelSearchService.Pargit_Teuda(
        4,
        this.userDetails[0].v_yzrn,
        targetObject46.tzrt,
        targetObject46.yr,
        '',
        '',
        0
      );

      targetObject46.dates = Pargit_Teuda46[0];
      uniqueObjects.push(targetObject46);
    }
    let targetObject98 = null;
    let targetIndex98 = -1;

    for (let i = 0; i < uniqueObjects.length; i++) {
      if (uniqueObjects[i].tzrt === 98) {
        targetObject98 = uniqueObjects[i];
        targetIndex98 = i;
        break;
      }
    }

    if (
      targetObject98 !== -1 &&
      targetObject98 !== 0 &&
      targetObject98 !== null
    ) {
      if (targetObject98?.mztbr !== 0) {
        uniqueObjects.splice(targetIndex98, 1);
        var Pargit_Teuda98 = await this.megadelSearchService.Pargit_Teuda(
          4,
          this.userDetails[0].v_yzrn,
          targetObject98.tzrt,
          targetObject98.yr,
          '',
          '',
          0
        );

        targetObject98.dates = Pargit_Teuda98[0];
        uniqueObjects.push(targetObject98);
      }
    }

    // for (let obj of uniqueObjects) {
    //   obj.yr = this.chosenYear;
    // }

    this.data = uniqueObjects;
    this.isLoading_userDet = false;

    console.log('test');
    this.isLoading_Cart = true;
  }

  async add() {
    this.isLoading_userDet = true;
    this.isLoading_FarmDetails = true;

    console.log('startDateControl: ', this.startDateControl.value);
    console.log('siteControl: ', this.endDateControl.value);
    console.log('chosenYearControl: ', this.chosenYearControl.value);
    console.log('chosenSiteControl: ', this.chosenSiteControl.value);
    // {year: 2023, month: 6, day: 10}

    // start date:
    var theStartDate = this.startDateControl.value;

    theStartDate.year = theStartDate.year.toString();
    if (parseInt(theStartDate.month, 10) <= 9) {
      theStartDate.month = '0' + theStartDate.month.toString();
    } else {
      theStartDate.month = theStartDate.month.toString();
    }

    if (theStartDate.day <= 9) {
      theStartDate.day = '0' + theStartDate.day.toString();
    } else {
      theStartDate.day = theStartDate.day.toString();
    }
    theStartDate =
      theStartDate.year.toString() + theStartDate.month + theStartDate.day;

    var endDateControl = this.endDateControl.value;
    if (endDateControl.month.length <= 9) {
      endDateControl.month = '0' + endDateControl.month.toString();
    } else {
      endDateControl.month = endDateControl.month.toString();
    }

    if (endDateControl.day <= 9) {
      endDateControl.day = '0' + endDateControl.day.toString();
    } else {
      endDateControl.day = endDateControl.day.toString();
    }
    endDateControl =
      endDateControl.year.toString() +
      endDateControl.month +
      endDateControl.day;

    var chosenSiteControl = this.chosenSiteControl.value;

    if (chosenSiteControl === 'כולם') {
      chosenSiteControl = 0;
    }

    this.certificates_by_grewernum =
      await this.megadelSearchService.Teuda_Select_New(
        1,
        this.chosenYearControl.value,
        30,
        this.userDetails[0]?.yz_yzrn,
        theStartDate,
        endDateControl,
        0,
        chosenSiteControl
      );

    console.log(
      'this.certificates_by_grewernum: ',
      this.certificates_by_grewernum
    );

    this.data = this.certificates_by_grewernum;
    this.isLoading_userDet = false;
    this.startDateControl.setValue(null); // Set the value to null
    this.endDateControl.setValue(null); // Set the value to null
    this.chosenYearControl.setValue(null); // Set the value to null
    this.chosenSiteControl.setValue(null); // Set the value to null
  }
}
