import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mid-page',
  templateUrl: './mid-page.component.html',
  styleUrls: ['./mid-page.component.css'],
})
export class MidPageComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/dashboard/ClosePaymentsComponent']);
  }
}
