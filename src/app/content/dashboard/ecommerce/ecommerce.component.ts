import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ChartEvent, ChartType } from 'ng-chartist';
import 'chartist-plugin-tooltips';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import {
  PerfectScrollbarDirective,
  PerfectScrollbarComponent,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { SharedServiceService } from '../../../services/shared-service.service';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}
import { BehaviorSubject, Subscription } from 'rxjs';
import { of } from 'rxjs';
import { TableexcelService } from '../../../services/tableexcel.service';
import { ActivatedRoute } from '@angular/router';
import { MegadelSearchService } from '../../../services/MegadelSearch.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { PopupOldGrowerComponent } from '../popup-old-grower/popup-old-grower.component';
import { PopupMoreInfoGrowerComponent } from '../popup-more-info-grower/popup-more-info-grower.component';
import { PopupIzavonComponent } from '../popup-izavon/popup-izavon.component';
import { PopupGrowerOtherAddrComponent } from '../popup-grower-other-addr/popup-grower-other-addr.component';
import { PopupOldGrowerNameComponent } from '../popup-old-grower-name/popup-old-grower-name.component';
import { PopupPetemPartnersComponent } from '../popup-petem-partners/popup-petem-partners.component';
import { PopupCertificatesComponent } from '../popup-certificates/popup-certificates.component';
import { PopupGrowerCardComponent } from '../popup-grower-card/popup-grower-card.component';
import { PopupRavShnatiComponent } from '../popup-rav-shnati/popup-rav-shnati.component';
import { PopupPaymentComponent } from '../popup-payment/popup-payment.component';
import { PopupMonthlySummaryComponent } from '../popup-monthly-summary/popup-monthly-summary.component';
import { PopupPartnersHodimComponent } from '../popup-partners-hodim/popup-partners-hodim.component';
import { PopupShowAllCertificateTransferComponent } from '../popup-show-all-certificate-transfer/popup-show-all-certificate-transfer.component';
import { HttpHeaders } from '@angular/common/http';
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
  the_user_end_partner: any;
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
  growers_num_partners_Array: any[] = [];
  siteNameOfTheMaingrower: any[] = [];
  all_full_farm_det: any[] = [];
  all_full_farm_det_partner: any[] = [];
  site_partners_petem: any[] = [];
  all_certificate_det: any[] = [];
  site_partners_hodim_pitom: any[] = [];
  henHouseID: any = '-1';
  isLoading_theUserDetails = false;
  isLoading_FarmDetails = true;
  isLoading_userDet = true;
  isLoading_micsa_egg_ishit = true;
  isLoading_short_site = true;
  isLoading_micsa_egg_gach = true;
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
  partners_length = 0;
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
  selectedCategory: string = '20';
  notActiveColor: any = false;
  activeColor: any = true;
  new_Small_Array: any[] = [];
  length_of_total_site: any;
  total_hiclos: any = 0;
  total_pargiot: any = 0;
  groupedArray: any = {};
  partners_hodim_by_site: any = [];
  min_date_cartificate_transfer: any;
  constructor(
    private SharedServiceService: SharedServiceService,
    private cdr: ChangeDetectorRef,
    private megadelSearchService: MegadelSearchService,
    private route: Router,
    private route2: ActivatedRoute,
    private tableexcelService: TableexcelService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.min_date_cartificate_transfer = '';
    this.all_certificate_det = [];
    this.partners_hodim_by_site = [];
    this.groupedArray = {};
    this.total_hiclos = 0;
    this.total_pargiot = 0;
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
    this.growers_num_partners_Array = [];
    this.new_Active_FarmDetails = [];
    this.new_Not_Active_FarmDetails = [];
    this.all_full_farm_det_partner = [];
    this.site_partners_hodim_pitom = [];
    this.site_partners_petem = [];
    // this.sort_site_by_shloha();
    this.subscribe_func();
  }

  //   ------ onInit end---------------------------------------------------------------------------------------------------------------------

  async subscribe_func() {
    this.route2.params.subscribe(async (params) => {
      this.min_date_cartificate_transfer = '';
      this.all_certificate_det = [];
      this.partners_hodim_by_site = [];
      this.groupedArray = {};
      this.site_partners_hodim_pitom = [];
      this.site_partners_petem = [];
      this.all_full_farm_det_partner = [];
      this.partners_length = 0;
      this.total_hiclos = 0;
      this.total_pargiot = 0;
      this.farmID2Fromurl = params['farmid'];
      this.flockID2Fromurl = params['flockid'];
      this.idFromurl = params['id'];
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
      this.growers_num_partners_Array = [];
      this.isLoading_theUserDetails = true;
      this.isLoading_FarmDetails = true;
      this.isLoading_userDet = true;
      0;
      this.isLoading_micsot = true;
      this.isLoading_cartificate = false;
      this.new_Active_FarmDetails = [];
      this.new_Not_Active_FarmDetails = [];
      this.sort_site_by_shloha();
      this.userDetails = [];
      //   במידה והוא לא קיים בסטורג' אנו נביא אותו מהיואר אל
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

      // חילוץ מגדל ראשי
      this.mainGrower = await this.megadelSearchService.Partners_Get_CodeGidul(
        11,
        this.userDetails[0].v_yzrn,
        30,
        this.chosenYear
      );

      if (this.mainGrower.length > 0) {
        this.userDetails[0].cdgdl = this.mainGrower[0].cdgdl.toString();
      }

      //חילוץ פרטי אתר אחד של המגדל
      if (this.mainGrower.length > 0) {
        const thefarmdet = await this.getFarmDetailsArr([
          this.mainGrower[0].atar_id,
        ]);

        // Get the current date
        const currentDate = new Date();

        // Set the year to 2022
        currentDate.setFullYear(this.chosenYear);

        // Format the date as a string in the 'YYYY-MM-DDTHH:mm:ss.sss' format
        const formattedDateTime = currentDate.toISOString(); // Result: '2022-08-03T14:30:00.000Z'

        // הבאת שותפים של ג''ח
        this.partnerData = await this.megadelSearchService.getPartner(
          thefarmdet[0]?.farm_id,
          thefarmdet[0]?.active_flock_id,
          this.mainGrower[0]?.YzrnHead,
          formattedDateTime
        );
        this.partners_length = this.partnerData.length;
        this.the_user_end_partner = this.partnerData.find(
          (item) => item.lull2000_code === this.userDetails[0].v_yzrn
        );

        this.growers_num_partners_Array = this.partnerData.map((obj) => ({
          grower_num: obj.lull2000_code,
        }));
      }

      //   הבאת מכסה שותפים
      this.mcsaSum = 0;
      this.eggSum = 0;
      this.certificateSum = 0;
      if (this.partnerData && this.partnerData.length > 0) {
        for (var i = 0; i < this.partnerData.length; i++) {
          this.mcsaSum += parseFloat(this.partnerData[i]['mcsa_sum']);
          this.certificateSum += parseFloat(
            this.partnerData[i]['certificate_sum']
          );
          this.eggSum += parseFloat(this.partnerData[i]['egg_sum']);
        }
      }

      console.log(this.mcsaSum);

      // -------------------------------------------------------------------------------------------------------------------------
      //   לוגיקה התראות --------------------------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------------------------------------------

      // התראה של שם ישן --- מבוטללללללל
      this.oldNameGrower =
        await this.megadelSearchService.Yazran_History_Get_Data(
          this.userDetails[0].v_yzrn,
          'yz_shem'
        );
      if (this.oldNameGrower[0]?.Old_Name_Yazran.length > 0) {
        this.checkOldGrowerName = false;
      }

      // v_SelfConsum_piece4 - אישור שוט וחילוץ מס האישור --------- מבוטלללללללללללל
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
      function getCurrentDateAsString(chosenYear): string {
        const today = new Date();
        // const year = today.getFullYear();
        console.log(chosenYear);
        // const year = today.getFullYear();
        const year = chosenYear;
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const currentDate = `${year}${month}${day}`;
        return currentDate;
      }
      const CurrentDate = await getCurrentDateAsString(this.chosenYear);
      console.log(CurrentDate);

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

      // מכסות ביצים
      this.mihsot = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.v_yzrn,
        this.chosenYear,
        '30 - ביצי מאכל',
        88
      );

      //סה''כ מכסה קבועה:  + סה''כ מכסה לתשלום:
      this.totalMicsaKvoha = 0;
      this.totalMicsaToPay = 0;

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
      this.isLoading_micsa_egg_ishit = false;

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
          i--;
        }
      }

      // -------------------------------------------------------------------------------------------------------------------------
      //  סיום לוגיקה התראות ----------------------------------------------------------------------------------------------------
      // -------------------------------------------------------------------------------------------------------------------------

      // חילוץ אתרי המגדל
      this.farm_start_det = await this.megadelSearchService.farm_start_det(
        this.idFromurl
      );

      this.length_of_total_site = this.farm_start_det.length;

      //   הוספת שם יצרן ללולי מחיצה ראשיים שאין להם שם מגדל
      for (let obj of this.farm_start_det) {
        if (obj.name === null) {
          obj.name = this.userDetails[0].v_shem_yzrn;
        }
      }

      //   יצירת שלוחות של אתרי המגדל
      if (this.farm_start_det.length > 0) {
        for (let obj of this.farm_start_det) {
          var shloha_name = this.getCategoryLabel(
            obj.belonging_group_id.toString()
          );
          obj.shloha_name = shloha_name;
        }
      }

      //   מיון האתרים במערך לפי פעילים לא פעילים
      this.farm_start_det.sort((a, b) => {
        if (a.farm_status_id < b.farm_status_id) {
          return -1;
        } else if (a.farm_status_id > b.farm_status_id) {
          return 1;
        } else {
          return 0;
        }
      });

      //   חילוק אתרים לפי קטגוריות שלוחה
      this.categorizedArrays = {};
      for (let obj of this.farm_start_det) {
        const belonging_group_id = obj.belonging_group_id;
        if (!this.categorizedArrays[belonging_group_id]) {
          this.categorizedArrays[belonging_group_id] = [];
        }
        await this.categorizedArrays[belonging_group_id].push(obj);
      }

      //   יצירת מערך המחזיר את קודי השלוחות של אתרי המגדל
      this.keys_of_categorizedArrays = Object.keys(this.categorizedArrays);
      const hasValueTwenty = this.keys_of_categorizedArrays.includes('20');
      if (hasValueTwenty) {
        this.selectedCategory = '20';
      } else {
        this.selectedCategory = this.keys_of_categorizedArrays[0];
      }

      //   חילוק אתרים לפי פעילים ולא פעילים
      for (let item of this.farm_start_det) {
        if (item.farm_status_id === 1) {
          this.new_Active_FarmDetails.push(item);
        } else {
          this.new_Not_Active_FarmDetails.push(item);
        }
      }

      if (this.categorizedArrays[20] && this.categorizedArrays[20].length > 0) {
        this.farm_start_det = this.categorizedArrays[20];
      }
      this.isLoading_short_site = false;

      // הוספת שדה איכלוס
      for (let obj of this.new_Active_FarmDetails) {
        var hiclos =
          await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
            obj.id,
            this.idFromurl
          );
        if (hiclos[0]?.female_number_f) {
          obj.hiclos_number = hiclos[0].female_number_f;
        } else {
          obj.hiclos_number = '';
        }
        let farm_code_without_slesh = this.extractNumber(obj.code);

        const checkPartners =
          await this.megadelSearchService.Partners_By_Farm_Select(
            7,
            farm_code_without_slesh,
            '19',
            '',
            '20180101',
            '99991231'
          );
        console.log(checkPartners);

        if (checkPartners.length > 1) {
          this.arrPartnersPetem.push({
            numGroup: obj.farm_code,
            partners: checkPartners,
          });
        }
      }

      const checkPartners2 =
        await this.megadelSearchService.get_atar_partnerts_and_partners_all_tzrt_witout_hatala_by_num_yzrn(
          this.userDetails[0]?.v_yzrn
        );
      console.log(checkPartners2);

      this.groupedArray = {};
      checkPartners2.forEach((obj) => {
        const tzrt = obj.Tzrt;
        if (!this.groupedArray[tzrt]) {
          this.groupedArray[tzrt] = [];
        }
        this.groupedArray[tzrt].push(obj);
      });

      console.log(this.groupedArray);

      if (this.groupedArray[22]) {
        const uniqueTzrtSet = new Set();

        this.groupedArray[22].forEach((obj) => {
          uniqueTzrtSet.add(obj.atar_id);
        });
        const uniqueTzrtArray = Array.from(uniqueTzrtSet);
        console.log(uniqueTzrtArray);
        this.site_partners_hodim_pitom = uniqueTzrtArray;
        console.log(this.site_partners_hodim_pitom);
      }

      if (this.groupedArray[19]) {
        const uniqueTzrtSet2 = new Set();

        this.groupedArray[19].forEach((obj) => {
          uniqueTzrtSet2.add(obj.atar_id);
        });
        const uniqueTzrtArray2 = Array.from(uniqueTzrtSet2);
        console.log(uniqueTzrtArray2);
        this.site_partners_petem = uniqueTzrtArray2;
      }

      //   הוספת זנים
      for (let obj of this.new_Active_FarmDetails) {
        if (obj.code.toString().includes('/')) {
          var parts = obj.code.split('/');
          var extractedValue = parts[0];

          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        } else {
          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        }
      }

      //   הוספת מכסת פרגיות
      for (let obj of this.new_Active_FarmDetails) {
        var zan_num = obj.zan_det[0].number;
        obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
      }

      //   הוספת שדה האומר האם האתר הוא מחצה או לא
      for (let obj of this.new_Active_FarmDetails) {
        if (obj.code.includes('/')) {
          obj.is_splite = 1;
        } else {
          obj.is_splite = 0;
        }
      }

      console.log(this.farm_start_det);
      console.log(this.new_Active_FarmDetails);

      if (this.userDetails_more_info[0]?.Rashi === '0') {
        this.total_hiclos = 0;
        this.total_pargiot = 0;
        var main_grower =
          await this.megadelSearchService.get_main_grower_by_code_gidul(
            this.userDetails[0]?.cdgdl
          );
        var grower_id =
          await this.megadelSearchService.get_main_partner_id_from_partner_num(
            main_grower[0]?.pa_YzrnHead
          );

        var growerId_and_grower_num =
          await this.megadelSearchService.Get_grower_num_and_grower_id_by_grower_id_new(
            grower_id[0]?.yz_id
          );

        var farm_start_det = await this.megadelSearchService.farm_start_det(
          grower_id[0]?.yz_id
        );

        if (growerId_and_grower_num) {
          // כאן אנו עובדים על האתרים ההתחלתיים של המגדל ומחזירים מערך עם נתונים המאפשרים לחשב את האיכלוס האישי
          for (let obj of farm_start_det) {
            if (obj.code.toString().includes('/')) {
              var parts = obj.code.split('/');
              var extractedValue = parts[0];

              var farm_det_new_to_count =
                await this.megadelSearchService.get_farm_det_v2(
                  growerId_and_grower_num[0]?.yz_yzrn,
                  growerId_and_grower_num[0]?.grower_id,
                  extractedValue
                );

              farm_det_new_to_count[0].farm_code_with_slesh = obj.code;

              this.all_full_farm_det_partner.push(farm_det_new_to_count[0]);
            } else {
              var farm_det_new_to_count =
                await this.megadelSearchService.get_farm_det_v2(
                  growerId_and_grower_num[0]?.yz_yzrn,
                  growerId_and_grower_num[0]?.grower_id,
                  obj.code
                );
              this.all_full_farm_det_partner.push(farm_det_new_to_count[0]);
            }
          }
          for (let obj of this.all_full_farm_det_partner) {
            if (obj !== undefined) {
              if (this.userDetails[0].Rashi !== '2') {
                // הוספת שדה איכלוס
                var real_hiclos_by_site =
                  await this.megadelSearchService.get_real_hiclos_in_site(
                    obj?.farm_num,
                    obj?.flock_num,
                    this.mainGrower[0]?.YzrnHead
                  );
                this.all_certificate_det = [
                  ...this.all_certificate_det,
                  ...real_hiclos_by_site,
                ];
                console.log(this.all_certificate_det);

                var count_hiclos = 0;
                for (let obj2 of real_hiclos_by_site) {
                  if (obj2.chicken_sum_female) {
                    count_hiclos += Number(obj2.chicken_sum_female);
                  }
                }
                console.log(count_hiclos);
                obj.count_hiclos = count_hiclos;
                //   }
                // }
              }
            }
          }

          for (let obj of this.all_full_farm_det_partner) {
            if (obj !== undefined) {
              if (obj.is_hen_house_split === 1 && obj.farm_code_with_slesh) {
                if (obj.count_hiclos) {
                  this.total_hiclos += obj.count_hiclos;
                }
              }
            }
          }

          console.log(this.total_hiclos);

          var new_Active_FarmDetails = [];
          var new_Not_Active_FarmDetails = [];

          //   חילוק אתרים לפי פעילים ולא פעילים
          for (let item of farm_start_det) {
            if (item.farm_status_id === 1) {
              new_Active_FarmDetails.push(item);
            } else {
              new_Not_Active_FarmDetails.push(item);
            }
          }

          // הוספת שדה איכלוס
          for (let obj of new_Active_FarmDetails) {
            var hiclos =
              await this.megadelSearchService.get_hiclos_by_growerId_and_farmId(
                obj.id,
                growerId_and_grower_num[0]?.grower_id
              );
            if (hiclos[0]?.female_number_f) {
              obj.hiclos_number = hiclos[0].female_number_f;
            } else {
              obj.hiclos_number = '';
            }
          }

          //   הוספת זנים
          for (let obj of new_Active_FarmDetails) {
            if (obj.code.toString().includes('/')) {
              var parts = obj.code.split('/');
              var extractedValue = parts[0];

              var Get_zan_num = await this.megadelSearchService.Get_zan_num(
                obj.id,
                main_grower[0]?.pa_YzrnHead,
                this.min_date_cartificate_transfer
              );
              obj.zan_det = Get_zan_num;
            } else {
              var Get_zan_num = await this.megadelSearchService.Get_zan_num(
                obj.id,
                main_grower[0]?.pa_YzrnHead,
                this.min_date_cartificate_transfer
              );
              obj.zan_det = Get_zan_num;
            }
          }

          // מכסות ביצים
          var mihsot = await this.megadelSearchService.Micsa_Select_New(
            5,
            main_grower[0]?.pa_YzrnHead,
            this.chosenYear,
            '30 - ביצי מאכל',
            88
          );

          //סה''כ מכסה קבועה:  + סה''כ מכסה לתשלום:
          var totalMicsaKvoha = 0;
          var totalMicsaToPay = 0;

          for (const iterator of mihsot) {
            if (
              iterator.mi_sug_mcsa === '1 ' ||
              iterator.mi_sug_mcsa === '2 ' ||
              iterator.mi_sug_mcsa === '3 ' ||
              iterator.mi_sug_mcsa === '1' ||
              iterator.mi_sug_mcsa === '2' ||
              iterator.mi_sug_mcsa === '3'
            ) {
              totalMicsaKvoha += iterator.mi_kamut;
            }
            if (
              iterator.mi_sug_mcsa === '4 ' ||
              iterator.mi_sug_mcsa === '4' ||
              iterator.mi_sug_mcsa === '11' ||
              iterator.mi_sug_mcsa === '11 ' ||
              iterator.mi_sug_mcsa === '5' ||
              iterator.mi_sug_mcsa === '5 '
            ) {
              totalMicsaToPay += iterator.mi_kamut;
            }
          }

          //   הוספת מכסת פרגיות
          for (let obj of new_Active_FarmDetails) {
            var zan_num = obj.zan_det[0].number;
            obj.micsat_pargiot = totalMicsaKvoha / zan_num;
          }

          for (let obj of new_Active_FarmDetails) {
            if (
              obj.is_not_allow_population_hatcher === 1 ||
              obj.is_splite === 1
            ) {
              if (typeof obj.micsat_pargiot === 'number') {
                this.total_pargiot += parseFloat(obj.micsat_pargiot.toFixed(2));
              }
            }
          }
          this.total_pargiot = this.mcsaSum / zan_num;

          console.log(this.all_full_farm_det_partner);

          function isObjectEqual(obj1: any, obj2: any): boolean {
            console.log(obj1);
            console.log(obj2);

            if (obj1 !== undefined && obj2 !== undefined) {
              return obj1.farm_num === obj2.farm_num;
            }
          }

          const uniqueArrayOfObjects = this.all_full_farm_det_partner.filter(
            (item, index, self) => {
              return (
                self.findIndex((obj) => isObjectEqual(obj, item)) === index
              );
            }
          );

          console.log(uniqueArrayOfObjects);

          this.all_full_farm_det_partner = uniqueArrayOfObjects;
          console.log(this.all_full_farm_det_partner);
        }
      } else {
        // חישוב טוטל איכלוס וטוטל איכלוס פרגיות מהאתרים הפעילים העומדים בתנאים
        for (let obj of this.new_Active_FarmDetails) {
          if (
            obj.is_not_allow_population_hatcher === 1 ||
            obj.is_splite === 1
          ) {
            if (typeof obj.micsat_pargiot === 'number') {
              this.total_pargiot += parseFloat(obj.micsat_pargiot.toFixed(2));
            }
          }
        }

        this.total_pargiot = this.mcsaSum / zan_num;
      }
      this.isLoading_micsa_egg_gach = false;

      //   תנאי במידה ויש אתרים למגדל
      if (this.farm_start_det && this.farm_start_det[0]) {
        // הכנסת אתר פעיל לפרטי אתר מפורטים בטעינת המסך
        if (this.farm_start_det[0].farm_status_id === 2) {
          this.the_chosen_farm = '';
        } else {
          this.the_chosen_farm = this.farm_start_det[0]?.code;
        }

        var newVariable;

        if (this.the_chosen_farm.includes('/')) {
          newVariable = this.the_chosen_farm.split('/')[0];
        } else {
          newVariable = this.the_chosen_farm;
        }

        // חילוץ איידי מגדל לפי מס אתר
        var growerId =
          await this.megadelSearchService.get_growerId_By_code_atar(
            newVariable
          );

        // מכיוון שאין למגדל אתר  growerId במידה ואין
        // אנו נחלץ את המגדל הראשי
        if (growerId.length === 0) {
          var main_grower =
            await this.megadelSearchService.get_main_grower_by_code_gidul(
              this.userDetails[0]?.cdgdl
            );

          growerId =
            await this.megadelSearchService.get_main_partner_id_from_partner_num(
              main_grower[0]?.pa_YzrnHead
            );

          var growerId_and_grower_num =
            await this.megadelSearchService.Get_grower_num_and_grower_id_by_grower_id_new(
              growerId[0]?.yz_id
            );

          this.farm_det_new = await this.megadelSearchService.get_farm_det_v2(
            growerId_and_grower_num[0]?.yz_yzrn,
            growerId_and_grower_num[0]?.grower_id,
            newVariable
          );
        } else {
          var growerId_and_grower_num =
            await this.megadelSearchService.Get_grower_num_and_grower_id_by_grower_id_new(
              growerId[0]?.grower_id
            );

          this.farm_det_new = await this.megadelSearchService.get_farm_det_v2(
            growerId_and_grower_num[0]?.yz_yzrn,
            growerId_and_grower_num[0]?.grower_id,
            newVariable
          );
        }
      }

      if (this.farm_det_new) {
        // הוספת שם אתר מחיצה
        for (let obj of this.farm_det_new) {
          if (obj.is_hen_house_split === 1) {
            var split_site_name =
              await this.megadelSearchService.Get_split_site_name_by_grower_id(
                this.userDetails[0]?.v_yzrn_id
              );

            console.log(split_site_name);

            obj.farm_num = split_site_name[0].code;
          }
        }

        //   הוספת מספר מבנים
        for (let obj of this.farm_det_new) {
          var num_lolim =
            await this.megadelSearchService.get_num_of_lolim_by_farm_id(
              obj.farm_id
            );

          if (num_lolim[0]?.Column1) {
            obj.num_lolim = num_lolim[0]?.Column1;
          } else {
            obj.num_lolim = '';
          }
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
          var test = obj.farm_num.toString();
          if (obj.farm_num.toString().includes('/')) {
            newVariable = obj.farm_num.split('/')[0];
            const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
              newVariable
            );
            if (hiclos750[0]?.calc750) {
              obj.calc750 = hiclos750[0]?.calc750;
            }
          } else {
            const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
              obj.farm_num
            );
            if (hiclos750[0]?.calc750) {
              obj.calc750 = hiclos750[0]?.calc750;
            }
          }
        }

        // הוספת משווק צמוד
        for (let obj of this.farm_det_new) {
          var msvk_zamud = await this.megadelSearchService.get_msvk_zamud(
            this.userDetails[0].v_yzrn,
            obj.farm_id
          );

          if (msvk_zamud[0]) {
            var splitArray: any[] = msvk_zamud[0].msvk_zamud.split('-');
            obj.msvk_zamud = splitArray[1];
            obj.were_house = splitArray[3];
          } else {
            obj.msvk_zamud = '';
            obj.were_house = '';
          }
        }

        // הוספת איכלוס טוטל פר אתר כולל מחיצות
        for (let obj of this.farm_det_new) {
          if (obj !== undefined) {
            if (obj.farm_num.toString().includes('/')) {
              var parts = obj.farm_num.split('/');
              var farm_num = parts[0];

              var real_hiclos_by_site =
                await this.megadelSearchService.get_real_hiclos_in_site_splite(
                  farm_num,
                  obj?.flock_num,
                  this.userDetails[0]?.v_yzrn,
                  obj.farm_num
                );

              const dateArray = real_hiclos_by_site.map(
                (item) => item.create_date
              );
              const minDate = dateArray.reduce((min, current) =>
                current < min ? current : min
              );
              console.log(minDate);
              this.min_date_cartificate_transfer = minDate;

              this.all_certificate_det = [
                ...this.all_certificate_det,
                ...real_hiclos_by_site,
              ];
              console.log(this.all_certificate_det);
            } else {
              var real_hiclos_by_site =
                await this.megadelSearchService.get_real_hiclos_in_site(
                  obj?.farm_num,
                  obj?.flock_num,
                  this.userDetails[0]?.v_yzrn
                );
              if (real_hiclos_by_site.length > 0) {
                const dateArray = real_hiclos_by_site.map(
                  (item) => item.create_date
                );
                const minDate = dateArray.reduce((min, current) =>
                  current < min ? current : min
                );
                console.log(minDate);
                this.min_date_cartificate_transfer = minDate;
              }

              this.all_certificate_det = [
                ...this.all_certificate_det,
                ...real_hiclos_by_site,
              ];
            }
            var count_hiclos = 0;
            for (let obj2 of real_hiclos_by_site) {
              if (obj2.chicken_sum_female) {
                count_hiclos += Number(obj2.chicken_sum_female);
              }
            }
            obj.count_hiclos_total_site = count_hiclos;
          }
        }

        //   הוספת זנים
        for (let obj of this.farm_det_new) {
          if (obj.farm_num.toString().includes('/')) {
            var parts = obj.farm_num.split('/');
            var extractedValue = parts[0];

            var Get_zan_num = await this.megadelSearchService.Get_zan_num(
              obj.farm_id,
              this.userDetails[0].v_yzrn,
              this.min_date_cartificate_transfer
            );
            obj.zan_det = Get_zan_num;
          } else {
            var Get_zan_num = await this.megadelSearchService.Get_zan_num(
              obj.farm_id,
              this.userDetails[0].v_yzrn,
              this.min_date_cartificate_transfer
            );
            obj.zan_det = Get_zan_num;
          }
        }

        //   הוספת מכסת פרגיות
        for (let obj of this.farm_det_new) {
          var zan_num = obj.zan_det[0].number;
          obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
        }

        // טוטל איכלוס פרגיות
        for (let obj of this.farm_det_new) {
          if (typeof obj.micsat_pargiot === 'number') {
            this.total_pargiot += parseFloat(obj.micsat_pargiot.toFixed(2));
          }
        }
        // סיום ותצוגה של הפרטי אתר המורחבים

        if (growerId_and_grower_num) {
          //   עובדים על האתרים ההתחלתיים של המגדל ומחזירים מערך עם נתונים המאפשרים לחשב את האיכלוס האישי
          for (let obj of this.farm_start_det) {
            if (obj.code.toString().includes('/')) {
              var parts = obj.code.split('/');
              var extractedValue = parts[0];
              var farm_det_new_to_count =
                await this.megadelSearchService.get_farm_det_v2(
                  growerId_and_grower_num[0]?.yz_yzrn,
                  growerId_and_grower_num[0]?.grower_id,
                  extractedValue
                );

              farm_det_new_to_count[0].farm_code_with_slesh = obj.code;

              this.all_full_farm_det.push(farm_det_new_to_count[0]);
            } else {
              var farm_det_new_to_count =
                await this.megadelSearchService.get_farm_det_v2(
                  growerId_and_grower_num[0]?.yz_yzrn,
                  growerId_and_grower_num[0]?.grower_id,
                  obj.code
                );
              this.all_full_farm_det.push(farm_det_new_to_count[0]);
            }
          }

          //   הוספת שדה איכלוס ומשתנה איכלוס טוטל כל האתרים
          if (this.all_full_farm_det[0] !== undefined) {
            for (let obj of this.all_full_farm_det) {
              if (obj !== undefined) {
                if (obj.farm_code_with_slesh) {
                  var real_hiclos_by_site =
                    await this.megadelSearchService.get_real_hiclos_in_site_splite(
                      obj?.farm_num,
                      obj?.flock_num,
                      this.userDetails[0]?.v_yzrn,
                      obj.farm_code_with_slesh
                    );

                  var count_hiclos = 0;
                  for (let obj2 of real_hiclos_by_site) {
                    if (obj2.chicken_sum_female) {
                      count_hiclos += Number(obj2.chicken_sum_female);
                    }
                  }
                  obj.count_hiclos = count_hiclos;
                } else {
                  var real_hiclos_by_site =
                    await this.megadelSearchService.get_real_hiclos_in_site(
                      obj?.farm_num,
                      obj?.flock_num,
                      this.userDetails[0]?.v_yzrn
                    );

                  this.all_certificate_det = [
                    ...this.all_certificate_det,
                    ...real_hiclos_by_site,
                  ];

                  var count_hiclos = 0;
                  for (let obj2 of real_hiclos_by_site) {
                    if (obj2.chicken_sum_female) {
                      count_hiclos += Number(obj2.chicken_sum_female);
                    }
                  }

                  obj.count_hiclos = count_hiclos;
                }
              }
            }

            for (let obj of this.all_full_farm_det) {
              if (obj !== undefined) {
                // if (obj.is_hen_house_split === 1 && obj.farm_code_with_slesh) {
                if (obj.count_hiclos) {
                  this.total_hiclos += obj.count_hiclos;
                }
                // }
              }
            }
          }
        }

        this.farm_det_new[0].farm_num = farm_num;

        this.isLoading_FarmDetails = false;
      }
    });
  }

  async get_more_farm_det_by_farm_num(farm_num: any) {
    console.log(farm_num);

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

    this.farm_det_new[0].farm_num = farm_num;

    if (this.farm_det_new.length > 0) {
      for (let obj of this.farm_det_new) {
        if (obj.farm_num.toString().includes('/')) {
          var parts = obj.farm_num.split('/');
          var extractedValue = parts[0];

          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        } else {
          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        }
      }

      //   הוספת מכסת פרגיות
      for (let obj of this.farm_det_new) {
        var zan_num = obj.zan_det[0].number;
        obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
      }

      //   הוספת מספר מבנים
      for (let obj of this.farm_det_new) {
        var num_lolim =
          await this.megadelSearchService.get_num_of_lolim_by_farm_id(
            obj.farm_id
          );

        if (num_lolim[0]?.Column1) {
          obj.num_lolim = num_lolim[0]?.Column1;
        } else {
          obj.num_lolim = '';
        }
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

      // הוספת משווק צמוד
      for (let obj of this.farm_det_new) {
        var msvk_zamud = await this.megadelSearchService.get_msvk_zamud(
          this.userDetails[0].v_yzrn,
          obj.farm_id
        );

        if (msvk_zamud[0]) {
          var splitArray: any[] = msvk_zamud[0].msvk_zamud.split('-');
          console.log(splitArray);
          obj.msvk_zamud = splitArray[1];
          obj.were_house = splitArray[3];
        } else {
          obj.msvk_zamud = '';
          obj.were_house = '';
        }
      }

      // הוספת איכלוס טוטל פר אתר כולל מחיצות
      for (let obj of this.farm_det_new) {
        if (obj !== undefined) {
          if (obj.farm_num.toString().includes('/')) {
            var parts = obj.farm_num.split('/');
            var farm_num = parts[0];

            var real_hiclos_by_site =
              await this.megadelSearchService.get_real_hiclos_in_site_splite(
                farm_num,
                obj?.flock_num,
                this.userDetails[0]?.v_yzrn,
                obj.farm_num
              );

            const dateArray = real_hiclos_by_site.map(
              (item) => item.create_date
            );
            const minDate = dateArray.reduce((min, current) =>
              current < min ? current : min
            );
            this.min_date_cartificate_transfer = minDate;

            this.all_certificate_det = [
              ...this.all_certificate_det,
              ...real_hiclos_by_site,
            ];
          } else {
            var real_hiclos_by_site =
              await this.megadelSearchService.get_real_hiclos_in_site(
                obj?.farm_num,
                obj?.flock_num,
                this.userDetails[0]?.v_yzrn
              );

            const dateArray = real_hiclos_by_site.map(
              (item) => item.create_date
            );
            const minDate = dateArray.reduce((min, current) =>
              current < min ? current : min
            );
            console.log(minDate);
            this.min_date_cartificate_transfer = minDate;

            this.all_certificate_det = [
              ...this.all_certificate_det,
              ...real_hiclos_by_site,
            ];
          }
          var count_hiclos = 0;
          for (let obj2 of real_hiclos_by_site) {
            if (obj2.chicken_sum_female) {
              count_hiclos += Number(obj2.chicken_sum_female);
            }
          }
          obj.count_hiclos_total_site = count_hiclos;
        }
      }

      //   הוספת זנים
      for (let obj of this.farm_det_new) {
        if (obj.farm_num.toString().includes('/')) {
          var parts = obj.farm_num.split('/');
          var extractedValue = parts[0];

          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        } else {
          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        }
      }

      //   הוספת מכסת פרגיות
      for (let obj of this.farm_det_new) {
        var zan_num = obj.zan_det[0].number;
        obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
      }

      //   טוטל איכלוס פרגיות
      for (let obj of this.farm_det_new) {
        if (typeof obj.micsat_pargiot === 'number') {
          this.total_pargiot += parseFloat(obj.micsat_pargiot.toFixed(2));
        }
      }

      if (growerId_and_grower_num) {
        //   עובדים על האתרים ההתחלתיים של המגדל ומחזירים מערך עם נתונים המאפשרים לחשב את האיכלוס האישי
        for (let obj of this.farm_start_det) {
          if (obj.code.toString().includes('/')) {
            var parts = obj.code.split('/');
            var extractedValue = parts[0];
            var farm_det_new_to_count =
              await this.megadelSearchService.get_farm_det_v2(
                growerId_and_grower_num[0]?.yz_yzrn,
                growerId_and_grower_num[0]?.grower_id,
                extractedValue
              );

            farm_det_new_to_count[0].farm_code_with_slesh = obj.code;

            this.all_full_farm_det.push(farm_det_new_to_count[0]);
          } else {
            var farm_det_new_to_count =
              await this.megadelSearchService.get_farm_det_v2(
                growerId_and_grower_num[0]?.yz_yzrn,
                growerId_and_grower_num[0]?.grower_id,
                obj.code
              );
            this.all_full_farm_det.push(farm_det_new_to_count[0]);
          }
        }

        //   הוספת שדה איכלוס ומשתנה איכלוס טוטל כל האתרים
        if (this.all_full_farm_det[0] !== undefined) {
          for (let obj of this.all_full_farm_det) {
            if (obj !== undefined) {
              if (obj.farm_code_with_slesh) {
                var real_hiclos_by_site =
                  await this.megadelSearchService.get_real_hiclos_in_site_splite(
                    obj?.farm_num,
                    obj?.flock_num,
                    this.userDetails[0]?.v_yzrn,
                    obj.farm_code_with_slesh
                  );

                var count_hiclos = 0;
                for (let obj2 of real_hiclos_by_site) {
                  if (obj2.chicken_sum_female) {
                    count_hiclos += Number(obj2.chicken_sum_female);
                  }
                }
                obj.count_hiclos = count_hiclos;
              } else {
                var real_hiclos_by_site =
                  await this.megadelSearchService.get_real_hiclos_in_site(
                    obj?.farm_num,
                    obj?.flock_num,
                    this.userDetails[0]?.v_yzrn
                  );

                this.all_certificate_det = [
                  ...this.all_certificate_det,
                  ...real_hiclos_by_site,
                ];

                var count_hiclos = 0;
                for (let obj2 of real_hiclos_by_site) {
                  if (obj2.chicken_sum_female) {
                    count_hiclos += Number(obj2.chicken_sum_female);
                  }
                }

                obj.count_hiclos = count_hiclos;
              }
            }
          }

          for (let obj of this.all_full_farm_det) {
            if (obj !== undefined) {
              // if (obj.is_hen_house_split === 1 && obj.farm_code_with_slesh) {
              if (obj.count_hiclos) {
                this.total_hiclos += obj.count_hiclos;
              }
              // }
            }
          }
        }
      }

      this.farm_det_new[0].farm_num = farm_num;
    }
    this.the_chosen_farm = farm_num;
  }

  async display_all_sites() {
    this.isLoading_FarmDetails = true;
    for (let obj of this.siteName) {
      this.new_Small_Array.push(obj);
    }

    this.FarmId = await this.getFarmIdArr(this.new_Small_Array);

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
  }

  async sort_site_by_shloha() {}

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
        `${this.chosenYear}0101`,
        `${this.chosenYear}1231`,
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
      `${this.chosenYear}0101`,
      `${this.chosenYear}1231`,
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

  async selectCategory(category: string) {
    if (category !== '20') {
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
      this.mihsot = [];
      console.log('this.mihsotPetem: ', this.mihsotHodim);
    } else {
      this.mihsotHodim = [];
      this.mihsotPetem = [];
      this.mihsot = await this.megadelSearchService.Micsa_Select_New(
        5,
        this.userDetails[0]?.v_yzrn,
        this.chosenYear,
        '30 - ביצי מאכל',
        88
      );
    }
    this.click_on_not_show_ActiveSite = false;
    this.click_on_show_ActiveSite = false;
    this.selectedCategory = category;
    var value = [];
    value = this.categorizedArrays[category];
    this.farm_start_det = value;

    this.the_chosen_farm = this.farm_start_det[0]?.code;

    this.isLoading_short_site = false;

    var newVariable;

    if (this.the_chosen_farm.includes('/')) {
      newVariable = this.the_chosen_farm.split('/')[0];
    } else {
      newVariable = this.the_chosen_farm;
    }

    var growerId = await this.megadelSearchService.get_growerId_By_code_atar(
      newVariable
    );
    if (growerId.length > 0) {
      var growerId_and_grower_num =
        await this.megadelSearchService.Get_grower_num_and_grower_id_by_grower_id_new(
          growerId[0]?.grower_id
        );

      this.farm_det_new = await this.megadelSearchService.get_farm_det_v2(
        growerId_and_grower_num[0]?.yz_yzrn,
        growerId_and_grower_num[0]?.grower_id,
        newVariable
      );
    } else {
      this.farm_det_new = [];
    }

    if (this.farm_det_new) {
      for (let obj of this.farm_det_new) {
        if (obj.is_hen_house_split === 1) {
          var split_site_name =
            await this.megadelSearchService.Get_split_site_name_by_grower_id(
              this.userDetails[0]?.v_yzrn_id
            );
          obj.farm_num = split_site_name[0].code;
        }
      }

      //   הוספת זנים
      for (let obj of this.farm_det_new) {
        if (obj.farm_num.toString().includes('/')) {
          var parts = obj.farm_num.split('/');
          var extractedValue = parts[0];

          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        } else {
          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        }
      }
      //   הוספת מכסת פרגיות
      for (let obj of this.farm_det_new) {
        var zan_num = obj.zan_det[0].number;
        obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
      }

      //   הוספת מספר מבנים
      for (let obj of this.farm_det_new) {
        var num_lolim =
          await this.megadelSearchService.get_num_of_lolim_by_farm_id(
            obj.farm_id
          );

        if (num_lolim[0]?.Column1) {
          obj.num_lolim = num_lolim[0]?.Column1;
        } else {
          obj.num_lolim = '';
        }
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
        if (obj.farm_num.toString().includes('/')) {
          newVariable = obj.farm_num.split('/')[0];
          const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
            newVariable
          );
          if (hiclos750[0]?.calc750) {
            obj.calc750 = hiclos750[0]?.calc750;
          }
        } else {
          const hiclos750 = await this.megadelSearchService.get_calc_750_eran(
            obj.farm_num
          );
          if (hiclos750[0]?.calc750) {
            obj.calc750 = hiclos750[0]?.calc750;
          }
        }
      }

      // הוספת משווק צמוד
      for (let obj of this.farm_det_new) {
        var msvk_zamud = await this.megadelSearchService.get_msvk_zamud(
          this.userDetails[0].v_yzrn,
          obj.farm_id
        );
        if (msvk_zamud[0]) {
          var splitArray: any[] = msvk_zamud[0].msvk_zamud.split('-');
          console.log(splitArray);
          obj.msvk_zamud = splitArray[1];
          obj.were_house = splitArray[3];
        } else {
          obj.msvk_zamud = '';
          obj.were_house = '';
        }
      }

      // הוספת איכלוס טוטל פר אתר כולל מחיצות
      for (let obj of this.farm_det_new) {
        if (obj !== undefined) {
          if (obj.farm_num.toString().includes('/')) {
            var parts = obj.farm_num.split('/');
            var farm_num = parts[0];

            var real_hiclos_by_site =
              await this.megadelSearchService.get_real_hiclos_in_site_splite(
                farm_num,
                obj?.flock_num,
                this.userDetails[0]?.v_yzrn,
                obj.farm_num
              );

            const dateArray = real_hiclos_by_site.map(
              (item) => item.create_date
            );
            const minDate = dateArray.reduce((min, current) =>
              current < min ? current : min
            );
            this.min_date_cartificate_transfer = minDate;
            this.all_certificate_det = [
              ...this.all_certificate_det,
              ...real_hiclos_by_site,
            ];
          } else {
            var real_hiclos_by_site =
              await this.megadelSearchService.get_real_hiclos_in_site(
                obj?.farm_num,
                obj?.flock_num,
                this.userDetails[0]?.v_yzrn
              );

            const dateArray = real_hiclos_by_site.map(
              (item) => item.create_date
            );
            const minDate = dateArray.reduce((min, current) =>
              current < min ? current : min
            );
            console.log(minDate);
            this.min_date_cartificate_transfer = minDate;

            this.all_certificate_det = [
              ...this.all_certificate_det,
              ...real_hiclos_by_site,
            ];
          }
          var count_hiclos = 0;
          for (let obj2 of real_hiclos_by_site) {
            if (obj2.chicken_sum_female) {
              count_hiclos += Number(obj2.chicken_sum_female);
            }
          }
          obj.count_hiclos_total_site = count_hiclos;
        }
      }

      //   הוספת זנים
      for (let obj of this.farm_det_new) {
        if (obj.farm_num.toString().includes('/')) {
          var parts = obj.farm_num.split('/');
          var extractedValue = parts[0];

          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        } else {
          var Get_zan_num = await this.megadelSearchService.Get_zan_num(
            obj.farm_id,
            this.userDetails[0].v_yzrn,
            this.min_date_cartificate_transfer
          );
          obj.zan_det = Get_zan_num;
        }
      }

      //   הוספת מכסת פרגיות
      for (let obj of this.farm_det_new) {
        var zan_num = obj.zan_det[0].number;
        obj.micsat_pargiot = this.totalMicsaKvoha / zan_num;
      }

      //טוטל איכלוס פרגיות
      for (let obj of this.farm_det_new) {
        if (typeof obj.micsat_pargiot === 'number') {
          this.total_pargiot += parseFloat(obj.micsat_pargiot.toFixed(2));
        }
      }

      this.farm_det_new[0].farm_num = farm_num;

      console.log(this.all_full_farm_det);

      //////////////////////////////////////////////////////////////////////////////////////////// סיום עיצוב חדש\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      // חילוץ פרטי אתר עי הפארם איידי -  סיום-----------------------------------------------------------------------------------------
    }
  }

  //   פונ המראה רק אתרים פעילים
  show_ActiveSite() {
    this.selectedCategory = '';
    this.isNotActiveSiteShown = false;
    this.click_on_show_ActiveSite = true;
    this.click_on_not_show_ActiveSite = false;
    this.rows = this.Active_FarmDetails;
    this.notActiveColor = false;
    this.activeColor = true;
  }

  //   פונ המראה את כל האתרים
  showAllSite() {
    this.selectedCategory = '';
    this.rows = this.FarmDetails;
  }

  //   פונ המראה אתרים לא פעילים
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

  async onYearChange2() {
    console.log(this.chosenYear);
    this.subscribe_func();
  }

  //   פונ המראה נתונים אחרים כאשר בוחרים שנה
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

    // מכסות פטם
    this.mihsotPetem = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.v_yzrn,
      this.chosenYear,
      '10',
      88
    );

    // מכסות הודים
    this.mihsotHodim = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.v_yzrn,
      this.chosenYear,
      '01',
      88
    );

    this.totalMicsaKvoha = 0;
    this.totalMicsaToPay = 0;

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
    this.cdr.detectChanges();
    this.isLoading_userDet = false;
  }

  async getPartner_pitom_or_hodim(atar_num) {
    console.log('atar_num: ', atar_num);
    console.log(this.groupedArray[22]);
    this.partners_hodim_by_site = this.groupedArray[22].filter(
      (obj) => obj.atar_id === atar_num
    );
    console.log(this.partners_hodim_by_site);
    this.open_PopupPartnersHodimComponent(this.partners_hodim_by_site);
  }

  async getPartner(allTheFarmDet) {
    for (let obj2 of allTheFarmDet) {
      if (
        obj2?.farm_id !== null &&
        obj2?.active_flock_id !== null &&
        obj2?.lull2000_code !== null
      ) {
        this.isLoading_micsa_egg_gach = true;

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

        // Get the current date
        const currentDate = new Date();

        // Set the year to 2022
        currentDate.setFullYear(this.chosenYear);

        // Format the date as a string in the 'YYYY-MM-DDTHH:mm:ss.sss' format
        const formattedDateTime = currentDate.toISOString(); // Result: '2022-08-03T14:30:00.000Z'

        this.partnerData = await this.megadelSearchService.getPartner(
          thefarmdet[0]?.farm_id,
          thefarmdet[0]?.active_flock_id,
          this.mainGrower[0]?.YzrnHead,
          formattedDateTime
        );
        this.partners_length = this.partnerData.length;

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

        console.log(this.partnerData);

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
        this.isLoading_micsa_egg_gach = false;
      } else {
        this.isLoading_micsa_egg_gach = true;

        this.mainGrower =
          await this.megadelSearchService.Partners_Get_CodeGidul(
            11,
            this.userDetails[0].v_yzrn,
            30,
            this.chosenYear
          );

        const thefarmdet = [];

        // Get the current date
        const currentDate = new Date();

        // Set the year to 2022
        currentDate.setFullYear(this.chosenYear);

        // Format the date as a string in the 'YYYY-MM-DDTHH:mm:ss.sss' format
        const formattedDateTime = currentDate.toISOString(); // Result: '2022-08-03T14:30:00.000Z'

        this.partnerData = await this.megadelSearchService.getPartner(
          thefarmdet[0]?.farm_id,
          thefarmdet[0]?.active_flock_id,
          this.mainGrower[0]?.YzrnHead,
          formattedDateTime
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
        this.isLoading_micsa_egg_gach = false;
      }
    }
  }

  open_PopupPartnersHodimComponent(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(
      PopupPartnersHodimComponent,
      dialogConfig
    );
  }

  async eransam_test() {
    await this.megadelSearchService.test_eran();
  }

  openPopup_certificate_transfer() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'openPopup_certificate_transfer';
    dialogConfig.data = this.all_certificate_det;
    const dialogRef = this.dialog.open(
      PopupShowAllCertificateTransferComponent,
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
    document.addEventListener('click', handleDocumentClick);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      isSecondClick = false;
      document.removeEventListener('click', handleDocumentClick);
    });
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
    const buttonElement = document.querySelector('#gidolHotzBtn_hodin'); // Replace 'your-button-id' with the actual ID of your button
    buttonElement.addEventListener('click', handleButtonClick);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
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
      console.log('Dialog closed with result:', result);
      isSecondClick = false;
      document.removeEventListener('click', handleDocumentClick);
    });
  }

  Popup_Old_Grower_Name() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'Popup_Old_Grower_Name';
    dialogConfig.data = this.oldNameGrower;
    const dialogRef = this.dialog.open(
      PopupOldGrowerNameComponent,
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
    document.addEventListener('click', handleDocumentClick);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      isSecondClick = false;
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
        const parts = value.split('/');

        const numberPart = parts[0];

        const number = Number(numberPart);

        return number;
      } else {
        const number = Number(value);
        return number;
      }
    } else {
      return value;
    }
  }

  extractNumber_In_Type_Number(value: any): number {
    if (typeof value === 'string') {
      if (value.includes('/')) {
        const parts = value.split('/');

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
