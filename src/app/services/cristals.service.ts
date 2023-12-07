import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyARecord } from 'dns';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CristalsService {
  reportName: '\\\\amznfsx97bxnytt.lul.epb\\Reports';
  scanName: '\\\\amznfsx97bxnytt.lul.epb\\Scan';
  reportHTTP: 'https://reports.epbapp.org';

  constructor(private http: HttpClient) {}

  async flock_history(flock_num) {
    console.log('f');

    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');
    //   העברת פרמטרים

    var paramData = [
      { name: 'flock_id', value: flock_num },
      { name: 'from_date', value: '01/01/1900' },
      { name: 'to_date', value: '01/01/2100' },
      { name: 'isLive', value: -1 },
      { name: 'bacteria_id', value: -1 },
    ];
    var pdfName = `${flock_num}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים
    var jsonFinal = [
      {
        reportName:
          // '\\\\EPB-IIS12\\Report\\ChickenHealth\\CR_FlockHistory2.rpt',
          '\\\\amznfsx97bxnytt.lul.epbReports\\Report\\ChickenHealth\\CR_FlockHistory2.rpt',

        //   pdfName: '\\\\epb-iis22\\Scan\\EggMovements\\' + pdfName,
        pdfName: '\\\\amznfsx97bxnytt.lul.epb\\Scan\\EggMovements\\' + pdfName,
        connectionString: 'ChickenHealth',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )

      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');
          //   window.open('http://epb-iis22:8006/EggMovements/' + pdfName);
          window.open('https://reports.epbapp.org/' + pdfName);
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }

  async hazmadot_history_cristal(yzrn_num: any, tozeret: any) {
    console.log('d');

    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');

    //   העברת פרמטרים
    var paramData = [
      { name: 'order', value: 5 },
      { name: 'yzrn', value: yzrn_num },
      { name: 'sugtz', value: tozeret },
      { name: 'year', value: 0 },
      { name: 'Rishaion_Msk', value: 0 },
    ];
    var pdfName = `${yzrn_num}${tozeret}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName: `${this.reportName}\\LulSln_net\\Egg_report\\Hazmada_Yzrn.rpt`,
        pdfName: `${this.scanName}\\EggMovements\\eran_rep\\` + pdfName,
        connectionString: 'egg',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');

          window.open(`${this.reportHTTP}/EggMovements/eran_rep/` + pdfName);
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }

  async gidul_site_cristal(
    year: any,
    tozeret: any,
    DatePartner: any,
    OptAtarType: any,
    OptAtarSts: any
  ) {
    console.log('d');

    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');

    //   העברת פרמטרים
    var paramData = [
      { name: 'Order', value: 0 },
      { name: 'Yr', value: year },
      { name: 'Tz', value: tozeret },
      { name: 'OptAtarType', value: OptAtarType },
      { name: 'OptAtarSts', value: OptAtarSts },
      { name: 'DatePartner', value: DatePartner },
    ];
    var pdfName = `${DatePartner}_${year}_${tozeret}_${OptAtarType}_${OptAtarSts}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName: `${this.reportName}\\LulSln_net\\Egg_report\\Alfon_Atarim_By_Tz.rpt`,
        pdfName:
          `${this.scanName}\\EggMovements\\eran_rep\\${tozeret}\\` + pdfName,
        connectionString: 'egg',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');

          window.open(
            `${this.reportHTTP}/EggMovements/eran_rep/${tozeret}/` + pdfName
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });

    const window_to_open =
      `${this.reportHTTP}/EggMovements//eran_rep/${tozeret}/` + pdfName;
    return window_to_open;
  }

  async gidul_site__witout_sites_cristal(
    year: any,
    tozeret: any,
    DatePartner: any,
    OptAtarSts: any
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');

    //   העברת פרמטרים
    var paramData = [
      { name: 'Order', value: 0 },
      { name: 'YrMcs', value: year },
      { name: 'Tz', value: tozeret },
      { name: 'DatePartner', value: DatePartner },
      { name: 'OptAtarSts', value: OptAtarSts },
    ];
    var pdfName = `0_${year}_${tozeret}_${DatePartner}_${OptAtarSts}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName: `${this.reportName}\\LulSln_net\\Egg_report\\Bezim_Atarim_Only_Yzrn_With_Mcsa_Peilut.rpt`,
        pdfName:
          `${this.scanName}\\EggMovements\\eran_rep\\${tozeret}\\` + pdfName,
        connectionString: 'egg',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');

          window.open(
            `${this.reportHTTP}/EggMovements/eran_rep/${tozeret}/` + pdfName
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });

    var window_name =
      `${this.reportHTTP}/EggMovements/eran_rep/${tozeret}/` + pdfName;
    return window_name;
  }

  async all_sites_cristal(year: any, tozeret: any, yzrn_num: any) {
    console.log('d');

    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');

    //   העברת פרמטרים
    var paramData = [
      { name: 'order', value: 50 },
      { name: 'start_prefix', value: 50 },
      { name: 'start_code', value: '' },
      { name: 'start_Year', value: year },
      { name: 'start_Tzrt', value: tozeret },
      { name: 'start_Yzrn', value: yzrn_num },
      { name: 'start_Status', value: 99 },
    ];
    var pdfName = `50_50_${year}_${tozeret}_${yzrn_num}_99.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName: `${this.reportName}\\LulSln_net\\Egg_report\\Atarim_Of_Yzrn.rpt`,
        pdfName:
          `${this.scanName}\\EggMovements\\eran_rep\\${tozeret}\\` + pdfName,
        connectionString: 'egg',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');

          window.open(
            `${this.reportHTTP}/EggMovements/eran_rep/${tozeret}/` + pdfName
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }

  async micsot_cristal(year: any, tozeret: any, yzrn_num: any) {
    console.log('d');

    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');

    //   העברת פרמטרים
    var paramData = [
      { name: 'Shana', value: year },
      { name: 'Tzrt', value: tozeret },
      { name: 'Yzrn', value: yzrn_num },
    ];
    var pdfName = `${year}_${tozeret}_${yzrn_num}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName: `${this.reportName}\\LulSln_net\\Egg_report\\Info_Micsa_Yzrn.rpt`,
        pdfName:
          `${this.scanName}\\EggMovements\\eran_rep\\${tozeret}\\` + pdfName,
        connectionString: 'egg',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');

          window.open(
            `${this.reportHTTP}/EggMovements/eran_rep/${tozeret}/` + pdfName
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }

  async MicsaYearToGrowerComponent_cristal(year: any, tozeret: AnyARecord) {
    console.log('d');

    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('content-type', 'application/json')
      .append('content-type', 'charset=utf-8');

    //   העברת פרמטרים
    var paramData = [
      { name: 'Shana_Ibud', value: year },
      { name: 'Ez1', value: '%' },
      { name: 'Ez2', value: '' },
      { name: 'Ys1', value: '%' },
      { name: 'Ys2', value: '' },
      { name: 'SugMcsK', value: '1' },
      { name: 'SugMcsZ', value: '3' },
      { name: 'Toz', value: tozeret },
      { name: 'Msvk1', value: '%' },
      { name: 'camfrom', value: '-999999999' },
      { name: 'camto', value: '999999999' },
      { name: 'StrGroup', value: '%' },
      { name: 'SugDc', value: '0' },
    ];
    var pdfName = `1_3_${tozeret}_999999999_${year}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName: `${this.reportName}\\LulSln_net\\Egg_report\\Alfon_Micsa_Strt_By_Year.rpt`,
        pdfName:
          `${this.scanName}\\EggMovements\\eran_rep\\${tozeret}\\` + pdfName,
        connectionString: 'egg',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('g');

        if (data) {
          console.log('g');

          window.open(
            `${this.reportHTTP}/EggMovements/eran_rep/${tozeret}/` + pdfName
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }

  openCertificate(id, isCopy) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    var paramData = [
      { name: '@id', value: id },
      { name: '@is_copy', value: isCopy },
    ];
    var jsonFinal = [
      {
        reportName: `${this.reportName}\\EvacuationChicken\\CERTIFICATE.rpt`,
        pdfName: `${this.scanName}\\EvacuationChicken\\Temp\\' + id + '.pdf`,
        connectionString: 'PinuyOfot',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}/growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('data error=' + JSON.stringify(data));

        if (data) {
          window.open(
            'http://epb-iis12:8006/EvacuationChicken/Temp/' + id + '.pdf'
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }
}
