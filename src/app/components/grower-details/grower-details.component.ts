import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { EggMarketingService } from 'src/app/services/egg-marketing.service';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-grower-details',
  templateUrl: './grower-details.component.html',
  styleUrls: ['./grower-details.component.css'],
})
export class GrowerDetailsComponent implements OnInit, OnChanges {
  @Input() growerID;

  growerData = [];
  contactPersonFarmData = [];
  ContactPersonLength;
  yzrnHead;

  constructor(
    private data: LinkService,
    private dataEgg: EggMarketingService
  ) {}

  async ngOnInit(): Promise<void> {
    console.log('hello');

    await this.loadData();
  }

  //אז פונ' זו תכנס לפעולה @input מתי שיהיה שינוי בערכים של משתנים מסוג
  ngOnChanges() {
    this.loadData();
  }

  async loadData() {
    
    await this.data.getGrowerDetails(this.growerID).subscribe((data) => {
      this.growerData = data;
      console.log('this.growerData2: ', this.growerData);

      this.yzrnHead = this.growerData[0]['lull2000_code'];

      this.dataEgg
        .getContactPersonFarmHatala(this.yzrnHead)
        .subscribe((data) => {
          console.log('data from getContactPersonFarmHatala: ', data);

          this.contactPersonFarmData = data;
          this.ContactPersonLength = this.contactPersonFarmData.length;
        });
    });
    await this.testa3w;
  }
  testa3w() {
    console.log('ngOnInit-growerData: ', this.growerData);
    console.log('ngOnInit-contactPersonFarmData: ', this.contactPersonFarmData);
    console.log('ngOnInit-ContactPersonLength: ', this.ContactPersonLength);
  }
}
