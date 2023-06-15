import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ChartEvent, ChartType } from 'ng-chartist';
import 'chartist-plugin-tooltips';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { EggMarketingService } from 'src/app/services/egg-marketing.service';
import { LinkService } from 'src/app/services/link.service';
import {
  PerfectScrollbarDirective,
  PerfectScrollbarComponent,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { ChartApiService } from '../../../_services/chart.api';
import { TableApiService } from '../../../_services/table-api.service';
import { Router } from '@angular/router';
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

import { TableexcelService } from '../../../services/tableexcel.service';

import { ActivatedRoute } from '@angular/router';
import { MegadelSearchService } from '../../../services/MegadelSearch.service';
import { of } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PopupOldGrowerComponent } from '../popup-old-grower/popup-old-grower.component';
import { PopupMoreInfoGrowerComponent } from '../popup-more-info-grower/popup-more-info-grower.component';
import { PopupIzavonComponent } from '../popup-izavon/popup-izavon.component';
import { PopupGrowerOtherAddrComponent } from '../popup-grower-other-addr/popup-grower-other-addr.component';
import { PopupOldGrowerNameComponent } from '../popup-old-grower-name/popup-old-grower-name.component';
import { PopupPetemPartnersComponent } from '../popup-petem-partners/popup-petem-partners.component';
import { number } from 'echarts';
import { PopupCertificatesComponent } from '../popup-certificates/popup-certificates.component';
import { PopupGrowerCardComponent } from '../popup-grower-card/popup-grower-card.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent implements OnInit {
  @BlockUI('newOrders') blockUINewOrders: NgBlockUI;
  public config: PerfectScrollbarConfigInterface = { wheelPropagation: true };

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

  modalGrowerID;
  showAdditionalDetails: boolean = false;

  currentJustify = 'end';
  loadingIndicator = true;
  options = {
    close: false,
    expand: false,
    minimize: false,
    reload: true,
  };
  ChartistData: any;
  datatableData: any;
  lineAreaDay: any;
  lineAreaWeek: any;
  lineAreaMonth: any;
  ecommercesaleslineArea: any;
  donutChart: any;
  barChart: any;
  rows: any;
  @ViewChild(DatatableComponent, { static: true }) table: DatatableComponent;
  Daygraph = true;
  Weekgraph = false;
  Monthgraph = false;
  theDetails: any[];
  userDetails: any[];
  userDetails_more_info: any[];
  businessLicense: any[];
  theUserDetails: any[];
  FarmId: any[];
  FarmIdOfTheMaingrower: any[];
  FarmDetailsOfTheMaingrower: any[];
  siteName: any = '';
  FarmDetails: any[] = [];
  newArray: any[] = [];
  newArrayEnd: any[] = [];
  siteNameOfTheMaingrower: any[] = [];
  henHouseID: any = '-1';
  isLoading_theUserDetails = false;
  isLoading_FarmDetails = false;
  totalFarms: any;
  growerData = [];
  contactPersonFarmData = [];
  ContactPersonLength;
  yzrnHead;
  kannatNum_and_oldMegadelNum = [];
  mihsot = [];
  mihsotPetem = [];
  mihsotHodim = [];
  chosenYear: any = 2023;
  years: string[] = ['2020', '2021', '2022', '2023'];

  partnerData: any[];
  mcsaSum = 0;
  certificateSum = 0;
  eggSum = 0;
  eggSumFarm = 0;
  arrOfOldGrower = [];
  arrLulMehetza = [];
  totalMicsaKvoha = 0;
  totalMicsaToPay = 0;
  McsRishaion_Esek_number_type: any;
  v_SelfConsum_piece4: any;
  shot_confirmation: any;
  checkIzavon = false;
  Check_Ben_Zug_Shotaf = false;
  Check_v_name_kaful = false;
  check_if_Yzrn_have_Other_Addr: any[];
  objIzavon: any[];
  oldNameGrower: any[];
  yzrn_have_other_addr = false;
  checkOldGrowerName = false;
  businessLicense_all_details: any;
  idFromurl: any;
  farmID2Fromurl: any;
  flockID2Fromurl: any;
  mainGrower: any[];
  pa_CounterShotaf: any;
  check = 0;
  arrPartnersPetem: any[] = [];
  Active_FarmDetails: any[] = [];
  Not_Active_FarmDetails: any[] = [];
  public isNotActiveSiteShown: boolean = false;
  public click_on_show_ActiveSite: boolean = true;
  public click_on_not_show_ActiveSite: boolean = false;
  certificates_by_grewernum: any[] = [];
  thefarmdetOfThemainGrower: any[] = [];
  // Component class

  constructor(
    private chartApiservice: ChartApiService,
    private tableApiservice: TableApiService,
    private megadelSearchService: MegadelSearchService,
    private route: Router,
    private route2: ActivatedRoute,
    private tableexcelService: TableexcelService,
    private data: LinkService,
    private dataEgg: EggMarketingService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.Active_FarmDetails = [];
    this.Not_Active_FarmDetails = [];
    this.isNotActiveSiteShown = false;
    this.click_on_show_ActiveSite = true;
    this.click_on_not_show_ActiveSite = false;
    this.checkOldGrowerName = false;
    this.Check_Ben_Zug_Shotaf = false;
    this.Check_v_name_kaful = false;
    this.newArray = [];
    this.newArrayEnd = [];

    this.route2.params.subscribe(async (params) => {
      this.farmID2Fromurl = params['farmid'];
      this.flockID2Fromurl = params['flockid'];
      this.idFromurl = params['id'];
      console.log('idFromurl:', this.idFromurl);
      console.log('flockID2Fromurl:', this.flockID2Fromurl);
      console.log('farmID2Fromurl:', this.farmID2Fromurl);
      this.checkOldGrowerName = false;
      this.Check_Ben_Zug_Shotaf = false;
      this.Check_v_name_kaful = false;
      this.checkOldGrowerName = false;
      this.Active_FarmDetails = [];
      this.Not_Active_FarmDetails = [];
      this.isNotActiveSiteShown = false;
      this.click_on_show_ActiveSite = true;
      this.click_on_not_show_ActiveSite = false;
      this.newArray = [];
      this.newArrayEnd = [];

      // Call any necessary functions or perform logic based on the new parameter value
      this.refreshComponent();

      //   מחלצים את פרטי היצרן
      this.userDetails = await this.megadelSearchService.GET_YAZRAN_BY_YZ_ID(
        this.idFromurl
      );
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails));

      //   מחלצים פרטים נוספים של היצרן
      this.userDetails_more_info =
        await this.megadelSearchService.Yzrn_Select_By_View_New(
          14,
          this.userDetails[0].yz_yzrn,
          '%',
          '%',
          '%',
          '%',
          '%',
          '%',
          '%'
        );
      console.log('this.userDetails_more_info: ', this.userDetails_more_info);
      console.log(
        'userDetails_more_info[0].CdGdl: ',
        this.userDetails_more_info[0].CdGdl
      );

      //   לוגיקה התראות -------------------------------------------------------------------

      //   oldNameGrower
      this.oldNameGrower =
        await this.megadelSearchService.Yazran_History_Get_Data(
          this.userDetails[0].yz_yzrn,
          'yz_shem'
        );

      // התראה של שם ישן
      if (this.oldNameGrower[0]?.Old_Name_Yazran.length > 0) {
        this.checkOldGrowerName = true;
      }

      // v_SelfConsum_piece4 - אישור שוט וחילוץ מס האישור
      if (this.userDetails_more_info[0]?.v_SelfConsum !== 0) {
        const pieces = this.userDetails_more_info[0]?.v_SelfConsum.split(',');
        this.v_SelfConsum_piece4 = pieces[3];
      }

      //  עיזבון - בדיקה האם יש ובמידה ויש יצירת אובייקט לפופאפ
      if (
        this.userDetails_more_info[0]?.v_DtPtira !== '01/01/1900' &&
        this.userDetails_more_info[0]?.v_DtPtira !== ''
      ) {
        this.checkIzavon = true;
        this.objIzavon = [
          {
            v_dtUpdIzavon: this.userDetails_more_info[0]?.v_dtUpdIzavon,
            v_DtPtira: this.userDetails_more_info[0]?.v_DtPtira,
          },
        ];
      }

      //   v_Ben_Zug_Shutaf - בן זוג שותף התראה
      if (this.userDetails_more_info[0]?.v_Ben_Zug_Shutaf !== '0') {
        this.Check_Ben_Zug_Shotaf = true;
      }
      //   v_name_kaful - כפל גידול
      if (this.userDetails_more_info[0]?.v_name_kaful !== '0') {
        this.Check_v_name_kaful = true;
      }
      //התראה על כתובת שונה של היצרן
      this.check_if_Yzrn_have_Other_Addr =
        await this.megadelSearchService.Yzrn_Other_Addr_Get_Data(
          this.userDetails[0].yz_yzrn
        );

      if (this.check_if_Yzrn_have_Other_Addr.length > 0) {
        this.yzrn_have_other_addr = true;
      }
      //התראה על כתובת שונה של היצרן - סיום

      function getCurrentDateAsString(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const currentDate = `${year}${month}${day}`;
        return currentDate;
      }

      const CurrentDate = await getCurrentDateAsString();

      // רישיון עסק התראה
      this.businessLicense =
        await this.megadelSearchService.Yzrn_Get_Rishaion_Esek(
          2,
          30,
          this.userDetails[0].yz_yzrn,
          CurrentDate,
          0
        );
      console.log('this.businessLicense: ', this.businessLicense);

      const pieces = this.businessLicense[0]?.McsRishaion_Esek.split(',');
      const piece4 = pieces[3];
      const piece1_kamot = pieces[0];
      const piece1_until_date = pieces[2];
      this.businessLicense_all_details = ` רישיון עסק ${piece1_kamot}  עד ${piece1_until_date} `;
      console.log(
        'businessLicense_all_details: ',
        this.businessLicense_all_details
      );

      this.shot_confirmation = pieces[3];
      console.log('shot_confirmation: ', this.shot_confirmation);

      this.McsRishaion_Esek_number_type = parseFloat(
        this.businessLicense[0]?.McsRishaion_Esek
      );
      // רישיון עסק התראה - סיום

      // מכסות ביצים
      this.mihsot = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.yz_yzrn,
        this.chosenYear,
        '30 - ביצי מאכל',
        88
      );
      // מכסות ביצים - סיום

      // מכסות פטם
      this.mihsotPetem = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.yz_yzrn,
        this.chosenYear,
        '10',
        88
      );
      // מכסות פטם - סיום

      // מכסות הודים
      this.mihsotHodim = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.yz_yzrn,
        this.chosenYear,
        '01',
        88
      );
      console.log('this.mihsotPetem: ', this.mihsotHodim);
      // מכסות הודים - סיום

      //סה''כ מכסה קבועה:  + סה''כ מכסה לתשלום:
      this.totalMicsaKvoha = 0; // Initialize the variable to 0
      this.totalMicsaToPay = 0; // Initialize the variable to 0

      for (const iterator of this.mihsot) {
        if (
          iterator.mi_sug_mcsa === '1 ' ||
          iterator.mi_sug_mcsa === '2 ' ||
          iterator.mi_sug_mcsa === '3 ' ||
          iterator.mi_sug_mcsa === '1' ||
          iterator.mi_sug_mcsa === '2' ||
          iterator.mi_sug_mcsa === '3'
        ) {
          this.totalMicsaKvoha += iterator.mi_kamut;
        }
        if (
          iterator.mi_sug_mcsa === '4 ' ||
          iterator.mi_sug_mcsa === '4' ||
          iterator.mi_sug_mcsa === '11' ||
          iterator.mi_sug_mcsa === '11 ' ||
          iterator.mi_sug_mcsa === '5' ||
          iterator.mi_sug_mcsa === '5 '
        ) {
          this.totalMicsaToPay += iterator.mi_kamut;
        }
      }
      //סה''כ מכסה קבועה:  + סה''כ מכסה לתשלום: -  סיום

      // קנט ושם מגדל ישן
      this.kannatNum_and_oldMegadelNum =
        await this.megadelSearchService.YazrnExtrnl_Get_Code(
          2,
          '',
          this.userDetails[0]?.yz_yzrn
        );

      for (let i = 0; i < this.kannatNum_and_oldMegadelNum.length; i++) {
        let item = this.kannatNum_and_oldMegadelNum[i];
        if (item.NameMsvkExt === 'מספר מגדל ישן') {
          this.arrOfOldGrower.push(item);
          this.kannatNum_and_oldMegadelNum.splice(i, 1);
          i--; // Decrement the index as the array length has changed
        }
      }
      // קנט ושם מגדל ישן -  סיום

      //   סיום התראות-----------------------------------------------------------------------------------------------------------------------------------------

      //   חילוץ מס קבוצת גידול חוץ
      if (this.userDetails[0].length === 0) {
        this.userDetails = [];
      } else {
        const results2 =
          await this.megadelSearchService.Get_num_of_gidol_hotz_from_yz_yzrn(
            this.userDetails[0].yz_yzrn
          );
        if (results2[0]?.pa_Counter) {
          this.userDetails[0].pa_Counter = results2[0].pa_Counter;
        } else {
          this.userDetails[0].pa_Counter = '';
        }
      }
      //   חילוץ מס קבוצת גידול חוץ -  סיום

      this.theUserDetails = this.userDetails[0];

      //   סיום הלואודינג
      this.isLoading_theUserDetails = false;

      //   מחלצים את מספרי האתרים של היצרן
      this.siteName =
        await this.megadelSearchService.Tables_Select_All_Atarim_Of_Yzrn(
          50,
          '',
          '%',
          0,
          '20,27',
          this.userDetails[0].yz_yzrn,
          99
        );
      localStorage.setItem('siteName', JSON.stringify(this.siteName));

      if (this.siteName.length > 0) {
        // FarmId חילוץ - חילוץ איידי של כל אתר
        this.FarmId = await this.getFarmIdArr(this.siteName);
        console.log('this.FarmId-end: ', this.FarmId);

        // חילוץ פרטי אתרים עי הפארם איידי של היצרן
        this.FarmDetails = await this.getFarmDetailsArr(this.FarmId);

        // מחלצים למערך את מספרי האתרים עם הקוד גידול חוץ שלהם במידה ויש
        // this.newArray = this.FarmDetails.map((obj) => {
        //   return {
        //     cd_gidul: obj?.cd_gidul,
        //     farm_code: obj?.farm_code,
        //   };
        // });
        // console.log(' this.newArray: ', this.newArray);

        // ביצוע פעולות כדי להביא את מס גידול החוץ כולל כמות שותפים
        // מחלצים את המגדל הראשי במידה ויש ליצרן זה
        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].yz_yzrn,
            30,
            this.chosenYear
          );
        this.siteNameOfTheMaingrower =
          await this.megadelSearchService.Tables_Select_All_Atarim_Of_Yzrn(
            50,
            '',
            '%',
            0,
            '20,27',
            this.mainGrower[0].YzrnHead,
            99
          );
        if (this.siteNameOfTheMaingrower.length > 0) {
          this.FarmIdOfTheMaingrower = await this.getFarmIdArr(
            this.siteNameOfTheMaingrower
          );
          console.log('this.FarmId-end: ', this.FarmId);

          // חילוץ פרטי אתרים עי הפארם איידי של היצרן
          this.FarmDetailsOfTheMaingrower = await this.getFarmDetailsArr(
            this.FarmIdOfTheMaingrower
          );

          // מחלצים למערך את מספרי האתרים עם הקוד גידול חוץ שלהם במידה ויש
          this.newArray = this.FarmDetailsOfTheMaingrower.map((obj) => {
            return {
              cd_gidul: obj?.cd_gidul,
              farm_code: obj?.farm_code,
            };
          });
          console.log(' this.newArray: ', this.newArray);
        }

        // כאן יש את השדות של מס ג''ח ומס השותפים
        this.thefarmdetOfThemainGrower = await this.getFarmDetailsArr([
          this.mainGrower[0].atar_id,
        ]);
        this.totalFarms = this.FarmDetails.length;
      } else {
        // במידה וליצרן אין בכלל אתרים שלו
        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].yz_yzrn,
            30,
            this.chosenYear
          );

        // כאן יש את השדות של מס ג''ח ומס השותפים
        this.thefarmdetOfThemainGrower = await this.getFarmDetailsArr([
          this.mainGrower[0].atar_id,
        ]);

        // במידה ולא נמצאו אתרים למגדל אנו נביא את האתרים של המגדל הראשי
        this.siteName =
          await this.megadelSearchService.Tables_Select_All_Atarim_Of_Yzrn(
            50,
            '',
            '%',
            0,
            '20,27',
            this.thefarmdetOfThemainGrower[0].lull2000_code,
            99
          );
        localStorage.setItem('siteName', JSON.stringify(this.siteName));

        //   נחלץ את האיידי של האתרים ע''י המספרי אתר שלהם של היצרן הראשי
        this.FarmId = await this.getFarmIdArr(this.siteName);
        console.log('this.FarmId-end: ', this.FarmId);

        // חילוץ פרטי אתרים עי הפארם איידי של היצרן הראשי
        var FarmDetails2 = await this.getFarmDetailsArr(this.FarmId);

        // מחלצים למערך את מספרי האתרים עם הקוד גידול חוץ שלהם במידה ויש
        // this.newArray = FarmDetails2.map((obj) => {
        //   return {
        //     cd_gidul: obj?.cd_gidul,
        //     farm_code: obj?.farm_code,
        //   };
        // });
        // console.log(' this.newArray: ', this.newArray);
      }

      // חילוץ פרטי אתר עי הפארם איידי -  סיום-----------------------------------------------------------------------------------------

      // הוספה לפרטי האתר שדה המכיל גידול חוץ
      for (let item of this.FarmDetails) {
        if (item.lull2000_code) {
          let lull2000_code = item.lull2000_code;
          const results2 =
            await this.megadelSearchService.Get_num_of_gidol_hotz_from_yz_yzrn(
              lull2000_code
            );
          if (results2[0]?.pa_Counter) {
            item.pa_Counter = results2[0].pa_Counter;
          } else {
            item.pa_Counter = '';
          }
        } else {
          item.pa_Counter = '';
        }
      }
      // הוספה לפרטי האתר שדה המכיל גידול חוץ - סיום

      // הוספת שדה איכלוס -
      for (let item of this.FarmDetails) {
        let grower_id = item.grower_id;
        let farm_id = item.farm_id;
        let farm_code_without_slesh = this.extractNumber(item.farm_code);
        // בדיקת שותפים מכסת פטם
        const checkPartners =
          await this.megadelSearchService.Partners_By_Farm_Select(
            7,
            farm_code_without_slesh,
            '19',
            '',
            '20180101',
            '99991231'
          );
        console.log('checkPartners: ', checkPartners);
        if (checkPartners.length > 1) {
          this.arrPartnersPetem.push({
            numGroup: item.farm_code,
            partners: checkPartners,
          });
          console.log(' this.arrPartnersPetem: ', this.arrPartnersPetem);
        }

        const results2 =
          await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
            farm_id,
            grower_id
          );
        console.log(
          'results2 in get_hiclos_by_growerId_and_farmId: ',
          results2
        );

        if (results2[0]?.female_number_f) {
          item.hiclos_number = results2[0].female_number_f;
        } else {
          item.hiclos_number = '';
        }
      }
      // הוספת שדה איכלוס - סיום

      // הוספת שדה איכלוס - 750
      for (let item of this.FarmDetails) {
        let grower_id = item.grower_id;
        let farm_id = item.farm_id;

        const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
          item.farm_code
        );
        console.log('hiclos750: ', hiclos750);
        console.log('hiclos750[0]?.calc750: ', hiclos750[0]?.calc750);

        // if (hiclos750[0]?.calc750) {
        item.calc750 = hiclos750[0]?.calc750;
        // }
      }
      // הוספת שדה איכלוס 750- סיום

      console.log(
        'this.FarmDetails with hiclos and hiclos750: ',
        this.FarmDetails
      );

      for (let obj2 of this.FarmDetails) {
        if (
          obj2?.farm_id !== null &&
          obj2?.active_flock_id !== null &&
          obj2?.lull2000_code !== null
        ) {
          this.mainGrower =
            await this.megadelSearchService.Partners_Get_CodeGidul(
              11,
              this.userDetails[0].yz_yzrn,
              30,
              this.chosenYear
            );

          const thefarmdet = await this.getFarmDetailsArr([
            this.mainGrower[0].atar_id,
          ]);

          // if (        thefarmdet[0]?.farm_id !== null ||
          //     thefarmdet[0]?.active_flock_id !== null ||
          //     thefarmdet[0]?.lull2000_code !== null) {

          // }

          this.partnerData = await this.megadelSearchService.getPartner(
            thefarmdet[0]?.farm_id,
            thefarmdet[0]?.active_flock_id,
            this.mainGrower[0]?.YzrnHead
          );
          console.log('this.partnerData5: ', this.partnerData);

          for (let obj of this.partnerData) {
            var yeshuv =
              await this.megadelSearchService.Get_yz_shem_yeshuv_by_yz_yzrn(
                obj.lull2000_code
              );
            obj.yeshuv = yeshuv[0].yz_shem_yeshuv;
          }
          console.log('this.partnerData5 after yeshuv: ', this.partnerData);

          this.mcsaSum = 0;
          this.eggSum = 0;
          this.certificateSum = 0;

          for (var i = 0; i < this.partnerData.length; i++) {
            this.mcsaSum += parseFloat(this.partnerData[i]['mcsa_sum']);
            this.certificateSum += parseFloat(
              this.partnerData[i]['certificate_sum']
            );
            this.eggSum += parseFloat(this.partnerData[i]['egg_sum']);
          }

          console.log('this.mcsaSum: ', this.mcsaSum);
          console.log('this.certificateSum: ', this.certificateSum);
          console.log('this.eggSum: ', this.eggSum);
          let obj = {
            mcsaSum: this.mcsaSum,
            certificateSum: this.certificateSum,
            eggSum: this.eggSum,
          };
          for (const obj2 of this.newArray) {
            if (obj2.cd_gidul === this.partnerData[0].cd_gidul.toString()) {
              this.newArrayEnd.push(obj2);
            }
          }

          this.partnerData.push({
            obj2: obj,
            farmID2: obj2?.farm_id,
            flockID2: obj2?.active_flock_id,
            newArrayEnd: this.newArrayEnd,
          });

          console.log('this.partnerData in if of for: ', this.partnerData);
        } else {
          // this.partnerData = await this.megadelSearchService.getPartner(
          //   obj2?.farm_id,
          //   obj2?.active_flock_id,
          //   obj2?.lull2000_code
          // );

          this.mainGrower =
            await this.megadelSearchService.Partners_Get_CodeGidul(
              11,
              this.userDetails[0].yz_yzrn,
              30,
              this.chosenYear
            );

          const thefarmdet = await this.getFarmDetailsArr([
            this.mainGrower[0].atar_id,
          ]);

          this.partnerData = await this.megadelSearchService.getPartner(
            thefarmdet[0]?.farm_id,
            thefarmdet[0]?.active_flock_id,
            this.mainGrower[0]?.YzrnHead
          );
          console.log('this.partnerData5: ', this.partnerData);

          for (let obj of this.partnerData) {
            var yeshuv =
              await this.megadelSearchService.Get_yz_shem_yeshuv_by_yz_yzrn(
                obj.lull2000_code
              );
            obj.yeshuv = yeshuv[0].yz_shem_yeshuv;
          }
          console.log('this.partnerData5 after yeshuv: ', this.partnerData);

          this.mcsaSum = 0;
          this.eggSum = 0;
          this.certificateSum = 0;

          for (var i = 0; i < this.partnerData.length; i++) {
            this.mcsaSum += parseFloat(this.partnerData[i]['mcsa_sum']);
            this.certificateSum += parseFloat(
              this.partnerData[i]['certificate_sum']
            );
            this.eggSum += parseFloat(this.partnerData[i]['egg_sum']);
          }

          console.log('this.mcsaSum: ', this.mcsaSum);
          console.log('this.certificateSum: ', this.certificateSum);
          console.log('this.eggSum: ', this.eggSum);
          let obj = {
            mcsaSum: this.mcsaSum,
            certificateSum: this.certificateSum,
            eggSum: this.eggSum,
          };
          for (const obj2 of this.newArray) {
            if (obj2.cd_gidul === this.partnerData[0].cd_gidul.toString()) {
              this.newArrayEnd.push(obj2);
            }
          }

          this.partnerData.push({
            obj2: obj,
            farmID2: obj2?.farm_id,
            flockID2: obj2?.active_flock_id,
            newArrayEnd: this.newArrayEnd,
          });

          console.log('this.partnerData in if of for: ', this.partnerData);
        }
      }

      for (let item of this.FarmDetails) {
        if (item.farm_status_id === 1) {
          this.Active_FarmDetails.push(item);
        } else {
          this.Not_Active_FarmDetails.push(item);
        }
      }

      if (this.Active_FarmDetails.length > 0) {
        this.rows = this.Active_FarmDetails;
        this.click_on_show_ActiveSite = true;
        this.click_on_not_show_ActiveSite = false;
      } else {
        this.rows = this.Active_FarmDetails;
        this.isNotActiveSiteShown = true;
        this.click_on_show_ActiveSite = false;
        this.click_on_not_show_ActiveSite = true;
      }
      this.isLoading_FarmDetails = false;

      this.chartApiservice.getEcommerceData().subscribe((Response) => {
        this.ChartistData = Response;
        this.getlineArea();
      });
      this.tableApiservice.getEcommerceTableData().subscribe((Response) => {
        this.datatableData = Response;
      });

      this.loadData(this.userDetails[0]?.yz_Id);
    });
  }

  //   ------ onInit end---------------------------------------------------------------------------------------------------------------------

  //     -- exec Teuda_Select_New @order=1, @start_year=2023, @start_tzrt=30,@start_yzrn="02060341",@start_date="20230101",@end_date="20231231", @start_list=0,@Rishaion=0
  async shows_certificates_by_grewernum() {
    this.certificates_by_grewernum =
      await this.megadelSearchService.Teuda_Select_New(
        1,
        this.chosenYear,
        30,
        this.userDetails[0]?.yz_yzrn,
        '20230101',
        '20231231',
        0,
        0
      );
    console.log(
      'this.certificates_by_grewernum: ',
      this.certificates_by_grewernum
    );
    await this.openPopup_certificates();
  }
  // Component class

  show_ActiveSite() {
    this.isNotActiveSiteShown = false;
    this.click_on_show_ActiveSite = true;
    this.click_on_not_show_ActiveSite = false;

    this.rows = this.Active_FarmDetails;
  }

  showAllSite() {
    this.rows = this.FarmDetails;
  }

  show_not_ActiveSite() {
    this.isNotActiveSiteShown = true;
    this.click_on_show_ActiveSite = false;
    this.click_on_not_show_ActiveSite = true;

    this.rows = this.Not_Active_FarmDetails;
  }
  isFirstUniqueValue(obj: any, currentIndex: number): boolean {
    for (let i = 0; i < currentIndex; i++) {
      if (
        this.rows[i].is_has_partner === obj.is_has_partner &&
        this.rows[i].cd_gidul === obj.cd_gidul
      ) {
        return false;
      }
    }
    return true;
  }

  isLastUniqueValue(obj: any, currentIndex: number): boolean {
    for (let i = currentIndex + 1; i < this.rows.length; i++) {
      if (
        this.rows[i].is_has_partner === obj.is_has_partner &&
        this.rows[i].cd_gidul === obj.cd_gidul
      ) {
        return false;
      }
    }
    return true;
  }
  hasMultipleUniqueValues(obj: any): boolean {
    let count = 0;
    for (let row of this.rows) {
      if (
        row.is_has_partner === obj.is_has_partner &&
        row.cd_gidul === obj.cd_gidul
      ) {
        count++;
      }
    }
    return count > 1;
  }

  async onYearChange() {
    // מכסות ביצים
    this.mihsot = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.yz_yzrn,
      this.chosenYear,
      '30 - ביצי מאכל',
      88
    );
    console.log('this.mihsot: ', this.mihsot);

    console.log('this.mihsot.length: ', this.mihsot.length);
    // מכסות ביצים - סיום

    // מכסות פטם
    this.mihsotPetem = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.yz_yzrn,
      this.chosenYear,
      '10',
      88
    );

    console.log('this.mihsotPetem: ', this.mihsotPetem);
    console.log('this.mihsotPetem.length: ', this.mihsotPetem.length);

    // מכסות פטם - סיום

    // מכסות הודים
    this.mihsotHodim = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.yz_yzrn,
      this.chosenYear,
      '01',
      88
    );

    console.log('this.mihsotHodim: ', this.mihsotHodim);
    console.log('this.mihsotHodim.length: ', this.mihsotHodim.length);

    // מכסות הודים - סיום

    this.totalMicsaKvoha = 0; // Initialize the variable to 0
    this.totalMicsaToPay = 0; // Initialize the variable to 0

    for (const iterator of this.mihsot) {
      if (
        iterator.mi_sug_mcsa === '1 ' ||
        iterator.mi_sug_mcsa === '2 ' ||
        iterator.mi_sug_mcsa === '3 ' ||
        iterator.mi_sug_mcsa === '1' ||
        iterator.mi_sug_mcsa === '2' ||
        iterator.mi_sug_mcsa === '3'
      ) {
        this.totalMicsaKvoha += iterator.mi_kamut;
      }
      if (
        iterator.mi_sug_mcsa === '4 ' ||
        iterator.mi_sug_mcsa === '4' ||
        iterator.mi_sug_mcsa === '11' ||
        iterator.mi_sug_mcsa === '11 '
      ) {
        this.totalMicsaToPay += iterator.mi_kamut;
      }
    }
  }

  refreshComponent() {
    // Implement the logic that needs to be executed when the parameter value changes
    this.isLoading_theUserDetails = true;
    this.isLoading_FarmDetails = true;

    // Perform any other necessary operations or API calls based on the new parameter value
  }

  async getPartner(allTheFarmDet) {
    console.log('allTheFarmDet: ', allTheFarmDet);
    console.log('this.newArray2: ', this.newArray);

    // console.log('ccc: ', farmID, ' ', flockID, ' ', lull2000Code);
    for (let obj2 of allTheFarmDet) {
      if (
        obj2?.farm_id !== null &&
        obj2?.active_flock_id !== null &&
        obj2?.lull2000_code !== null
      ) {
        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].yz_yzrn,
            30,
            this.chosenYear
          );

        const thefarmdet = await this.getFarmDetailsArr([
          this.mainGrower[0].atar_id,
        ]);

        // if (        thefarmdet[0]?.farm_id !== null ||
        //     thefarmdet[0]?.active_flock_id !== null ||
        //     thefarmdet[0]?.lull2000_code !== null) {

        // }

        this.partnerData = await this.megadelSearchService.getPartner(
          thefarmdet[0]?.farm_id,
          thefarmdet[0]?.active_flock_id,
          this.mainGrower[0]?.YzrnHead
        );
        console.log('this.partnerData5: ', this.partnerData);

        for (let obj of this.partnerData) {
          var yeshuv =
            await this.megadelSearchService.Get_yz_shem_yeshuv_by_yz_yzrn(
              obj.lull2000_code
            );
          obj.yeshuv = yeshuv[0].yz_shem_yeshuv;
        }
        console.log('this.partnerData5 after yeshuv: ', this.partnerData);

        this.mcsaSum = 0;
        this.eggSum = 0;
        this.certificateSum = 0;

        for (var i = 0; i < this.partnerData.length; i++) {
          this.mcsaSum += parseFloat(this.partnerData[i]['mcsa_sum']);
          this.certificateSum += parseFloat(
            this.partnerData[i]['certificate_sum']
          );
          this.eggSum += parseFloat(this.partnerData[i]['egg_sum']);
        }

        console.log('this.mcsaSum: ', this.mcsaSum);
        console.log('this.certificateSum: ', this.certificateSum);
        console.log('this.eggSum: ', this.eggSum);
        let obj = {
          mcsaSum: this.mcsaSum,
          certificateSum: this.certificateSum,
          eggSum: this.eggSum,
        };
        for (const obj2 of this.newArray) {
          if (obj2.cd_gidul === this.partnerData[0].cd_gidul.toString()) {
            this.newArrayEnd.push(obj2);
          }
        }

        this.partnerData.push({
          obj2: obj,
          farmID2: obj2?.farm_id,
          flockID2: obj2?.active_flock_id,
          newArrayEnd: this.newArrayEnd,
        });

        console.log('this.partnerData in if of for: ', this.partnerData);

        await this.openPopup();
      } else {
        // this.partnerData = await this.megadelSearchService.getPartner(
        //   obj2?.farm_id,
        //   obj2?.active_flock_id,
        //   obj2?.lull2000_code
        // );

        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].yz_yzrn,
            30,
            this.chosenYear
          );

        const thefarmdet = await this.getFarmDetailsArr([
          this.mainGrower[0].atar_id,
        ]);

        this.partnerData = await this.megadelSearchService.getPartner(
          thefarmdet[0]?.farm_id,
          thefarmdet[0]?.active_flock_id,
          this.mainGrower[0]?.YzrnHead
        );
        console.log('this.partnerData5: ', this.partnerData);

        for (let obj of this.partnerData) {
          var yeshuv =
            await this.megadelSearchService.Get_yz_shem_yeshuv_by_yz_yzrn(
              obj.lull2000_code
            );
          obj.yeshuv = yeshuv[0].yz_shem_yeshuv;
        }
        console.log('this.partnerData5 after yeshuv: ', this.partnerData);

        this.mcsaSum = 0;
        this.eggSum = 0;
        this.certificateSum = 0;

        for (var i = 0; i < this.partnerData.length; i++) {
          this.mcsaSum += parseFloat(this.partnerData[i]['mcsa_sum']);
          this.certificateSum += parseFloat(
            this.partnerData[i]['certificate_sum']
          );
          this.eggSum += parseFloat(this.partnerData[i]['egg_sum']);
        }

        console.log('this.mcsaSum: ', this.mcsaSum);
        console.log('this.certificateSum: ', this.certificateSum);
        console.log('this.eggSum: ', this.eggSum);
        let obj = {
          mcsaSum: this.mcsaSum,
          certificateSum: this.certificateSum,
          eggSum: this.eggSum,
        };
        for (const obj2 of this.newArray) {
          if (obj2.cd_gidul === this.partnerData[0].cd_gidul.toString()) {
            this.newArrayEnd.push(obj2);
          }
        }

        this.partnerData.push({
          obj2: obj,
          farmID2: obj2?.farm_id,
          flockID2: obj2?.active_flock_id,
          newArrayEnd: this.newArrayEnd,
        });

        console.log('this.partnerData in if of for: ', this.partnerData);

        await this.openPopup();
      }
    }
  }

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog';
    dialogConfig.data = this.partnerData;
    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    let isClickedInside = false;

    const handleDocumentClick = () => {
      if (!isClickedInside) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      }
      isClickedInside = false;
    };

    const handleButtonClick = () => {
      isClickedInside = true;
    };

    document.addEventListener('click', handleDocumentClick);

    // Add a click event listener to the button that triggers the main function
    const buttonElement = document.querySelector('#gidolHotzBtn'); // Replace 'your-button-id' with the actual ID of your button
    buttonElement.addEventListener('click', handleButtonClick);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      document.removeEventListener('click', handleDocumentClick);
      buttonElement.removeEventListener('click', handleButtonClick);
    });
  }
  openPopup_GrowerCard_Component() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_certificates-dialog';
    dialogConfig.data = this.certificates_by_grewernum;
    const dialogRef = this.dialog.open(PopupGrowerCardComponent, dialogConfig);
  }

  openPopup_certificates() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_certificates-dialog';
    dialogConfig.data = this.certificates_by_grewernum;
    const dialogRef = this.dialog.open(
      PopupCertificatesComponent,
      dialogConfig
    );
  }

  open_PopupPetemPartnersComponent() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog';
    dialogConfig.data = this.arrPartnersPetem;
    const dialogRef = this.dialog.open(
      PopupPetemPartnersComponent,
      dialogConfig
    );

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
    const buttonElement = document.querySelector('#gidolHotzBtn'); // Replace 'your-button-id' with the actual ID of your button
    buttonElement.addEventListener('click', handleButtonClick);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      isSecondClick = false;
      document.removeEventListener('click', handleDocumentClick);
      buttonElement.removeEventListener('click', handleButtonClick);
    });
  }

  openPopup_more_info_grower() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog-more-info';
    dialogConfig.data = this.userDetails_more_info;
    const dialogRef = this.dialog.open(
      PopupMoreInfoGrowerComponent,
      dialogConfig
    );

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

  openPopup_Of_OldGrower() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog-OldGrower'; // Apply the CSS class to center the dialog
    dialogConfig.data = this.arrOfOldGrower;
    const dialogRef = this.dialog.open(PopupOldGrowerComponent, dialogConfig);

    let isSecondClick = false;

    // Add event listener to the document for 'click' event
    const handleDocumentClick = () => {
      if (isSecondClick) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      } else {
        isSecondClick = true;
      }
    };
    document.addEventListener('click', handleDocumentClick);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle actions when the dialog is closed
      console.log('Dialog closed with result:', result);
      // Perform any necessary actions based on the result

      // Reset the flag when the dialog is closed
      isSecondClick = false;
      // Remove the event listener when the dialog is closed
      document.removeEventListener('click', handleDocumentClick);
    });
  }

  Popup_Izavon() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'Popup_Izavon'; // Apply the CSS class to center the dialog
    dialogConfig.data = this.objIzavon;
    const dialogRef = this.dialog.open(PopupIzavonComponent, dialogConfig);

    let isSecondClick = false;

    // Add event listener to the document for 'click' event
    const handleDocumentClick = () => {
      if (isSecondClick) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      } else {
        isSecondClick = true;
      }
    };
    document.addEventListener('click', handleDocumentClick);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle actions when the dialog is closed
      console.log('Dialog closed with result:', result);
      // Perform any necessary actions based on the result

      // Reset the flag when the dialog is closed
      isSecondClick = false;
      // Remove the event listener when the dialog is closed
      document.removeEventListener('click', handleDocumentClick);
    });
  }

  Popup_Grower_Other_Addr() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'Popup_Grower_Other_Addr'; // Apply the CSS class to center the dialog
    dialogConfig.data = this.check_if_Yzrn_have_Other_Addr;
    const dialogRef = this.dialog.open(
      PopupGrowerOtherAddrComponent,
      dialogConfig
    );

    let isSecondClick = false;

    // Add event listener to the document for 'click' event
    const handleDocumentClick = () => {
      if (isSecondClick) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      } else {
        isSecondClick = true;
      }
    };
    document.addEventListener('click', handleDocumentClick);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle actions when the dialog is closed
      console.log('Dialog closed with result:', result);
      // Perform any necessary actions based on the result

      // Reset the flag when the dialog is closed
      isSecondClick = false;
      // Remove the event listener when the dialog is closed
      document.removeEventListener('click', handleDocumentClick);
    });
  }

  Popup_Old_Grower_Name() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'Popup_Old_Grower_Name'; // Apply the CSS class to center the dialog
    dialogConfig.data = this.oldNameGrower;
    const dialogRef = this.dialog.open(
      PopupOldGrowerNameComponent,
      dialogConfig
    );

    let isSecondClick = false;

    // Add event listener to the document for 'click' event
    const handleDocumentClick = () => {
      if (isSecondClick) {
        dialogRef.close();
        document.removeEventListener('click', handleDocumentClick);
      } else {
        isSecondClick = true;
      }
    };
    document.addEventListener('click', handleDocumentClick);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle actions when the dialog is closed
      console.log('Dialog closed with result:', result);
      // Perform any necessary actions based on the result

      // Reset the flag when the dialog is closed
      isSecondClick = false;
      // Remove the event listener when the dialog is closed
      document.removeEventListener('click', handleDocumentClick);
    });
  }

  toggleAdditionalDetails() {
    this.showAdditionalDetails = !this.showAdditionalDetails;
  }

  dblClickGrower(growerID) {
    console.log('growerID=' + growerID);
    this.modalGrowerID = growerID;
    document.getElementById('btnModalGrower').click();
    console.log('this.modalGrowerID: ', this.modalGrowerID);
  }

  async getFarmIdArr(siteNames: any[]): Promise<any[]> {
    const farmIds: any[] = [];

    for (const item of siteNames) {
      if (item && item.code) {
        if (item.code.includes('/')) {
          this.arrLulMehetza.push(item.code);
        }
        const extractedNumber = this.extractNumber(item.code);

        const farmId = await this.megadelSearchService.Get_farmId_By_siteName(
          extractedNumber
        );
        farmIds.push(farmId[0].id);
      }
    }

    return farmIds;
  }

  extractNumber(value: any): number {
    if (typeof value === 'string') {
      if (value.includes('/')) {
        // Split the string based on the '/'
        const parts = value.split('/');

        // Retrieve the first part which represents the number
        const numberPart = parts[0];

        // Convert the number part to a numeric value
        const number = Number(numberPart);

        // Return the extracted number
        return number;
      } else {
        // Convert the number part to a numeric value
        const number = Number(value);

        // Return the extracted number
        return number;
      }
    } else {
      return value;
    }
  }

  extractNumber_In_Type_Number(value: any): number {
    if (typeof value === 'string') {
      if (value.includes('/')) {
        // Split the string based on the '/'
        const parts = value.split('/');

        // Retrieve the first part which represents the number
        const numberPart = parts[0];

        // Convert the number part to a numeric value
        const number = Number(numberPart);

        // Return the extracted number as a number
        return number;
      } else {
        // Convert the number part to a numeric value
        const number = Number(value);

        // Return the extracted number as a number
        return number;
      }
    } else {
      return value;
    }
  }

  async loadData(growerID) {
    console.log('growerID in loadData: ', growerID);

    await this.data.getGrowerDetails(growerID).subscribe((data) => {
      console.log('the_data: ', data);

      this.growerData = data[0];
      console.log('this.growerData2: ', this.growerData);

      this.yzrnHead = this.growerData[0]?.lull2000_code;
      if (this.yzrnHead) {
        this.dataEgg
          .getContactPersonFarmHatala(this.yzrnHead)
          .subscribe((data) => {
            console.log('data from getContactPersonFarmHatala: ', data);

            this.contactPersonFarmData = data;
            this.ContactPersonLength = this.contactPersonFarmData.length;
          });
      }
    });
    console.log('this.growerData2: ', this.growerData);
  }

  async getFarmDetailsArr(FarmIdArr: any[]): Promise<any[]> {
    const farmDetailsArr: any[] = [];
    console.log('theFarmIdArr: ', FarmIdArr);

    for (const FarmId of FarmIdArr) {
      if (FarmId) {
        console.log('theFarmId: ', FarmId);

        const farmDetails =
          await this.megadelSearchService.prc_farm_details_eran(FarmId, -1);

        for (let item of this.arrLulMehetza) {
          console.log('item: ', item);
          let checkMehetza = this.extractNumber_In_Type_Number(item);
          if (farmDetails[0].farm_code === checkMehetza) {
            farmDetails[0].farm_code = item;
          }
        }

        console.log('farmDetails1: ', farmDetails);

        farmDetailsArr.push(farmDetails[0]);
      }
    }
    return farmDetailsArr;
  }

  getExcelDataFarmDetails(): void {
    this.tableexcelService.exportAsExcelFile(
      this.FarmDetails,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }

  getlineArea() {
    const ChartData = this.ChartistData;
    this.lineAreaDay = {
      type: 'Line',
      data: ChartData['lineArea'],
      options: {
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 1.8,
        }),
        fullwidth: true,
        height: '320px',
        low: 0,
        showArea: true,
        fullWidth: true,
        showPoint: false,
        axisX: {
          showGrid: false,
        },
        axisY: {
          low: 0,
          offset: 16,
          scaleMinSpace: 40,
          labelInterpolationFnc: function (value) {
            return value + 'K';
          },
        },
      },
      responsiveOptions: [
        [
          'screen and (max-width: 640px) and (min-width: 200px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
              },
            },
          },
        ],
        [
          'screen and (max-width: 380px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 3 === 0 ? value : null;
              },
            },
          },
        ],
      ],
      events: {
        created(data: any): void {
          const defs = data.svg.elem('defs');
          defs
            .elem('linearGradient', {
              id: 'gradient2',
              x1: 1,
              y1: 1,
              x2: 1,
              y2: 1,
            })
            .elem('stop', {
              offset: 0,
              'stop-color': 'rgba(22, 141, 238, 1)',
            })
            .parent()
            .elem('stop', {
              offset: 1,
              'stop-color': 'rgba(98, 188, 270, 11)',
            });
        },
      },
    };
    this.lineAreaWeek = {
      type: 'Line',
      data: ChartData['lineAreaWeek'],

      options: {
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 2,
        }),
        fullwidth: true,
        height: '320px',
        low: 0,
        showArea: true,
        fullWidth: true,
        showPoint: false,
        chartPadding: {
          top: 33,
        },
        axisX: {
          showGrid: false,
        },
        axisY: {
          low: 0,
          scaleMinSpace: 40,
          labelInterpolationFnc: function (value) {
            return value + 'K';
          },
          offset: 20,
        },
      },
      responsiveOptions: [
        [
          'screen and (max-width: 640px) and (min-width: 200px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
              },
            },
          },
        ],
        [
          'screen and (max-width: 380px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 3 === 0 ? value : null;
              },
            },
          },
        ],
      ],
      events: {
        created(data: any): void {
          const defs = data.svg.elem('defs');
          defs
            .elem('linearGradient', {
              id: 'gradient2',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0,
            })
            .elem('stop', {
              offset: 0,
              'stop-color': 'rgba(22, 141, 238, 1)',
            })
            .parent()
            .elem('stop', {
              offset: 1,
              'stop-color': 'rgba(98, 188, 246, 1)',
            });
        },
      },
    };
    this.lineAreaMonth = {
      type: 'Line',
      data: ChartData['lineAreaMonth'],
      options: {
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 2,
        }),
        // low: 650,
        fullwidth: true,
        height: '320px',
        low: 0,
        chartPadding: {
          top: 30,
          left: 0,
          right: 25,
        },
        showArea: true,
        fullWidth: true,
        showPoint: false,
        axisX: {
          showGrid: false,
        },
        axisY: {
          low: 0,
          scaleMinSpace: 60,
          labelInterpolationFnc: function (value) {
            return value + 'K';
          },
        },
      },
      responsiveOptions: [
        [
          'screen and (max-width: 640px) and (min-width: 200px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
              },
            },
          },
        ],
        [
          'screen and (max-width: 380px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 3 === 0 ? value : null;
              },
            },
          },
        ],
      ],
      events: {
        created(data: any): void {
          const defs = data.svg.elem('defs');
          defs
            .elem('linearGradient', {
              id: 'gradient2',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0,
            })
            .elem('stop', {
              offset: 0,
              'stop-color': 'rgba(22, 141, 238, 1)',
            })
            .parent()
            .elem('stop', {
              offset: 1,
              'stop-color': 'rgba(98, 188, 246, 1)',
            });
        },
      },
    };

    this.ecommercesaleslineArea = {
      type: 'Line',
      data: ChartData['lineArea2'],
      options: {
        height: '300px',
        low: 0,
        showArea: true,
        fullWidth: true,
        onlyInteger: true,
        axisX: {
          showGrid: false,
        },
        axisY: {
          low: 0,
          scaleMinSpace: 40,
          showGrid: false,
        },
      },
      responsiveOptions: [
        [
          'screen and (max-width: 640px) and (min-width: 381px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
              },
            },
          },
        ],
        [
          'screen and (max-width: 380px)',
          {
            axisX: {
              labelInterpolationFnc: function (value, index) {
                return index % 3 === 0 ? value : null;
              },
            },
          },
        ],
      ],
      events: {
        draw(data: any): void {
          const circleRadius = 6;
          if (data.type === 'point') {
            const circle = new Chartist.Svg('circle', {
              cx: data.x,
              cy: data.y,
              r: circleRadius,
              class: 'ct-point-circle',
            });
            data.element.replace(circle);
          }
        },
      },
    };

    // Doughnut
    this.donutChart = {
      type: 'Pie',
      data: ChartData.donutDashboard,
      options: {
        width: '100%',
        height: '290px',
        donut: true,
        startAngle: 0,
        low: 0,
        high: 8,
        fullWidth: true,
        plugins: [
          Chartist.plugins.tooltip({
            appendToBody: false,
            class: 'donut_tooltip',
          }),
        ],
        labelInterpolationFnc: function (value) {
          const total = ChartData.donutDashboard.series.reduce(function (
            prev,
            series
          ) {
            return prev + series.value;
          },
          0);
          return total + '%';
        },
      },
      events: {
        draw(data: any): void {
          if (data.type === 'label') {
            if (data.index === 0) {
              data.element.attr({
                dx: data.element.root().width() / 2,
                dy: data.element.root().height() / 2,
              });
            } else {
              data.element.remove();
            }
          }
        },
      },
    };

    ///////////////////// End doughnutchart////////////////
    ///////////////////// Start barchart////////////////
    this.barChart = {
      type: 'Bar',
      data: ChartData['Bar'],
      options: {
        fullwidth: true,
        height: '380px',
        seriesBarDistance: 21,
        chartPadding: {
          top: 0,
        },
        plugins: [
          Chartist.plugins.tooltip({
            appendToBody: false,
            class: 'bar_tooltip',
          }),
        ],
        axisX: {
          showLable: true,
          showGrid: false,
          offset: 60,
          labelInterpolationFnc: function (value) {
            return value.slice(0, 3);
          },
        },

        axisY: {
          scaleMinSpace: 40,
        },
      },
    };
  }
  ///////////////////// End barchart////////////////

  reloadNewOrders() {
    this.blockUINewOrders.start('Loading..');
    setTimeout(() => {
      this.blockUINewOrders.stop();
    }, 2500);
  }
  rotueInvoice() {
    this.route.navigate(['/invoice/invoice-summary']);
  }
  reLoad() {
    this.route.navigate(['/sale']);
  }
}
