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

  async qa_check_if_grower_have_shivok_and_not_hidosh(
    date_from: any,
    date_to: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/qa_check_if_grower_have_shivok_and_not_hidosh?date_from=${date_from}&date_to=${date_to}`
      )
    );
    return item;
  }

  async qa_check_if_grower_have_minos_shivok(
    date_from: any,
    date_to: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/qa_check_if_grower_have_minos_shivok?date_from=${date_from}&date_to=${date_to}`
      )
    );
    return item;
  }

  async qa_check_if_all_grower_after_split_have_micsa(
    date_from: any,
    date_to: any,
    year: any,
    tzrt: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/qa_check_if_all_grower_after_split_have_micsa?date_from=${date_from}&date_to=${date_to}
        &year=${year}&tzrt=${tzrt}`
      )
    );
    return item;
  }

  async qa_check_if_there_is_certificate_from_packege_that_sum_0(
    date_from: any,
    date_to: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/qa_check_if_there_is_certificate_from_packege_that_sum_0?date_from=${date_from}&date_to=${date_to}`
      )
    );
    return item;
  }

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

  async qa_check_if_all_certificate_is_in_transfer_status_id_3(
    date_from: any,
    date_to: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/qa_check_if_all_certificate_is_in_transfer_status_id_3?date_from=${date_from}&date_to=${date_to}`
      )
    );
    return item;
  }
}
