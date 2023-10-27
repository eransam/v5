import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-siba-table',
  templateUrl: './popup-siba-table.component.html',
  styleUrls: ['./popup-siba-table.component.css']
})
export class PopupSibaTableComponent implements OnInit {
    the_siba_table:any
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
    async ngOnInit() {
      console.log('data in PopupMoreInfoGrowerComponent: ', this.data);
      
      this.the_siba_table = JSON.parse(localStorage.getItem('openPopup_siba_table'));
      console.log( this.the_siba_table);
      


    }
  }
  