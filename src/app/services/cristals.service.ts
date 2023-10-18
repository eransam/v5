import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CristalsService {
  constructor(private http: HttpClient) {}

  //   קריסטלים

  async flock_history(flock_num) {
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
          '\\\\EPB-IIS12\\Report\\ChickenHealth\\CR_FlockHistory2.rpt',
        pdfName: '\\\\epb-iis12\\Scan\\ChickenHealth\\temp\\' + pdfName,
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

          window.open('http://epb-iis12:8006/chickenhealth/temp/' + pdfName);
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
    var pdfName = `${yzrn_num}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName:
          '\\\\EPB-IIS12\\Report\\LulSln_net\\Egg_report\\Hazmada_Yzrn.rpt',
        pdfName:
          '\\\\epb-iis12\\Scan\\ChickenHealth\\eran_files\\hazmadot_history\\' +
          pdfName,
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
            'http://epb-iis12:8006/chickenhealth/eran_files/hazmadot_history/' +
              pdfName
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
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
    var pdfName = `${yzrn_num}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName:
          '\\\\EPB-IIS12\\REPORT\\LulSln_net\\Egg_report\\Atarim_Of_Yzrn.rpt',
        pdfName:
          '\\\\epb-iis12\\Scan\\ChickenHealth\\eran_files\\all_sites\\' +
          pdfName,
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
            'http://epb-iis12:8006/chickenhealth/eran_files/all_sites/' +
              pdfName
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
    var pdfName = `${yzrn_num}.pdf`;

    // העברת הג'ייסון עם כלל הנתונים

    var jsonFinal = [
      {
        reportName:
          '\\\\epb-iis12\\REPORT\\LulSln_net\\Egg_report\\Info_Micsa_Yzrn.rpt',
        pdfName:
          // \\epb-iis22\Scan\EggMovements
          //   '\\\\epb-iis12\\Scan\\ChickenHealth\\eran_files\\micsot\\' + pdfName,
          '\\\\epb-iis22\\Scan\\EggMovements\\' + pdfName,
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

          window.open('http://epb-iis22:8006/EggMovements/' + pdfName);
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
        reportName: '\\\\epb-iis12\\Report\\EvacuationChicken\\CERTIFICATE.rpt',
        pdfName: '\\\\epb-iis12\\Scan\\EvacuationChicken\\Temp\\' + id + '.pdf',
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
