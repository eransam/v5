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

  async insert_price_updates(
    main_price: any,
    visot_price: any,
    tzrt: any,
    tzrt_name: any,
    payment_type: any,
    date_from: any,
    date_to: any,
    year: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/insert_price_updates?main_price=${main_price}&visot_price=${visot_price}&tzrt=${tzrt}&tzrt_name=${tzrt_name}&payment_type=${payment_type}&date_from=${date_from}&date_to=${date_to}&year=${year}`
      )
    );
    return item;
  }

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

  async update_visot_price(shana: any, tzrt: any, mhirt: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/update_visot_price?shana=${shana}&tzrt=${tzrt}&mhirt=${mhirt}`
      )
    );
    return item;
  }
}
