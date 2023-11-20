import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class QaServiceService {
  constructor(private http: HttpClient) {}

  async qa_if_all_grower_from_packege_in_grower_split_by_dates(
    date_from: any,
    date_to: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/qa_if_all_grower_from_packege_in_grower_split_by_dates?date_from=${date_from}&date_to=${date_to}`
      )
    );
    return item;
  }
}
