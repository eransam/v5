import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-old-grower-name',
  templateUrl: './popup-old-grower-name.component.html',
  styleUrls: ['./popup-old-grower-name.component.css']
})
export class PopupOldGrowerNameComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
    async ngOnInit() {
      console.log('data in PopupOldGrowerNameComponent: ', this.data);
      console.log(' this.data[0]?.v_DtPtira: ',  this.data[0]?.v_DtPtira);

     
    }
  }