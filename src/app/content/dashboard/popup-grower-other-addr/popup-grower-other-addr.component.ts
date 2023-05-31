import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-grower-other-addr',
  templateUrl: './popup-grower-other-addr.component.html',
  styleUrls: ['./popup-grower-other-addr.component.css'],
})
export class PopupGrowerOtherAddrComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  async ngOnInit() {
    console.log('data in PopupOldGrowerComponent: ', this.data);
  }
}
