import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-quarantine',
  templateUrl: './page-quarantine.component.html',
  styleUrls: ['./page-quarantine.component.css']
})
export class PageQuarantineComponent {
    userTypeID;
    certificateSum = 0;
    data:any[]
    constructor(
      public router: Router
    ) {
      console.log('data in constractor: ', this.data);
    }
    async ngOnInit() {
        this.data = JSON.parse(localStorage.getItem('this.quarantine'));

      console.log('test');
      const uniqueArr: any[] = [
        ...new Set(this.data[this.data.length - 1].newArrayEnd),
      ];
      this.data[this.data.length - 1].newArrayEnd = uniqueArr;
      console.log('this.data: ', this.data);
    }
  }
  