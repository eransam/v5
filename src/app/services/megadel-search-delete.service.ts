import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MegadelSearchDeleteService {
  constructor(private http: HttpClient) {}

  async delete_close_month_main(
    month: any,
    year: any,
    Tzrt: any,
    Sug_Mhir: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/delete_close_month_main?month=${month}&year=${year}&Tzrt=${Tzrt}&Sug_Mhir=${Sug_Mhir}`
      )
    );
    return item;
  }
}
