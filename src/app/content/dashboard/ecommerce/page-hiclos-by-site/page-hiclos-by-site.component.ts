import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TableexcelService } from '../../../../services/tableexcel.service';
import { MegadelSearchService } from 'src/app/services/MegadelSearch.service';

@Component({
  selector: 'app-page-hiclos-by-site',
  templateUrl: './page-hiclos-by-site.component.html',
  styleUrls: ['./page-hiclos-by-site.component.css'],
})
export class PageHiclosBySiteComponent {
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
    this.data = JSON.parse(localStorage.getItem('data_hiclos_by_site'));
    console.log(this.data);

    // data[data.length - 1].newArrayEnd
    // const uniqueArr: number[] = [...new Set(data)];
    const uniqueArr: any[] = [
      ...new Set(this.data[this.data.length - 1].newArrayEnd),
    ];
    this.data[this.data.length - 1].newArrayEnd = uniqueArr;

    // Custom comparator function for sorting based on 'is_main_grower'
    function customComparator(a: any, b: any) {
      if (a.is_main_grower === 1 && b.is_main_grower === 0) {
        return -1; // a should come before b
      } else if (a.is_main_grower === 0 && b.is_main_grower === 1) {
        return 1; // b should come before a
      } else {
        return 0; // Leave them in the same order as they are (maintain stability)
      }
    }

    // Sort the array using the custom comparator function
    this.data.sort(customComparator);

    console.log('this.data: ', this.data);
    this.total_chicken_sum = this.data.reduce(
      (sum, obj) => sum + obj.chicken_sum_female,
      0
    );
    console.log(this.total_chicken_sum);

    this.total_packege_sum = this.data.reduce(
      (sum, obj) => sum + obj.package_sum,
      0
    );
    console.log(this.total_packege_sum);
    console.log(this.data);

        if (!this.data[0]?.mixed_sum) {
            for (let iterator of this.data) {
                var id_by_certificate_id = await this.megadelSearchService.get_id_by_certificate_id(iterator.certificate_id)
                console.log(id_by_certificate_id);
                if (id_by_certificate_id.length > 0) {
                    iterator.id_by_certificate_id = id_by_certificate_id[0].id
                }

                
            }
     
        }
    

  }

  getExcelData(): void {
    this.tableexcelService.exportAsExcelFile(
      this.data,
      'Modern Admin - Clean Angular8+ Dashboard HTML Template'
    );
  }
}
