import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-old-grower',
  templateUrl: './popup-old-grower.component.html',
  styleUrls: ['./popup-old-grower.component.css'],
})
export class PopupOldGrowerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  async ngOnInit() {
    console.log('data in PopupOldGrowerComponent: ', this.data);
  }
}
