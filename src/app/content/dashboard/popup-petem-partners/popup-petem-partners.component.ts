import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-petem-partners',
  templateUrl: './popup-petem-partners.component.html',
  styleUrls: ['./popup-petem-partners.component.css'],
})
export class PopupPetemPartnersComponent implements OnInit {
  userTypeID;
  certificateSum = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) {
    console.log('data in constractor in PopupPetemPartnersComponent: ', data);
    console.log(
      'data[0].partnersin PopupPetemPartnersComponent: ',
      data[0].partners
    );

    // console.log('typeof data[0].id: ', typeof data[0].id);
  }

  async ngOnInit() {
    console.log('test');
  }
}
