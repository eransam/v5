import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private chosenYearSource = new Subject<any>(); // Replace 'any' with the appropriate type of your chosenYear variable
  chosenYear$ = this.chosenYearSource.asObservable();

  setChosenYear(year: any) {
    this.chosenYearSource.next(year);
  }
  
}
