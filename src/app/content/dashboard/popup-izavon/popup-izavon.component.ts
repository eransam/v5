import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-izavon',
  templateUrl: './popup-izavon.component.html',
  styleUrls: ['./popup-izavon.component.css']
})
export class PopupIzavonComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
    async ngOnInit() {
      console.log('data in PopupOldGrowerComponent: ', this.data);
      console.log(' this.data[0]?.v_DtPtira: ',  this.data[0]?.v_DtPtira);

     
    }
  }