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
import { ActivatedRoute } from '@angular/router';
import { MegadelSearchService } from '../../../services/MegadelSearch.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  @BlockUI('newOrders') blockUINewOrders: NgBlockUI;
  public config: PerfectScrollbarConfigInterface = { wheelPropagation: true };

  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

  idFromurl: any;

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
  FarmId: any[];
  siteName: any = '';
  FarmDetails: any[] = [];
  henHouseID: any = '-1';
  constructor(
    private chartApiservice: ChartApiService,
    private tableApiservice: TableApiService,
    private megadelSearchService: MegadelSearchService,
    private route: Router,
    private route2: ActivatedRoute
  ) {}

  async ngOnInit() {
    console.log('FarmId: ', this.FarmId); // Print the parameter value

    this.route2.params.subscribe((params) => {
      this.idFromurl = params['id']; // Retrieve the parameter value from the URL
      console.log('idFromurl: ', this.idFromurl); // Print the parameter value
      // Save the parameter value in a variable or perform any other logic
    });

    this.siteName = await this.megadelSearchService.get_siteName_by_yzId(
      this.idFromurl
    );

    if (this.siteName) {
      this.FarmId = await this.getFarmIdArr(this.siteName);
      console.log('this.FarmId-end: ', this.FarmId);
      this.FarmDetails = await this.getFarmDetailsArr(this.FarmId);
      console.log('this.FarmDetails-end: ', this.FarmDetails);

    }

    this.rows = this.FarmDetails;

    this.chartApiservice.getEcommerceData().subscribe((Response) => {
      this.ChartistData = Response;
      this.getlineArea();
    });
    this.tableApiservice.getEcommerceTableData().subscribe((Response) => {
      this.datatableData = Response;
      this.getTabledata();
    });
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

  getTabledata() {
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
