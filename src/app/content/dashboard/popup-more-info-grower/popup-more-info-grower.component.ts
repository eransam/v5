import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-more-info-grower',
  templateUrl: './popup-more-info-grower.component.html',
  styleUrls: ['./popup-more-info-grower.component.css'],
})
export class PopupMoreInfoGrowerComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  async ngOnInit() {
    console.log('data in PopupMoreInfoGrowerComponent: ', this.data);
  }
}
