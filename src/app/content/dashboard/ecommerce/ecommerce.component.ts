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
import { forkJoin } from 'rxjs';

import { combineLatest } from 'rxjs';

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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';
import { PopupRavShnatiComponent } from '../popup-rav-shnati/popup-rav-shnati.component';
import { PopupPaymentComponent } from '../popup-payment/popup-payment.component';
import { PopupMonthlySummaryComponent } from '../popup-monthly-summary/popup-monthly-summary.component';
import { log } from 'console';
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
  farm_det_new: any[];
  businessLicense: any[];
  theUserDetails: any[];
  FarmId: any[];
  FarmIdOfTheMaingrower: any[];
  FarmDetailsOfTheMaingrower: any[];
  siteName: any = '';
  farm_start_det: any[] = [];
  FarmDetails: any[] = [];
  newArray: any[] = [];
  newArrayEnd: any[] = [];
  siteNameOfTheMaingrower: any[] = [];
  henHouseID: any = '-1';
  isLoading_theUserDetails = false;
  isLoading_FarmDetails = true;
  isLoading_userDet = true;
  isLoading_rav_shnati = false;
  isLoading_monthly = false;

  isLoading_grower_payment = false;
  isLoading_cartificate = false;
  isLoading_grower_cart = false;
  isLoading_micsot = true;
  the_chosen_farm: any;
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
  shloha: any = '30';
  startDay: any = '';
  endDay: any = '';
  siteNum: any = 0;

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

  new_Active_FarmDetails: any[] = [];
  new_Not_Active_FarmDetails: any[] = [];

  public isNotActiveSiteShown: boolean = false;
  public click_on_show_ActiveSite: boolean = true;
  public click_on_not_show_ActiveSite: boolean = false;
  certificates_by_grewernum: any[] = [];
  rav_shnati_det: any[] = [];
  monthly_det: any[] = [];

  grower_payment_det: any[] = [];

  growerCard: any[] = [];
  Get_McsKvua_shloha_30: any[] = [];
  categorizedArrays: any = {};
  keys_of_categorizedArrays: any[] = [];
  thefarmdetOfThemainGrower: any[] = [];
  selectedCategory: string = '';
  notActiveColor: any = false;
  activeColor: any = true;
  new_Small_Array: any[] = [];
  length_of_total_site: any;
  private destroy$ = new Subject<void>();

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
    this.sort_site_by_shloha();

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
      this.isLoading_theUserDetails = true;
      this.isLoading_FarmDetails = true;
      this.isLoading_userDet = true;
      this.isLoading_micsot = true;
      this.isLoading_cartificate = false;
      this.sort_site_by_shloha();

      // Call any necessary functions or perform logic based on the new parameter value
      this.userDetails = JSON.parse(localStorage.getItem('theDetails'));
      this.userDetails = this.userDetails.filter(
        (obj) => obj.v_yzrn_id.toString() === this.idFromurl
      );

      localStorage.setItem('theDetails', JSON.stringify(this.userDetails));

      if (this.userDetails.length === 0) {
        this.userDetails = await this.megadelSearchService.GET_YAZRAN_BY_YZ_ID(
          this.idFromurl
        );

        this.userDetails =
          await this.megadelSearchService.Yzrn_Select_For_Search_Yzrn(
            18,
            this.userDetails[0].yz_yzrn,
            '%',
            '%',
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
      }

      localStorage.setItem('theDetails', JSON.stringify(this.userDetails));

      //   מחלצים פרטים נוספים של היצרן
      this.userDetails_more_info =
        await this.megadelSearchService.Yzrn_Select_By_View_New(
          14,
          this.userDetails[0].v_yzrn,
          '%',
          '%',
          '%',
          '%',
          '%',
          '%',
          '%'
        );

      localStorage.setItem(
        'userDetails_more_info',
        JSON.stringify(this.userDetails_more_info)
      );

      this.isLoading_userDet = false;

      //   לוגיקה התראות -------------------------------------------------------------------

      //   oldNameGrower
      this.oldNameGrower =
        await this.megadelSearchService.Yazran_History_Get_Data(
          this.userDetails[0].v_yzrn,
          'yz_shem'
        );
      // התראה של שם ישן
      if (this.oldNameGrower[0]?.Old_Name_Yazran.length > 0) {
        this.checkOldGrowerName = true;
      }
      // v_SelfConsum_piece4 - אישור שוט וחילוץ מס האישור
      if (this.userDetails_more_info[0]?.v_SelfConsum) {
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
          this.userDetails[0].v_yzrn
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
          this.userDetails[0].v_yzrn,
          CurrentDate,
          0
        );
      const pieces = this.businessLicense[0]?.McsRishaion_Esek.split(',');
      const piece4 = pieces[3];
      const piece1_kamot = pieces[0];
      const piece1_until_date = pieces[2];
      this.businessLicense_all_details = ` רישיון עסק ${piece1_kamot}  עד ${piece1_until_date} `;
      this.shot_confirmation = pieces[3];
      this.McsRishaion_Esek_number_type = parseFloat(
        this.businessLicense[0]?.McsRishaion_Esek
      );
      // רישיון עסק התראה - סיום

      // מכסות ביצים
      this.mihsot = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.v_yzrn,
        this.chosenYear,
        '30 - ביצי מאכל',
        88
      );
      // מכסות ביצים - סיום

      // מכסות פטם
      this.mihsotPetem = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.v_yzrn,
        this.chosenYear,
        '10',
        88
      );
      // מכסות פטם - סיום

      // מכסות הודים
      this.mihsotHodim = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.v_yzrn,
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
      this.isLoading_micsot = true;

      //סה''כ מכסה קבועה:  + סה''כ מכסה לתשלום: -  סיום

      // קנט ושם מגדל ישן
      this.kannatNum_and_oldMegadelNum =
        await this.megadelSearchService.YazrnExtrnl_Get_Code(
          2,
          '',
          this.userDetails[0]?.v_yzrn
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

      this.farm_start_det = await this.megadelSearchService.farm_start_det(
        this.idFromurl
      );
      console.log('fd');

      if (this.farm_start_det.length > 0) {
        for (let obj of this.farm_start_det) {
          var shloha_name = this.getCategoryLabel(
            obj.belonging_group_id.toString()
          );
          obj.shloha_name = shloha_name;
        }
      }

      this.farm_start_det.sort((a, b) => {
        if (a.farm_status_id < b.farm_status_id) {
          return -1;
        } else if (a.farm_status_id > b.farm_status_id) {
          return 1;
        } else {
          return 0;
        }
      });

      console.log(this.farm_start_det);

      this.categorizedArrays = {};

      for (let obj of this.farm_start_det) {
        const belonging_group_id = obj.belonging_group_id;

        // Check if the category array exists, otherwise create a new one
        if (!this.categorizedArrays[belonging_group_id]) {
          this.categorizedArrays[belonging_group_id] = [];
        }

        // Push the object into the respective category array
        await this.categorizedArrays[belonging_group_id].push(obj);
      }

      this.keys_of_categorizedArrays = Object.keys(this.categorizedArrays);

      console.log(this.keys_of_categorizedArrays);

      for (let item of this.farm_start_det) {
        if (item.farm_status_id === 1) {
          this.new_Active_FarmDetails.push(item);
        } else {
          this.new_Not_Active_FarmDetails.push(item);
        }
      }

      this.the_chosen_farm = this.farm_start_det[0].code;

      var newVariable;

      if (this.the_chosen_farm.includes('/')) {
        newVariable = this.the_chosen_farm.split('/')[0];
      } else {
        newVariable = this.the_chosen_farm;
      }

      var growerId = await this.megadelSearchService.get_growerId_By_code_atar(
        newVariable
      );

      var growerId_and_grower_num =
        await this.megadelSearchService.Get_grower_num_and_grower_id_by_grower_id_new(
          growerId[0].grower_id
        );

      console.log('df');

      this.farm_det_new = await this.megadelSearchService.get_farm_det_v2(
        growerId_and_grower_num[0].yz_yzrn,
        growerId_and_grower_num[0].grower_id,
        newVariable
      );
      console.log(this.farm_det_new);

      //   הוספת זנים
      for (let obj of this.farm_det_new) {
        var Get_zan_num = await this.megadelSearchService.Get_zan_num(
          obj.farm_num,
          this.userDetails[0].v_yzrn
        );
        obj.zan_det = Get_zan_num;
      }

      //   הוספת מכסת פרגיות
      for (let obj of this.farm_det_new) {
        var zan_num = obj.zan_det[0].number;
        obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
      }

      //   הוספת ג''ח פר אתר
      for (let obj of this.farm_det_new) {
        var gidul_hotz =
          await this.megadelSearchService.Get_gidul_hotz_num_by_farm_num(
            obj.farm_id
          );
        if (gidul_hotz[0]?.pa_Counter) {
          obj.pa_Counter = gidul_hotz[0].pa_Counter;
        } else {
          obj.pa_Counter = this.userDetails[0]?.cdgdl;
        }
      }

      // הוספת שדה איכלוס
      for (let obj of this.farm_det_new) {
        var hiclos =
          await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
            obj.farm_id,
            this.idFromurl
          );
        if (hiclos[0]?.female_number_f) {
          obj.hiclos_number = hiclos[0].female_number_f;
        } else {
          obj.hiclos_number = '';
        }
      }

      // הוספת שדה איכלוס - 750
      for (let obj of this.farm_det_new) {
        const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
          obj.farm_id
        );
        if (hiclos750[0]?.calc750) {
          obj.calc750 = hiclos750[0]?.calc750;
        }
      }

      console.log(this.farm_det_new);

      //////////////////////////////////////////////////////////////////////////////////////////// סיום עיצוב חדש\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

      localStorage.setItem('siteName', JSON.stringify(this.siteName));

      if (this.siteName.length > 0) {
        // FarmId חילוץ - חילוץ איידי של כל אתר
        this.FarmId = await this.getFarmIdArr(this.siteName);
        console.log('this.FarmId-end: ', this.FarmId);

        // חילוץ פרטי אתרים עי הפארם איידי של היצרן
        this.FarmDetails = await this.getFarmDetailsArr(this.FarmId);

        // מכניסים שדה גידול חוץ לפרטי יוזר
        if (
          this.userDetails[0]?.cdgdl.length === 0 ||
          this.userDetails[0].cdgdl === undefined
        ) {
          this.mainGrower =
            await this.megadelSearchService.Partners_Get_CodeGidul(
              11,
              this.userDetails[0].v_yzrn,
              30,
              this.chosenYear
            );
          if (this.mainGrower[0]?.cdgdl) {
            this.userDetails[0].pa_Counter = this.mainGrower[0].cdgdl;
          }
        }

        this.theUserDetails = this.userDetails[0];
        this.isLoading_userDet = false;
        this.totalFarms = this.FarmDetails.length;
      } else {
        this.FarmDetails = [];
      }

      // חילוץ פרטי אתר עי הפארם איידי -  סיום-----------------------------------------------------------------------------------------

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
        }
        const results2 =
          await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
            farm_id,
            grower_id
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
        if (hiclos750[0]?.calc750) {
          item.calc750 = hiclos750[0]?.calc750;
        }
      }
      // הוספת שדה איכלוס 750- סיום

      this.FarmDetails.sort((a, b) => {
        if (a.farm_code < b.farm_code) {
          return -1;
        } else if (a.farm_code > b.farm_code) {
          return 1;
        } else {
          return 0;
        }
      });

      for (let item of this.FarmDetails) {
        if (item.farm_status_id === 1) {
          this.Active_FarmDetails.push(item);
        } else {
          this.Not_Active_FarmDetails.push(item);
        }
      }

      if (this.Active_FarmDetails.length > 0) {
        this.Active_FarmDetails.sort((a, b) => {
          if (a.farm_code < b.farm_code) {
            return -1;
          } else if (a.farm_code > b.farm_code) {
            return 1;
          } else {
            return 0;
          }
        });

        this.rows = this.Active_FarmDetails;
        this.click_on_show_ActiveSite = true;
        this.click_on_not_show_ActiveSite = false;
      } else {
        this.Active_FarmDetails.sort((a, b) => {
          if (a.farm_code < b.farm_code) {
            return -1;
          } else if (a.farm_code > b.farm_code) {
            return 1;
          } else {
            return 0;
          }
        });
        this.rows = this.Active_FarmDetails;
        this.isNotActiveSiteShown = true;
        this.click_on_show_ActiveSite = false;
        this.click_on_not_show_ActiveSite = true;
      }
      this.isLoading_FarmDetails = false;
    });
  }

  //   ------ onInit end---------------------------------------------------------------------------------------------------------------------

  async get_more_farm_det_by_farm_num(farm_num: any) {
    var newVariable;

    if (farm_num.includes('/')) {
      newVariable = farm_num.split('/')[0];
    } else {
      newVariable = farm_num;
    }

    var growerId = await this.megadelSearchService.get_growerId_By_code_atar(
      newVariable
    );

    var growerId_and_grower_num =
      await this.megadelSearchService.Get_grower_num_and_grower_id_by_grower_id_new(
        growerId[0].grower_id
      );

    this.farm_det_new = await this.megadelSearchService.get_farm_det_v2(
      growerId_and_grower_num[0].yz_yzrn,
      growerId_and_grower_num[0].grower_id,
      newVariable
    );

    //   הוספת זנים
    for (let obj of this.farm_det_new) {
      var Get_zan_num = await this.megadelSearchService.Get_zan_num(
        obj.farm_num,
        this.userDetails[0].v_yzrn
      );
      obj.zan_det = Get_zan_num;
    }

    //   הוספת מכסת פרגיות
    for (let obj of this.farm_det_new) {
      var zan_num = obj.zan_det[0].number;
      obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
    }

    //   הוספת ג''ח פר אתר
    for (let obj of this.farm_det_new) {
      var gidul_hotz =
        await this.megadelSearchService.Get_gidul_hotz_num_by_farm_num(
          obj.farm_id
        );
      if (gidul_hotz[0]?.pa_Counter) {
        obj.pa_Counter = gidul_hotz[0].pa_Counter;
      } else {
        obj.pa_Counter = this.userDetails[0]?.cdgdl;
      }
    }

    // הוספת שדה איכלוס
    for (let obj of this.farm_det_new) {
      var hiclos =
        await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
          obj.farm_id,
          this.idFromurl
        );
      if (hiclos[0]?.female_number_f) {
        obj.hiclos_number = hiclos[0].female_number_f;
      } else {
        obj.hiclos_number = '';
      }
    }

    // הוספת שדה איכלוס - 750
    for (let obj of this.farm_det_new) {
      const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
        obj.farm_id
      );
      if (hiclos750[0]?.calc750) {
        obj.calc750 = hiclos750[0]?.calc750;
      }
    }

    console.log(this.farm_det_new);

    this.the_chosen_farm = farm_num;
  }

  async display_all_sites() {
    this.isLoading_FarmDetails = true;
    for (let obj of this.siteName) {
      this.new_Small_Array.push(obj);
    }

    this.FarmId = await this.getFarmIdArr(this.new_Small_Array);
    console.log('this.FarmId-end: ', this.FarmId);

    // חילוץ פרטי אתרים עי הפארם איידי של היצרן
    this.FarmDetails = await this.getFarmDetailsArr(this.FarmId);
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
      }
      const results2 =
        await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
          farm_id,
          grower_id
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
      if (hiclos750[0]?.calc750) {
        item.calc750 = hiclos750[0]?.calc750;
      }
    }

    // הוספת שדה איכלוס 750- סיום
    this.Active_FarmDetails = [];
    this.Not_Active_FarmDetails = [];
    for (let item of this.FarmDetails) {
      if (item.farm_status_id === 1) {
        this.Active_FarmDetails.push(item);
      } else {
        this.Not_Active_FarmDetails.push(item);
      }
    }

    this.FarmDetails.sort((a, b) => {
      if (a.farm_code < b.farm_code) {
        return -1;
      } else if (a.farm_code > b.farm_code) {
        return 1;
      } else {
        return 0;
      }
    });

    if (this.Active_FarmDetails.length > 0) {
      this.Active_FarmDetails.sort((a, b) => {
        if (a.farm_code < b.farm_code) {
          return -1;
        } else if (a.farm_code > b.farm_code) {
          return 1;
        } else {
          return 0;
        }
      });

      this.rows = this.farm_start_det;
      this.click_on_show_ActiveSite = true;
      this.click_on_not_show_ActiveSite = false;
    } else {
      this.Active_FarmDetails.sort((a, b) => {
        if (a.farm_code < b.farm_code) {
          return -1;
        } else if (a.farm_code > b.farm_code) {
          return 1;
        } else {
          return 0;
        }
      });

      this.rows = this.farm_start_det;
      this.isNotActiveSiteShown = true;
      this.click_on_show_ActiveSite = false;
      this.click_on_not_show_ActiveSite = true;
    }
    this.isLoading_FarmDetails = false;
  }

  async sort_site_by_shloha() {
    // this.categorizedArrays = {};
    // this.FarmDetails.sort((a, b) =>
    //   a.belonging_group_id > b.belonging_group_id ? 1 : -1
    // );
    // for (let obj of this.FarmDetails) {
    //   const belonging_group_id = obj.belonging_group_id;
    //   // Check if the category array exists, otherwise create a new one
    //   if (!this.categorizedArrays[belonging_group_id]) {
    //     this.categorizedArrays[belonging_group_id] = [];
    //   }
    //   // Push the object into the respective category array
    //   await this.categorizedArrays[belonging_group_id].push(obj);
    // }
    // this.keys_of_categorizedArrays = Object.keys(this.categorizedArrays);
  }
  //   --exec Micsa_Get_McsKvua_New @ORDER 	=2 ,@YZRN 	="11303047",@TZ   ='30',@YEAR  =2023, @MCS1 ='1' , @MCS3  ='3' ,@DtSvk='', @tik_McsSys=0
  async Micsa_Get_McsKvua_New_shloha_30_to_Get_McsKvua_shloha_30() {
    this.Get_McsKvua_shloha_30 =
      await this.megadelSearchService.Micsa_Get_McsKvua_New(
        2,
        this.userDetails[0]?.v_yzrn,
        this.shloha,
        this.chosenYear,
        1,
        3,
        '',
        0
      );
    console.log('this.Get_McsKvua_shloha_30: ', this.Get_McsKvua_shloha_30);
  }

  async shows_grower_card() {
    this.Get_McsKvua_shloha_30 =
      await this.megadelSearchService.Micsa_Get_McsKvua_New(
        2,
        this.userDetails[0]?.v_yzrn,
        this.shloha,
        this.chosenYear,
        1,
        3,
        '',
        0
      );

    console.log('this.growerCard: ', this.growerCard);
    this.openPopup_GrowerCard_Component();
  }

  //     -- exec Teuda_Select_New @order=1, @start_year=2023, @start_tzrt=30,@start_yzrn="02060341",@start_date="20230101",@end_date="20231231", @start_list=0,@Rishaion=0
  async shows_certificates_by_grewernum() {
    this.isLoading_cartificate = true;
    this.sort_site_by_shloha();
    this.certificates_by_grewernum =
      await this.megadelSearchService.Teuda_Select_New(
        1,
        this.chosenYear,
        30,
        this.userDetails[0]?.v_yzrn,
        '20230101',
        '20231231',
        0,
        0
      );

    this.openPopup_certificates();
    this.isLoading_cartificate = false;
  }

  // סיכום חודשי
  async shows_monthiy() {
    this.isLoading_monthly = true;
    this.sort_site_by_shloha();

    this.monthly_det = await this.megadelSearchService.Teuda_Calendary(
      4,
      this.chosenYear,
      '30',
      this.userDetails[0]?.v_yzrn,
      0,
      '01',
      '12'
    );
    this.openPopup_monthly();
    console.log('d');

    this.isLoading_monthly = false;
  }

  // רב שנתי
  async shows_rav_shnati() {
    this.isLoading_rav_shnati = true;
    this.sort_site_by_shloha();

    this.rav_shnati_det = await this.megadelSearchService.Bizua_Rav_Shnati_Scr(
      this.chosenYear,
      7,
      this.shloha,
      '20230101',
      '20231231',
      '00',
      '99',
      this.userDetails[0]?.v_yzrn,
      this.userDetails[0]?.v_yzrn,
      '2',
      2019,
      2020,
      2021,
      2022,
      0,
      '00',
      0,
      1,
      '',
      '',
      '',
      0
    );
    this.openPopup_rav_shnati();
    this.isLoading_rav_shnati = false;
  }

  // תשלום
  async shows_grower_payment() {
    this.isLoading_grower_payment = true;
    this.grower_payment_det =
      await this.megadelSearchService.Tkufa_Mhir_Select_New(
        6,
        this.userDetails[0]?.v_yzrn,
        '30',
        '02',
        this.chosenYear,
        ''
      );
    this.openPopup_grower_payment();
    this.isLoading_grower_payment = false;
  }

  // Component class

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

  selectCategory(category: string) {
    this.click_on_not_show_ActiveSite = false;
    this.click_on_show_ActiveSite = false;
    this.selectedCategory = category;
    var value = [];
    value = this.categorizedArrays[category];
    this.farm_start_det = value;
    console.log('s');
  }

  show_ActiveSite() {
    this.selectedCategory = '';
    this.isNotActiveSiteShown = false;
    this.click_on_show_ActiveSite = true;
    this.click_on_not_show_ActiveSite = false;
    this.rows = this.Active_FarmDetails;
    this.notActiveColor = false;
    this.activeColor = true;
  }

  showAllSite() {
    this.selectedCategory = '';
    this.rows = this.FarmDetails;
  }

  show_not_ActiveSite() {
    this.selectedCategory = '';
    this.isNotActiveSiteShown = true;
    this.click_on_show_ActiveSite = false;
    this.click_on_not_show_ActiveSite = true;
    this.rows = this.Not_Active_FarmDetails;
    this.notActiveColor = true;
    this.activeColor = false;
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
    this.isLoading_userDet = true;
    // מכסות ביצים
    this.mihsot = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.v_yzrn,
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
      this.userDetails[0]?.v_yzrn,
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
      this.userDetails[0]?.v_yzrn,
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
    this.isLoading_userDet = false;
  }

  async getPartner(allTheFarmDet) {
    console.log('allTheFarmDet: ', allTheFarmDet);
    console.log('this.newArray2: ', this.newArray);

    for (let obj2 of allTheFarmDet) {
      if (
        obj2?.farm_id !== null &&
        obj2?.active_flock_id !== null &&
        obj2?.lull2000_code !== null
      ) {
        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].v_yzrn,
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

        for (let obj of this.partnerData) {
          var yeshuv =
            await this.megadelSearchService.Get_yz_shem_yeshuv_by_yz_yzrn(
              obj.lull2000_code
            );
          obj.yeshuv = yeshuv[0].yz_shem_yeshuv;
        }

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

        await this.openPopup();
      } else {
        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].v_yzrn,
            30,
            this.chosenYear
          );

        const thefarmdet = [];
        this.partnerData = await this.megadelSearchService.getPartner(
          thefarmdet[0]?.farm_id,
          thefarmdet[0]?.active_flock_id,
          this.mainGrower[0]?.YzrnHead
        );

        for (let obj of this.partnerData) {
          var yeshuv =
            await this.megadelSearchService.Get_yz_shem_yeshuv_by_yz_yzrn(
              obj.lull2000_code
            );
          obj.yeshuv = yeshuv[0].yz_shem_yeshuv;
        }

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
        this.openPopup();
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
    dialogConfig.data = [];
    const dialogRef = this.dialog.open(PopupGrowerCardComponent, dialogConfig);
  }

  async grower_cart() {
    this.isLoading_grower_cart = true;

    var Yazran_Cartis_Select =
      await this.megadelSearchService.Yazran_Cartis_Select(
        2,
        this.userDetails[0].v_yzrn,
        9999,
        '',
        ''
      );
    const sortedArray = Yazran_Cartis_Select.sort((a, b) => b.yr - a.yr);

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

    if (targetIndex4 !== -1 && targetIndex4 !== null && targetIndex4 !== 0) {
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

    if (targetIndex11 !== -1 && targetIndex11 !== null && targetIndex11 !== 0) {
      uniqueObjects.splice(targetIndex11, 1);

      var Teuda_Select_New11 = await this.megadelSearchService.Teuda_Select_New(
        6,
        targetObject11.yr,
        targetObject11.tzrt.toString(),
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

    if (targetIndex30 !== -1 && targetIndex30 !== null && targetIndex30 !== 0) {
      uniqueObjects.splice(targetIndex30, 1);

      var Teuda_Select_New = await this.megadelSearchService.Teuda_Select_New(
        6,
        targetObject30.yr,
        targetObject30.tzrt.toString(),
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

    if (targetIndex1 !== -1 && targetIndex1 !== null && targetIndex1 !== 0) {
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

    if (
      targetObject41 !== -1 &&
      targetObject41 !== null &&
      targetObject41 !== 0
    ) {
      uniqueObjects.splice(targetIndex41, 1);

      var Mdgrot_Teuda41 = await this.megadelSearchService.Mdgrot_Teuda(
        6,
        this.userDetails[0].v_yzrn,
        targetObject41.tzrt.toString(),
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

    if (
      targetObject44 !== -1 &&
      targetObject44 !== null &&
      targetObject44 !== 0
    ) {
      uniqueObjects.splice(targetIndex44, 1);

      var Mdgrot_Teuda44 = await this.megadelSearchService.Mdgrot_Teuda(
        6,
        this.userDetails[0].v_yzrn,
        targetObject44.tzrt.toString(),
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

    if (
      targetObject45 !== -1 &&
      targetObject45 !== null &&
      targetObject45 !== 0
    ) {
      uniqueObjects.splice(targetIndex45, 1);

      var Pargit_Teuda45 = await this.megadelSearchService.Pargit_Teuda(
        4,
        this.userDetails[0].v_yzrn,
        targetObject45.tzrt.toString(),
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

    if (
      targetObject46 !== -1 &&
      targetObject46 !== null &&
      targetObject46 !== 0
    ) {
      uniqueObjects.splice(targetIndex46, 1);

      var Pargit_Teuda46 = await this.megadelSearchService.Pargit_Teuda(
        4,
        this.userDetails[0].v_yzrn,
        targetObject46.tzrt.toString(),
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
      targetObject98 !== null &&
      targetObject98 !== 0
    ) {
      if (targetObject98?.mztbr !== 0) {
        uniqueObjects.splice(targetIndex98, 1);
        var Pargit_Teuda98 = await this.megadelSearchService.Pargit_Teuda(
          4,
          this.userDetails[0].v_yzrn,
          targetObject98.tzrt.toString(),
          targetObject98.yr,
          '',
          '',
          0
        );

        targetObject98.dates = Pargit_Teuda98[0];
        uniqueObjects.push(targetObject98);
      }
    }
    this.openPopup_grower_cart(uniqueObjects);
    console.log('test');
    this.isLoading_grower_cart = false;
  }

  openPopup_grower_cart(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_grower_cart-dialog';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(PopupGrowerCardComponent, dialogConfig);
  }

  openPopup_monthly() {
    this.monthly_det.push({
      grower_Extensions: this.keys_of_categorizedArrays,
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_certificates-dialog';
    dialogConfig.data = this.monthly_det;
    const dialogRef = this.dialog.open(
      PopupMonthlySummaryComponent,
      dialogConfig
    );
  }

  openPopup_rav_shnati() {
    this.rav_shnati_det.push({
      grower_Extensions: this.keys_of_categorizedArrays,
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_certificates-dialog';
    dialogConfig.data = this.rav_shnati_det;
    const dialogRef = this.dialog.open(PopupRavShnatiComponent, dialogConfig);
  }

  openPopup_grower_payment() {
    this.grower_payment_det.push({
      grower_Extensions: this.keys_of_categorizedArrays,
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_certificates-dialog';
    dialogConfig.data = this.grower_payment_det;
    const dialogRef = this.dialog.open(PopupPaymentComponent, dialogConfig);
  }

  openPopup_certificates() {
    this.certificates_by_grewernum.push({
      grower_Extensions: this.keys_of_categorizedArrays,
    });
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
    // console.log('growerID in loadData: ', growerID);
    // await this.data.getGrowerDetails(growerID).subscribe((data) => {
    //   console.log('the_data: ', data);
    //   this.growerData = data[0];
    //   console.log('this.growerData2: ', this.growerData);
    //   this.yzrnHead = this.growerData[0]?.lull2000_code;
    //   if (this.yzrnHead) {
    //     this.dataEgg
    //       .getContactPersonFarmHatala(this.yzrnHead)
    //       .subscribe((data) => {
    //         console.log('data from getContactPersonFarmHatala: ', data);
    //         this.contactPersonFarmData = data;
    //         this.ContactPersonLength = this.contactPersonFarmData.length;
    //       });
    //   }
    // });
    // console.log('this.growerData2: ', this.growerData);
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
