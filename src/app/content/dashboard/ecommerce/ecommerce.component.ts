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

  idFromurl: any;
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
  theUserDetails: any[];
  FarmId: any[];
  siteName: any = '';
  FarmDetails: any[] = [];
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
  chosenYear = 2023;
  partnerData: any[];
  mcsaSum = 0;
  certificateSum = 0;
  eggSum = 0;
  eggSumFarm = 0;
  arrOfOldGrower = [];

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
    this.isLoading_theUserDetails = true;
    this.isLoading_FarmDetails = true;

    this.route2.params.subscribe((params) => {
      this.idFromurl = params['id']; // Retrieve the parameter value from the URL
      console.log('idFromurl: ', this.idFromurl); // Print the parameter value
      // Save the parameter value in a variable or perform any other logic -yz_yzrn
    });

    this.userDetails = await this.megadelSearchService.GET_YAZRAN_BY_YZ_ID(
      this.idFromurl
    );
    console.log('this.userDetails in 2 screen: ', this.userDetails);

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

    this.mihsot = await this.megadelSearchService.Micsa_Select_New(
      5,
      this.userDetails[0]?.yz_yzrn,
      this.chosenYear,
      '30 - ביצי מאכל',
      88
    );

    console.log('this.mihsot: ', this.mihsot);

    this.kannatNum_and_oldMegadelNum =
      await this.megadelSearchService.YazrnExtrnl_Get_Code(
        2,
        '',
        this.userDetails[0]?.yz_yzrn
      );

    console.log(
      'this.kannatNum_and_oldMegadelNum: ',
      this.kannatNum_and_oldMegadelNum
    );

    for (let i = 0; i < this.kannatNum_and_oldMegadelNum.length; i++) {
      let item = this.kannatNum_and_oldMegadelNum[i];
      if (item.NameMsvkExt === 'מספר מגדל ישן') {
        this.arrOfOldGrower.push(item);
        this.kannatNum_and_oldMegadelNum.splice(i, 1);
        i--; // Decrement the index as the array length has changed
      }
    }

    console.log('arrOfOldGrower: ', this.arrOfOldGrower);

    if (this.userDetails[0].length === 0) {
      this.userDetails = [];
    } else {
      console.log('this.userDetails[0]: ', this.userDetails[0]);
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

    this.theUserDetails = this.userDetails[0];

    console.log('this.theUserDetails: ', this.theUserDetails);

    this.isLoading_theUserDetails = false;

    this.siteName = await this.megadelSearchService.get_siteName_by_yzId(
      this.idFromurl
    );

    if (this.siteName) {
      this.FarmId = await this.getFarmIdArr(this.siteName);
      console.log('this.FarmId-end: ', this.FarmId);
      this.FarmDetails = await this.getFarmDetailsArr(this.FarmId);
      console.log('this.FarmDetails-end: ', this.FarmDetails);
    }

    this.totalFarms = this.FarmDetails.length;

    for (let item of this.FarmDetails) {
      console.log('item in for of: ', item);
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
    }

    console.log('this.FarmDetails after gidol hotz: ', this.FarmDetails);

    // lull2000_code
    this.rows = this.FarmDetails;
    this.isLoading_FarmDetails = false;

    this.chartApiservice.getEcommerceData().subscribe((Response) => {
      this.ChartistData = Response;
      this.getlineArea();
    });
    this.tableApiservice.getEcommerceTableData().subscribe((Response) => {
      this.datatableData = Response;
      this.getTabledata();
    });

    this.loadData(this.FarmDetails[0].grower_id);
  }

  //   ------ onInit end---------------------------------------------------------------------------------------------------------------------

  async getPartner(farmID, flockID, lull2000Code) {
    this.partnerData = await this.megadelSearchService.getPartner(
      farmID,
      flockID,
      lull2000Code
    );
    this.mcsaSum = 0;
    this.eggSum = 0;
    this.certificateSum = 0;

    for (var i = 0; i < this.partnerData.length; i++) {
      this.mcsaSum += parseFloat(this.partnerData[i]['mcsa_sum']);
      this.certificateSum += parseFloat(this.partnerData[i]['certificate_sum']);
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

    this.partnerData.push({ obj2: obj });
    console.log('this.partnerData: ', this.partnerData);

    console.log();

    await this.openPopup();
  }

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'popup-dialog';
    dialogConfig.data = this.partnerData;
    const dialogRef = this.dialog.open(PopupComponent, dialogConfig);

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
    dialogConfig.panelClass = 'popup-dialog';
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
    dialogConfig.panelClass = 'popup-dialog'; // Apply the CSS class to center the dialog
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
        const farmId = await this.megadelSearchService.Get_farmId_By_siteName(
          item.code
        );
        farmIds.push(farmId[0].id);
      }
    }

    return farmIds;
  }

  async loadData(growerID) {
    console.log('growerID in loadData: ', growerID);

    await this.data.getGrowerDetails(growerID).subscribe((data) => {
      console.log('the_data: ', data);

      this.growerData = data[0];
      console.log('this.growerData2: ', this.growerData);

      this.yzrnHead = this.growerData[0]['lull2000_code'];

      this.dataEgg
        .getContactPersonFarmHatala(this.yzrnHead)
        .subscribe((data) => {
          console.log('data from getContactPersonFarmHatala: ', data);

          this.contactPersonFarmData = data;
          this.ContactPersonLength = this.contactPersonFarmData.length;
        });
    });
    console.log('this.growerData2: ', this.growerData);
  }

  test() {
    console.log('hello');
  }
  async getFarmDetailsArr(FarmIdArr: any[]): Promise<any[]> {
    const farmDetailsArr: any[] = [];
    console.log('theFarmIdArr: ', FarmIdArr);

    for (const FarmId of FarmIdArr) {
      if (FarmId) {
        console.log('theFarmId: ', FarmId);

        const farmDetails =
          await this.megadelSearchService.prc_farm_details_eran(FarmId, -1);
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

  getTabledata() {
    console.log(':this.FarmDetails555: ', this.FarmDetails);

    this.rows = this.FarmDetails;
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
