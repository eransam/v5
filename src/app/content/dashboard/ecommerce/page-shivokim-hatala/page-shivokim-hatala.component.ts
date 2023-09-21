import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';

@Component({
  selector: 'app-page-shivokim-hatala',
  templateUrl: './page-shivokim-hatala.component.html',
  styleUrls: ['./page-shivokim-hatala.component.css']
})
export class PageShivokimHatalaComponent {
    userTypeID;
    certificateSum = 0;
    data: any[];
    total_chicken_sum: any = 0;
    transformedData: any[];
    total_packege_sum: any = 0;
    startDate: string; 
    endDate: string;
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
      this.data = JSON.parse(localStorage.getItem('all_current_shivokim'));
      console.log(this.data);
  
      // מוציא אובייקטים משוכפלים מהמערך
      const uniqueArr: any[] = [
        ...new Set(this.data[this.data.length - 1].newArrayEnd),
      ];
      this.data[this.data.length - 1].newArrayEnd = uniqueArr;
  
      console.log('this.data: ', this.data);
  
      this.data.sort((a, b) => {
          const dateA:any = new Date(a.hz_date_hzmd_from);
          const dateB:any = new Date(b.hz_date_hzmd_from);
        
          return dateB - dateA;
        });
        
        console.log('this.data: ', this.data);
  
  
    //   // לוגיקת אקסל
    //   const selectedFieldsArray = this.data.map((item) => {
    //     return {
    //       hz_WareHouse: item.hz_WareHouse,
    //       hz_msvk_nosaf: item.hz_msvk_nosaf,
    //       hz_date_hzmd_from: item.hz_date_hzmd_from,
    //       hz_code_hzmd: item.hz_code_hzmd,
    //       hz_date_hzmd_to: item.hz_date_hzmd_to,
    //       hz_Dtupd: item.hz_Dtupd,
    //       code: item.code,
    //       tb_name: item.tb_name,
    //       hz_Rishaion_Msk:item.hz_Rishaion_Msk,
    //       tnai_hazmada: item.tnai_hazmada,
  
    //     };
    //   });
    //   const fieldTitleMapping = {
    //       hz_WareHouse: 'שיווק במחסן',
    //       hz_msvk_nosaf: 'משווק נוסף',
    //       hz_date_hzmd_from: 'תאריך תעודה',
    //       hz_code_hzmd: 'מס תעודה',
    //       hz_date_hzmd_to: 'מתאריך',
    //       hz_Dtupd: 'תאריך עדכון',
    //       code: 'קוד אתר',
    //       tb_name: 'שם משווק ',
    //       hz_Rishaion_Msk: 'רישיון משווק',
    //       tnai_hazmada: 'תנאי הצמדה',
    //   };
  
    //   this.transformedData = selectedFieldsArray.map((item) => {
    //     const transformedItem = {};
    //     for (const key in item) {
    //       if (item.hasOwnProperty(key)) {
    //         transformedItem[fieldTitleMapping[key] || key] = item[key];
    //       }
    //     }
    //     return transformedItem;
    //   });
  
    //   console.log(this.transformedData);
    }
  //////////////////////////////////////////////////   סיום לוגיקת אקסל   //////////////////////////////////////////////////////////
  
  // פונ הורדה לאקסל
    getExcelData(): void {
      this.tableexcelService.exportAsExcelFile(
        this.transformedData,
        'Modern Admin - Clean Angular8+ Dashboard HTML Template'
      );
    }
    async search() {
        console.log('Start Date:', this.startDate);
        console.log('End Date:', this.endDate);

        var shivokim =
        await this.megadelSearchService.get_shivokim_by_date_and_flock_id(
            this.data[0].flock_id,
          this.startDate,
          this.endDate
        );
        if (shivokim.length > 0) {
            this.data = shivokim
          
        }else{
            this.data =[]
        }
      }
  }