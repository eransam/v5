import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MegadelSearchInsertService {
  constructor(private http: HttpClient) {}

  async close_month_main(
    month: any,
    year: any,
    Sug_Mhir: any,
    Tzrt: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/close_month_main?month=${month}&year=${year}&Sug_Mhir=${Sug_Mhir}&Tzrt=${Tzrt}`
      )
    );
    return item;
  }
}
