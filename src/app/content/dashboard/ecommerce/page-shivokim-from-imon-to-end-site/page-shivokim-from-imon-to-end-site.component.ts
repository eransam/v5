import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';


@Component({
  selector: 'app-page-shivokim-from-imon-to-end-site',
  templateUrl: './page-shivokim-from-imon-to-end-site.component.html',
  styleUrls: ['./page-shivokim-from-imon-to-end-site.component.css']
})
export class PageShivokimFromImonToEndSiteComponent {
    userTypeID;
    certificateSum = 0;
    data: any[];
    total_chicken_sum: any = 0;
    total_packege_sum: any = 0;
    constructor(
      private tableexcelService: TableexcelService,
      private megadelSearchService: MegadelSearchService,
  
      public router: Router
    ) {
      console.log('data in constractor: ', this.data);
      // console.log('typeof data[0].id: ', typeof data[0].id);
    }
  
    async ngOnInit() {
      console.log('test');
      this.data = JSON.parse(localStorage.getItem('shivokim_from_imon_to_end_site'));
      console.log(this.data);
  

      const uniqueArr: any[] = [
        ...new Set(this.data[this.data.length - 1].newArrayEnd),
      ];
      this.data[this.data.length - 1].newArrayEnd = uniqueArr;

  
      console.log('this.data: ', this.data);
   
  
    }
  
    getExcelData(): void {
      this.tableexcelService.exportAsExcelFile(
        this.data,
        'Modern Admin - Clean Angular8+ Dashboard HTML Template'
      );
    }
  }
  