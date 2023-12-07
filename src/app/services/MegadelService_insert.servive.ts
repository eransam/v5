import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MegadelSearchService {
  constructor(private http: HttpClient) {}

  //   Megadel: ------------------------------------------------------------------------------------------------------------------------



  
  async Kamut_Tkufa_New_Display_Delete_Data(
    Order: any,
    SugTas: any,
    Yr: any,
    Hodesh: any,
    TatMana: any,
    Tzrt: any,
    Yzrn: any,
    kt_Job_Upd: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Kamut_Tkufa_New_Display_Delete_Data?Order=${Order}&SugTas=${SugTas}&Yr=${Yr}&Hodesh=${Hodesh}&TatMana=${TatMana}&Tzrt=${Tzrt}&Yzrn=${Yzrn}&kt_Job_Upd=${kt_Job_Upd}`
      )
    );
    return item;
  }

  async Calc_Hetelim_New(
    year: any,
    tzrt: any,
    mana: any,
    tat_mana: any,
    yzrnBoded: any,
    MsvkBoded: any,
    dateHzmd: any,
    user: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Calc_Hetelim_New?year=${year}&tzrt=${tzrt}&mana=${mana}&tat_mana=${tat_mana}&yzrnBoded=${yzrnBoded}&MsvkBoded=${MsvkBoded}&dateHzmd=${dateHzmd}&user=${user}`
      )
    );
    return item;
  }

  async update_hetelim_price_and_dates(
    tk_date_from: any,
    tk_date_to: any,
    mh_mhir: any,
    year: any,
    tk_tzrt: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/update_hetelim_price_and_dates?tk_date_from=${tk_date_from}&tk_date_to=${tk_date_to}&mh_mhir=${mh_mhir}&year=${year}&tk_tzrt=${tk_tzrt}`
      )
    );
    return item;
  }

  async Mhirim_Get_Tkufa_all_shlohot(
    shibud: any,
    start_sug_mhir: any,
    codezacaut: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Mhirim_Get_Tkufa_all_shlohot?shibud=${shibud}&start_sug_mhir=${start_sug_mhir}&codezacaut=${codezacaut}`
      )
    );
    return item;
  }

  async Mhirim_Get_Tkufa_bitohim_all_shlohot(year: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Mhirim_Get_Tkufa_bitohim_all_shlohot?year=${year}`
      )
    );
    return item;
  }

  async Mhirim_Get_Tkufa_bitohim_by_year_and_tz(
    tzrt: any,
    year: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Mhirim_Get_Tkufa_bitohim_by_year_and_tz?tzrt=${tzrt}&year=${year}`
      )
    );
    return item;
  }

  async Mhirim_Get_Tkufa(
    shibud: any,
    start_tzrt: any,
    start_sug_mhir: any,
    codezacaut: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Mhirim_Get_Tkufa?shibud=${shibud}&start_tzrt=${start_tzrt}&start_sug_mhir=${start_sug_mhir}&codezacaut=${codezacaut}`
      )
    );
    return item;
  }

  async get_all_payment_type_to_prices(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_all_payment_type_to_prices`
      )
    );
    return item;
  }

  async get_all_new_shlohot(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_all_new_shlohot`
      )
    );
    return item;
  }

  async Tables_Select_Gnrl(order: any, start_prefix: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Tables_Select_Gnrl?order=${order}&start_prefix=${start_prefix}`
      )
    );
    return item;
  }

  async Bezim_Atarim_Only_Yzrn_With_Mcsa_Peilut(
    Order: any,
    YrMcs: any,
    Tz: any,
    DatePartner: any,
    OptAtarSts: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Bezim_Atarim_Only_Yzrn_With_Mcsa_Peilut?Order=${Order}&YrMcs=${YrMcs}&Tz=${Tz}&DatePartner=${DatePartner}&OptAtarSts=${OptAtarSts}`
      )
    );
    return item;
  }

  async Alfon_Atarim_By_Tz(
    Order: any,
    Yr: any,
    Tz: any,
    OptAtarType: any,
    OptAtarSts: any,
    DatePartner: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Alfon_Atarim_By_Tz?Order=${Order}&Yr=${Yr}&Tz=${Tz}&OptAtarType=${OptAtarType}&OptAtarSts=${OptAtarSts}&DatePartner=${DatePartner}`
      )
    );
    return item;
  }

  async check_shivokim_Independent(flock_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/check_shivokim_Independent?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivok_to_mashchata_current_date_and_week_ago_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_to_mashchata_current_date_and_week_ago_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivok_to_mashchata_by_date_and_flock_id(
    flock_id: any,
    StartDate: any,
    EndDate: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_to_mashchata_by_date_and_flock_id?flock_id=${flock_id}&StartDate=${StartDate}&EndDate=${EndDate}`
      )
    );
    return item;
  }

  async get_shivok_to_mashchata_top20_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_to_mashchata_top20_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivok_from_imon_to_all_sites_top20_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_from_imon_to_all_sites_top20_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivokim_top20_by_flock_id(flock_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_top20_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivokim_Independent_top20_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_Independent_top20_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivok_from_imon_to_all_sites_current_date_and_week_ago_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_from_imon_to_all_sites_current_date_and_week_ago_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivok_from_imon_to_all_sites_by_date_and_flock_id(
    flock_id: any,
    StartDate: any,
    EndDate: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_from_imon_to_all_sites_by_date_and_flock_id?flock_id=${flock_id}&StartDate=${StartDate}&EndDate=${EndDate}`
      )
    );
    return item;
  }

  async get_shivokim_splits_by_date_and_flock_id(
    flock_id: any,
    StartDate: any,
    EndDate: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_splits_by_date_and_flock_id?flock_id=${flock_id}&StartDate=${StartDate}&EndDate=${EndDate}`
      )
    );
    return item;
  }

  async get_shivok_to_mashchata_by_flock_id(flock_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_to_mashchata_by_flock_id?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivok_from_imon_to_all_sites(flock_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivok_from_imon_to_all_sites?flock_id=${flock_id}`
      )
    );
    return item;
  }

  async get_shivokim_Independent_by_date_and_flock_id(
    flock_id: any,
    StartDate: any,
    EndDate: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_Independent_by_date_and_flock_id?flock_id=${flock_id}&StartDate=${StartDate}&EndDate=${EndDate}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_shivokim_Independent_current_date_and_week_ago_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_Independent_current_date_and_week_ago_by_flock_id?flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_shivokim_by_date_and_flock_id(
    flock_id: any,
    StartDate: any,
    EndDate: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_by_date_and_flock_id?flock_id=${flock_id}&StartDate=${StartDate}&EndDate=${EndDate}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_shivokim_current_date_and_week_ago_by_flock_id(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shivokim_current_date_and_week_ago_by_flock_id?flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_grower_num_by_farm_id(farm_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_grower_num_by_farm_id?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_new_grower_name_id_by_Old_Name_Yazran(
    Old_Name_Yazran: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_new_grower_name_id_by_Old_Name_Yazran?Old_Name_Yazran=${Old_Name_Yazran}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_id_by_certificate_id(certificate_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_id_by_certificate_id?certificate_id=${certificate_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_flock_close_date_by_flock_num(flock_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_flock_close_date_by_flock_num?flock_num=${flock_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async history_get_meshavek_tzamod_more_details_by_growerNum_and_tzrt(
    hz_Yzrn: any,
    hz_tzrt: any,
    hz_Rishaion_Msk: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/history_get_meshavek_tzamod_more_details_by_growerNum_and_tzrt?hz_Yzrn=${hz_Yzrn}&hz_tzrt=${hz_tzrt}&hz_Rishaion_Msk=${hz_Rishaion_Msk}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async history_get_meshavek_tzamod_more_details_by_farm_id_and_atar_0(
    hz_Yzrn: any
  ): Promise<any[]> {
    console.log(hz_Yzrn);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/history_get_meshavek_tzamod_more_details_by_farm_id_and_atar_0?hz_Yzrn=${hz_Yzrn}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_meshavek_tzamod_more_details_by_farm_id(
    farm_id: any
  ): Promise<any[]> {
    console.log(farm_id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_meshavek_tzamod_more_details_by_farm_id?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async history_get_meshavek_tzamod_more_details_by_farm_id(
    farm_id: any
  ): Promise<any[]> {
    console.log(farm_id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/history_get_meshavek_tzamod_more_details_by_farm_id?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async history_get_meshavek_tzamod_more_details(hz_Yzrn: any): Promise<any[]> {
    console.log(hz_Yzrn);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/history_get_meshavek_tzamod_more_details?hz_Yzrn=${hz_Yzrn}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_meshavek_tzamod_more_details(
    hz_Yzrn: any,
    hz_tzrt: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_meshavek_tzamod_more_details?hz_Yzrn=${hz_Yzrn}&hz_tzrt=${hz_tzrt}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async top_1_get_old_flocks_by_siteId_and_growerId(
    farm_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/top_1_get_old_flocks_by_siteId_and_growerId?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async prc_quarantine_details_to_eran(farm_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/prc_quarantine_details_to_eran?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_flock_ages_by_flock_id(flock_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_flock_ages_by_flock_id?flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_Internal_transfer_certificates(
    site_num: any,
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_Internal_transfer_certificates?site_num=${site_num}&flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_old_flocks_by_siteId_and_growerId(farm_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_old_flocks_by_siteId_and_growerId?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_real_hiclos_in_site_from_madgera(
    farm_id: any,
    flock_id: any
  ): Promise<any[]> {
    if (flock_id === '') {
      flock_id = 0;
    }

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_real_hiclos_in_site_from_madgera?farm_id=${farm_id}&flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_farm_code_by_farm_id(farm_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_farm_code_by_farm_id?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_mifkadim_by_atar_id_and_flock_num(
    flock_num: any,
    atar_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_mifkadim_by_atar_id_and_flock_num?flock_num=${flock_num}&atar_id=${atar_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_pinoyim_by_flock_num_and_atar_id(
    flock_num: any,
    atar_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_pinoyim_by_flock_num_and_atar_id?flock_num=${flock_num}&atar_id=${atar_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_more_hiclos_pargit_after_kizuz(
    id_atar: any,
    flock_num: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_more_hiclos_pargit_after_kizuz?id_atar=${id_atar}&flock_num=${flock_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Get_grower_num_and_grower_id_by_farm_code(
    farm_code: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_grower_num_and_grower_id_by_farm_code?farm_code=${farm_code}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_grower_id_by_grower_number(grower_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_grower_id_by_grower_number?grower_num=${grower_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_farm_id_by_farm_code(farm_code: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_farm_id_by_farm_code?farm_code=${farm_code}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_flock_num_by_farm_id(farm_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_flock_num_by_farm_id?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_more_hiclos_pargit(
    id_atar: any,
    flock_num: any,
    cdgdl: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_more_hiclos_pargit?id_atar=${id_atar}&flock_num=${flock_num}&cdgdl=${cdgdl}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_first_hicls_by_farm_code(
    farm_code: any,
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_first_hicls_by_farm_code?farm_code=${farm_code}&flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async check_active_growers(yz_yzrn: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/check_active_growers?yz_yzrn=${yz_yzrn}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_were_house_name_and_code_by_id_were_house(
    id_were_house: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_were_house_name_and_code_by_id_were_house?id_were_house=${id_were_house}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_name_of_wereHouse_to_nsvk_from_grower(
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_name_of_wereHouse_to_nsvk_from_grower?flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_current_partners_by_cdgdl(cdgdl: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_current_partners_by_cdgdl?cdgdl=${cdgdl}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_num_of_lolim_by_farm_id(farm_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_num_of_lolim_by_farm_id?farm_id=${farm_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_real_hiclos_in_site_splite(
    site_num: any,
    flock_id: any,
    site_num_splite: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_real_hiclos_in_site_splite?site_num=${site_num}&flock_id=${flock_id}&site_num_splite=${site_num_splite}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_real_hiclos_in_site(site_num: any, flock_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_real_hiclos_in_site?site_num=${site_num}&flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_atar_partnerts_and_partners_all_tzrt_witout_hatala_by_num_yzrn(
    num_yzrn: any,
    chosen_year: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_atar_partnerts_and_partners_all_tzrt_witout_hatala_by_num_yzrn?num_yzrn=${num_yzrn}&chosen_year=${chosen_year}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_real_hiclos_in_site_the_all_site(
    site_num: any,
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_real_hiclos_in_site_the_all_site?site_num=${site_num}&flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_hiclos_gidul_hotz_by_partner(
    grower_num: any,
    flock_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_hiclos_gidul_hotz_by_partner?grower_num=${grower_num}&flock_id=${flock_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_main_partner_id_from_partner_num(grower_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_main_partner_id_from_partner_num?grower_num=${grower_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_msvk_zamud(Yzrn_num: any, site_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_msvk_zamud?Yzrn_num=${Yzrn_num}&site_num=${site_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_main_grower_by_code_gidul(code_gidul: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_main_grower_by_code_gidul?code_gidul=${code_gidul}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_grower_id_by_farm_num(farm_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_grower_id_by_farm_num?farm_num=${farm_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_growers_id_with_splite_by_farm_num(farm_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_growers_id_with_splite_by_farm_num?farm_num=${farm_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async check_sug_megadel2(growerNum: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/check_sug_megadel2?growerNum=${growerNum}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_split_farm_by_grower_id(grower_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_split_farm_by_grower_id?grower_id=${grower_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_shem_yeshov_by_code_yeshov(code_yeshov: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_shem_yeshov_by_code_yeshov?code_yeshov=${code_yeshov}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_start_grower_det(
    grower_id: any,
    siteNum: any,
    gidulNum: any,
    growerNum: any,
    yz_shem_yeshuv: any,
    grower_yz_zehut: any,
    yz_msk: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_start_grower_det?grower_id=${grower_id}&siteNum=${siteNum}&gidulNum=${gidulNum}&growerNum=${growerNum}&yz_shem_yeshuv=${yz_shem_yeshuv}&grower_yz_zehut=${grower_yz_zehut}&yz_msk=${yz_msk}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async getFarm(
    farmID,
    settlementID,
    growerID,
    fundingCustomerID,
    farmTypeID,
    farmStatusID,
    fromDate,
    toDate,
    isFarmBlockFunder,
    labID,
    belongingGroupID,
    isDeleted,
    isQuarantine,
    blockID,
    isNotBlock,
    henHouseType,
    splitHenHouse
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getFarm` +
          `?farmID=${farmID}` +
          `&settlementID=${settlementID}` +
          `&growerID=${growerID}&fundingCustomerID=${fundingCustomerID}&farmTypeID=${farmTypeID}` +
          `&farmStatusID=${farmStatusID}&fromDate=${fromDate}&toDate=${toDate}&isFarmBlockFunder=${isFarmBlockFunder}` +
          `&labID=${labID}&belongingGroupID=${belongingGroupID}&isDeleted=${isDeleted}&isQuarantine=${isQuarantine}` +
          `&blockID=${blockID}&isNotBlock=${isNotBlock}&henHouseType=${henHouseType}&splitHenHouse=${splitHenHouse}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Get_grower_id_by_name(grower_name: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_grower_id_by_name?grower_name=${grower_name}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Get_split_site_name_by_grower_id(growerId: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_split_site_name_by_grower_id?growerId=${growerId}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  test_eran() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    var paramData = [
      { name: 'flock_id', value: '104,831' },
      { name: 'from_date', value: '2022-11-22 00:00:00' },
      { name: 'to_date', value: '2023-07-10 00:00:00' },
      { name: 'isLive(PM)', value: 0 },
      { name: 'bacteria_id(sensitivity)', value: 0 },
    ];
    var jsonFinal = [
      {
        reportName: '\\\\amznfsx97bxnytt.lul.epb\\Reports\\Report\\ChickenHealth\\FlockHistory.rpt',
        pdfName:
          '\\\\amznfsx97bxnytt.lul.epb\\Scan\\ChickenHealth\\flock\\' +
          'params.data.id' +
          '.pdf',
        connectionString: 'ChickenHealth',
        param: paramData,
      },
    ];

    this.http
      .post<any>(
        `${environment.apiPath}/growerService.asmx/exportPDFWithHebrewDate`,
        JSON.stringify(jsonFinal),
        { headers: headers }
      )
      .subscribe((data) => {
        console.log('data error=' + JSON.stringify(data));

        if (data) {
          window.open(
            'https://reports.epbapp.org/EggMovements/' + 'params.data.id' + '.pdf'
          );
        } else {
          console.log('FALLLLLLLLLLLLLLLLLLLLLLLLLLLLSEE');
        }
      });
  }

  async Get_grower_num_and_grower_id_by_grower_id_new(
    grower_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_grower_num_and_grower_id_by_grower_id_new?grower_id=${grower_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_growerId_By_code_atar(ycode: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_growerId_By_code_atar?ycode=${ycode}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Get_gidul_hotz_num_by_farm_num(farm_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_gidul_hotz_num_by_farm_num?farm_num=${farm_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Get_zan_num_new(
    farm_num: any,
    grower_num: any,
    min_date_hiclos: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_zan_num_new?farm_num=${farm_num}&grower_num=${grower_num}&min_date_hiclos=${min_date_hiclos}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Get_zan_num(
    farm_num: any,
    grower_num: any,
    min_date_hiclos: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_zan_num?farm_num=${farm_num}&grower_num=${grower_num}&min_date_hiclos=${min_date_hiclos}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_farm_det_v2(yzrn_id: any, farm_num: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_farm_det_v2?yzrn_id=${yzrn_id}&farm_num=${farm_num}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async farm_start_det(grower_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/farm_start_det?grower_id=${grower_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   סיכום חודשי
  async Teuda_Calendary(
    order: any,
    year: any,
    tz: any,
    yzrn: any,
    Rishaion: any,
    HodFr: any,
    HodTo: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Teuda_Calendary?order=${order}&year=${year}&tz=${tz}&yzrn=${yzrn}&Rishaion=${Rishaion}&HodFr=${HodFr}&HodTo=${HodTo}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Yzrn_Chk_Hok_Galil(
    Yzrn: any,
    Tzrt: any,
    yr: any,
    dateHzmd: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yzrn_Chk_Hok_Galil?Yzrn=${Yzrn}&Tzrt=${Tzrt}&yr=${yr}&dateHzmd=${dateHzmd}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Tkufa_Mhir_Select_New(
    order: any,
    start_code_yzrn: any,
    start_tzrt: any,
    start_sug_mhir: any,
    start_shana: any,
    Job: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Tkufa_Mhir_Select_New?order=${order}&start_code_yzrn=${start_code_yzrn}&start_tzrt=${start_tzrt}&start_sug_mhir=${start_sug_mhir}&start_shana=${start_shana}&Job=${Job}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Tables_Select_New(
    order: any,
    start_prefix: any,
    start_code: any,
    start_Year: any,
    start_Tzrt: any,
    start_Yzrn: any,
    start_Status: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Tables_Select_New?order=${order}&start_prefix=${start_prefix}&start_code=${start_code}&start_Year=${start_Year}&start_Tzrt=${start_Tzrt}&start_Yzrn=${start_Yzrn}&start_Status=${start_Status}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   רב שנתי
  async Bizua_Rav_Shnati_Scr(
    YearCrnt: any,
    YearBack: any,
    Toz: any,
    SvkDateFrom: any,
    SvkDateTo: any,
    Ezorfrom: any,
    Ezorto: any,
    YzrnFrom: any,
    YzrnTo: any,
    xsl: any,
    Yr1: any,
    Yr2: any,
    Yr3: any,
    Yr4: any,
    Efr_Ptm: any,
    Sug_Tslm: any,
    atar_code: any,
    show_svk_cdgdl: any,
    SvkDateFrom_Rel: any,
    SvkDateTo_Rel: any,
    job: any,
    ShowAhzBza: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Bizua_Rav_Shnati_Scr?YearCrnt=${YearCrnt}&YearBack=${YearBack}&Toz=${Toz}&SvkDateFrom=${SvkDateFrom}&SvkDateTo=${SvkDateTo}&Ezorfrom=${Ezorfrom}&Ezorto=${Ezorto}&YzrnFrom=${YzrnFrom}&YzrnTo=${YzrnTo}&xsl=${xsl}&Yr1=${Yr1}&Yr2=${Yr2}&Yr3=${Yr3}&Yr4=${Yr4}&Efr_Ptm=${Efr_Ptm}&Sug_Tslm=${Sug_Tslm}&atar_code=${atar_code}&show_svk_cdgdl=${show_svk_cdgdl}&SvkDateFrom_Rel=${SvkDateFrom_Rel}&SvkDateTo_Rel=${SvkDateTo_Rel}&job=${job}&ShowAhzBza=${ShowAhzBza}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Tz_By_Yzrn(
    order: any,
    start_yzrn: any,
    start_year: any,
    start_tz: any,
    start_sg_mcsa: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Tz_By_Yzrn?order=${order}&start_yzrn=${start_yzrn}&start_year=${start_year}&start_tz=${start_tz}&start_sg_mcsa=${start_sg_mcsa}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Mdgrot_Teuda(
    Order: any,
    start_yzrn: any,
    start_tz: any,
    start_year: any,
    start_date: any,
    End_date: any,
    Rishaion: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Mdgrot_Teuda?Order=${Order}&start_yzrn=${start_yzrn}&start_tz=${start_tz}&start_year=${start_year}&start_date=${start_date}&End_date=${End_date}&Rishaion=${Rishaion}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Yazran_Cartis_Select(
    order: any,
    start_yzrn: any,
    start_year: any,
    start_tz: any,
    start_sg_mcsa: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yazran_Cartis_Select?order=${order}&start_yzrn=${start_yzrn}&start_year=${start_year}&start_tz=${start_tz}&start_sg_mcsa=${start_sg_mcsa}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   המרת שלוחה ממערבי לאושיק
  async convert_shlohaMaaravi_to_shlohaOshik(shloha: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${
          environment.apiPath
        }growerService.asmx/convert_shlohaMaaravi_to_shlohaOshik?shloha=${shloha.toString()}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   המרת שלוחה מאושיק למערבי
  async convert_shlohaOshik_to_shlohaMaaravi(shloha: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${
          environment.apiPath
        }growerService.asmx/convert_shlohaOshik_to_shlohaMaaravi?shloha=${shloha.toString()}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   --exec Pargit_Teuda @order =4, @start_yzrn ="02060341" , @start_tz ='48',@start_year  ='2022', @start_date  ='', @end_date  ='', @Rishaion  =0
  async Pargit_Teuda(
    order: any,
    start_yzrn: any,
    start_tz: any,
    start_year: any,
    start_date: any,
    end_date: any,
    Rishaion: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Pargit_Teuda?order=${order}&start_yzrn=${start_yzrn}&start_tz=${start_tz}
        &start_year=${start_year}&start_date=${start_date}&end_date=${end_date}&Rishaion=${Rishaion}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   --exec Micsa_Get_McsKvua_New @ORDER 	=2 ,@YZRN 	="11303047",@TZ   ='30',@YEAR  =2023, @MCS1 ='1' , @MCS3  ='3' ,@DtSvk='', @tik_McsSys=0
  // מחזיר שם ישוב עם מספר מגדל
  async Micsa_Get_McsKvua_New(
    ORDER: any,
    YZRN: any,
    Tz: any,
    YEAR: any,
    MCS1: any,
    MCS3: any,
    DtSvk: any,
    tik_McsSys: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Micsa_Get_McsKvua_New?ORDER=${ORDER}&YZRN=${YZRN}&Tz=${Tz}
        &YEAR=${YEAR}&MCS1=${MCS1}&MCS3=${MCS3}&DtSvk=${DtSvk}&tik_McsSys=${tik_McsSys}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // מחזיר שם ישוב עם מספר מגדל
  async Get_yz_shem_yeshuv_by_yz_yzrn(yz_yzrn: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_yz_shem_yeshuv_by_yz_yzrn?yz_yzrn=${yz_yzrn}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // תעודות
  //   -- exec Teuda_Select_New @order=1, @start_year=2023, @start_tzrt=30,@start_yzrn="02060341",@start_date="20230101",@end_date="20231231", @start_list=0,@Rishaion=0
  async Teuda_Select_New(
    order: any,
    start_year: any,
    start_tzrt: any,
    start_yzrn: any,
    start_date: any,
    end_date: any,
    start_list: any,
    Rishaion: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Teuda_Select_New?order=${order}&start_year=${start_year}&start_tzrt=${start_tzrt}&start_yzrn=${start_yzrn}&start_date=${start_date}&end_date=${end_date}&start_list=${start_list}&Rishaion=${Rishaion}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // מציג אתרים לפי מספר מגדל כולל לול למחצה
  async Tables_Select_All_Atarim_Of_Yzrn(
    order: any,
    start_prefix: any,
    start_code: any,
    start_Year: any,
    start_Tzrt: any,
    start_Yzrn: any,
    start_Status: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Tables_Select_All_Atarim_Of_Yzrn?order=${order}&start_prefix=${start_prefix}&start_code=${start_code}&start_Year=${start_Year}&start_Tzrt=${start_Tzrt}&start_Yzrn=${start_Yzrn}&start_Status=${start_Status}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // חיפוש מגדלים לפי שם מגדל, שם ישוב, מס מגדל
  async Yzrn_Select_For_Search_Yzrn(
    order: any,
    start_code_yzrn: any,
    start_name_yzrn: any,
    start_name_yeshuv: any,
    start_sug: any,
    KntNo: any,
    start_tzrt: any,
    start_year: any,
    AcountNo: any,
    start_Id_No: any,
    start_Msk: any,
    code: any,
    RishaionNo: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yzrn_Select_For_Search_Yzrn?order=${order}&start_code_yzrn=${start_code_yzrn}&start_name_yzrn=${start_name_yzrn}&start_name_yeshuv=${start_name_yeshuv}&start_sug=${start_sug}&KntNo=${KntNo}&start_tzrt=${start_tzrt}&start_year=${start_year}&AcountNo=${AcountNo}&start_Id_No=${start_Id_No}&start_Msk=${start_Msk}&code=${code}&RishaionNo=${RishaionNo}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // חיפוש מגדלים לפי אתר
  async Yzrn_Select_For_Search_Yzrn_Atar(
    order: any,
    start_code_yzrn: any,
    start_name_yzrn: any,
    start_name_yeshuv: any,
    start_Id_No: any,
    start_Msk: any,
    start_tzrt: any,
    TzLab: any,
    AtarNm: any,
    AtarNo: any,
    sts: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yzrn_Select_For_Search_Yzrn_Atar?order=${order}&start_code_yzrn=${start_code_yzrn}&start_name_yzrn=${start_name_yzrn}&start_name_yeshuv=${start_name_yeshuv}&start_Id_No=${start_Id_No}&start_Msk=${start_Msk}&start_tzrt=${start_tzrt}&TzLab=${TzLab}&AtarNm=${AtarNm}&AtarNo=${AtarNo}&sts=${sts}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // איכלוס 750
  async get_calc_750_eran(farnId: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_calc_750_eran?farnId=${farnId}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // שותפי פטם
  async Partners_By_Farm_Select(
    order: any,
    Atar_Code: any,
    Tzrt: any,
    yzrnH: any,
    datefrom: any,
    dateto: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Partners_By_Farm_Select?order=${order}&Atar_Code=${Atar_Code}&Tzrt=${Tzrt}&yzrnH=${yzrnH}&datefrom=${datefrom}&dateto=${dateto}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  // מביא מגדל ראשי ופרטי קבוצת גידול חוץ
  async Partners_Get_CodeGidul(
    order: any,
    start_code_yzrn: any,
    start_tzrt: any,
    start_year: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Partners_Get_CodeGidul?order=${order}&start_code_yzrn=${start_code_yzrn}&start_tzrt=${start_tzrt}&start_year=${start_year}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   שם ישן של מגדל
  async Yazran_History_Get_Data(yazran: any, Field_Name: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yazran_History_Get_Data?yazran=${yazran}&Field_Name=${Field_Name}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Yzrn_Other_Addr_Get_Data(yzrn: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yzrn_Other_Addr_Get_Data?yzrn=${yzrn}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Yzrn_Get_Rishaion_Esek(
    order: any,
    tzrt: any,
    yzrn: any,
    dt: any,
    atar_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yzrn_Get_Rishaion_Esek?order=${order}&tzrt=${tzrt}&yzrn=${yzrn}&dt=${dt}&atar_id=${atar_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_hiclos_by_growerId_and_farmId(
    farm_id: any,

    grower_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_hiclos_by_growerId_and_farmId?farm_id=${farm_id}&grower_id=${grower_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async Yzrn_Select_By_View_New(
    Order: any,
    start_code_yzrn: any,
    start_name_yzrn: any,
    start_name_yeshuv: any,
    start_sug: any,
    start_status: any,
    start_tzrt: any,
    start_year: any,
    start_sug_mcsa: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Yzrn_Select_By_View_New?Order=${Order}&start_code_yzrn=${start_code_yzrn}&start_name_yzrn=${start_name_yzrn}&start_name_yeshuv=${start_name_yeshuv}&start_sug=${start_sug}&start_status=${start_status}&start_tzrt=${start_tzrt}&start_year=${start_year}&start_sug_mcsa=${start_sug_mcsa}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async get_Farmid_By_yzId(yz_Id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_Farmid_By_yzId?yz_id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async Micsa_Select_New(
    Order: any,
    start_yzrn: any,
    start_year: any,
    start_tz: any,
    start_sg_mcsa: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Micsa_Select_New?Order=${Order}&start_yzrn=${start_yzrn}&start_year=${start_year}&start_tz=${start_tz}&start_sg_mcsa=${start_sg_mcsa}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async getPartner(
    farmID: any,
    flockID: any,
    lull2000Code: any,
    date_entry: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getPartner?farmID=${farmID}&flockID=${flockID}&lull2000Code=${lull2000Code}&date_entry=${date_entry}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async YazrnExtrnl_Get_Code(
    Order: any,
    MsvkExtrnl: any,
    YzrnMoaza: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/YazrnExtrnl_Get_Code?Order=${Order}&MsvkExtrnl=${MsvkExtrnl}&YzrnMoaza=${YzrnMoaza}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async megadel_by_atar_name_yeshov_shloha_active(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadel_by_atar_name_yeshov_shloha_active?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadel_by_atar_name_yeshov_shloha_all_with_pa_Counter(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any,
    pa_Counter: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadel_by_atar_name_yeshov_shloha_all_with_pa_Counter?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}&pa_Counter=${pa_Counter}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadel_by_atar_name_yeshov_shloha_active_with_pa_Counter(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any,
    pa_Counter: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadel_by_atar_name_yeshov_shloha_active_with_pa_Counter?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}&pa_Counter=${pa_Counter}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async Get_partners_by_pa_Counter_and_megadel(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any,
    pa_Counter: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_partners_by_pa_Counter_and_megadel?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}&pa_Counter=${pa_Counter}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async Get_partners_by_pa_Counter_and_megadel_not_active(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any,
    pa_Counter: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_partners_by_pa_Counter_and_megadel_not_active?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}&pa_Counter=${pa_Counter}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async Get_partners_by_pa_Counter_and_megadel_all(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any,
    pa_Counter: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_partners_by_pa_Counter_and_megadel_all?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}&pa_Counter=${pa_Counter}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadel_by_atar_name_yeshov_shloha_not_active_with_pa_Counter(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any,
    pa_Counter: any
  ): Promise<any[]> {
    console.log('yz_Id-999: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadel_by_atar_name_yeshov_shloha_not_active_with_pa_Counter?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}&pa_Counter=${pa_Counter}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadel_by_atar_name_yeshov_shloha_not_active(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadel_by_atar_name_yeshov_shloha_not_active?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadel_by_atar_name_yeshov_shloha_all(
    yz_Id: any,
    yz_first_name: any,
    yz_shem_yeshuv: any,
    belonging_group_id: any,
    yz_yzrn: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadel_by_atar_name_yeshov_shloha_not_active?yz_Id=${yz_Id}&yz_first_name=${yz_first_name}&yz_shem_yeshuv=${yz_shem_yeshuv}&belonging_group_id=${belonging_group_id}&yz_yzrn=${yz_yzrn}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async prc_farm_details_eran(farm_id: any, hen_house_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/prc_farm_details_eran?farm_id=${farm_id}&hen_house_id=${hen_house_id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async GET_YAZRAN_BY_YZ_ID(yz_Id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/GET_YAZRAN_BY_YZ_ID?yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async all_Megadel_Details_ByFirstName(firstName: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/All_Megadel_Details_ByFirstName_All?firstName=${firstName}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async get_siteName_by_yzId(yz_Id: any): Promise<any[]> {
    console.log('yz_Id123: ', yz_Id);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_siteName_by_yzId?yz_Id=${yz_Id}`
      )
    );
    console.log('item123: ', item);

    return item;
  }

  async Get_farmId_By_siteName(siteName: any): Promise<any[]> {
    console.log('siteName1: ', siteName);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_farmId_By_siteName?siteName=${siteName}`
      )
    );
    console.log('item123: ', item);

    return item;
  }

  async all_Megadel_Details_ByFirstName_That_Active(
    firstName: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/all_Megadel_Details_ByFirstName_That_Active?firstName=${firstName}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async all_Megadel_Details_ByFirstName_That_Active_To_Desplay(
    firstName: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/all_Megadel_Details_ByFirstName_That_Active_To_Desplay?firstName=${firstName}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async All_Megadel_Details_ByFirstName_All_To_Desplay(
    firstName: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/All_Megadel_Details_ByFirstName_All_To_Desplay?firstName=${firstName}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async all_Megadel_Details_ByFirstName_That_NotActiv(
    firstName: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/all_Megadel_Details_ByFirstName_That_NotActive?firstName=${firstName}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async all_Megadel_Details_ByFirstName_That_Not_Active_To_Desplay(
    firstName: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/all_Megadel_Details_ByFirstName_That_Not_Active_To_Desplay?firstName=${firstName}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async Get_num_of_gidol_hotz_from_yz_yzrn(pa_Yzrn: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_num_of_gidol_hotz_from_yz_yzrn?pa_Yzrn=${pa_Yzrn}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async all_Megadel_Details_ByFirstName_and_shemYeshuv(
    firstName: any,
    shem_yeshuv: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/all_Megadel_Details_ByFirstName_and_shemYeshuv?firstname=${firstName}&shem_yeshuv=${shem_yeshuv}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async allMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay(
    firstName: any,
    shem_yeshuv: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/allMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_active(
    firstName: any,
    shem_yeshuv: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_active?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async get_megadelDetails_ByShlocha_Not_active(
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_megadelDetails_ByShlocha_Not_active?belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async get_megadelDetails_ByShlocha_active(
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_megadelDetails_ByShlocha_active?belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async get_megadelDetails_ByShlocha(belonging_group_id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_megadelDetails_ByShlocha?belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadelDetails_by_atar_Notactive(yz_Id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadelDetails_by_atar_Notactive?yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadelDetails_by_atar_active(yz_Id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadelDetails_by_atar_active?yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadelDetails_by_atar(yz_Id: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadelDetails_by_atar?yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadelDetails_by_shem_shlocha_all(
    firstname: any,
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadelDetails_by_shem_shlocha_all?firstname=${firstname}&belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadelDetails_by_shem_shlocha_active(
    firstname: any,
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadelDetails_by_shem_shlocha_active?firstname=${firstname}&belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async megadelDetails_by_shem_shlocha(
    firstname: any,
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/megadelDetails_by_shem_shlocha?firstname=${firstname}&belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_Notactive(
    firstName: any,
    shem_yeshuv: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_Notactive?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async Get_All_Shloha_Id_By_NAME(name: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/Get_All_Shloha_Id_By_NAME?name=${name}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay(
    firstName: any,
    shem_yeshuv: any,
    yz_Id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}&yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_active(
    firstName: any,
    shem_yeshuv: any,
    yz_Id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_active?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}&yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_Notactive(
    firstName: any,
    shem_yeshuv: any,
    yz_Id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_Notactive?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}&yz_Id=${yz_Id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_not_active(
    firstName: any,
    shem_yeshuv: any,
    yz_Id: any,
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_not_active?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}&yz_Id=${yz_Id}&belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha(
    firstName: any,
    shem_yeshuv: any,
    yz_Id: any,
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}&yz_Id=${yz_Id}&belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_all(
    firstName: any,
    shem_yeshuv: any,
    yz_Id: any,
    belonging_group_id: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_all?firstname=${firstName}&yz_shem_yeshuv=${shem_yeshuv}&yz_Id=${yz_Id}&belonging_group_id=${belonging_group_id}`
      )
    );
    console.log('item: ', item);

    return item;
  }

  async getAllShloha(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getAllShloha`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async GetAllShlohaNAME(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/GetAllShlohaNAME`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async getAllMegadelDetailsWantedFunc(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getAllMegadelDetailsWantedFunc`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async getAllNameSiteIdstatus(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getAllNameSiteIdstatus`
      )
    );
    console.log('item: ', item);
    return item;
  }

  async getAllYeshovimAndEzurim(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getAllYeshovimAndEzurim`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //  end Megadel: ------------------------------------------------------------------------------------------------------------------------

  async bringRepMin(userNameOrId: any, month: any, year: any): Promise<any[]> {
    console.log('month: ', month);
    console.log('userNameOrId: ', userNameOrId);
    const yearRegex = /\d+$/;
    const userId = userNameOrId.match(yearRegex)[0];

    // const words = userNameOrId.split('-');
    // const userId = words[1];
    // console.log('userId: ', userId);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/getRepByUserIdAndMonthAandYear?userId=${userId}&monthNum=${month}&yearNum=${year}`
      )
    );

    console.log('item: ', item);

    return item;
  }

  async bringRepFull(userNameOrId: any, month: any, year: any): Promise<any[]> {
    console.log('month: ', month);
    console.log('userNameOrId: ', userNameOrId);

    const words = userNameOrId.split('-');
    const userId = words[1];
    console.log('userId: ', userId);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/getRepByUserIdAndMonthAandYearFull?userId=${userId}&monthNum=${month}&yearNum=${year}`
      )
    );

    console.log('item: ', item);

    return item;
  }

  async bringRepIntheCurrentMonth(): Promise<any[]> {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/BringRepIntheCurrentMonthAndYear?monthNum=${currentMonth}&yearNum=${currentYear}`
      )
    );

    console.log('item: ', item);

    return item;
  }

  async bringRepIntheChosenMonthAndYear(month: any, year: any): Promise<any[]> {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/BringRepIntheCurrentMonthAndYear?monthNum=${month}&yearNum=${year}`
      )
    );

    console.log('item: ', item);

    return item;
  }

  async getAllTotalAmountByYearAndMonth(month: any, year: any): Promise<any[]> {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    console.log('currentMonth: ', currentMonth);
    console.log('currentYear: ', currentYear);

    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/getAllTotalAmountByYearAndMonth?monthNum=${month}&yearNum=${year}`
      )
    );

    console.log('item in getAllTotalAmountByYearAndMonth: ', item);
    item[0].lastDayOfMonth = lastDayOfMonth;
    console.log('typeof(item[0].year: ', typeof item[0].year);

    const cutTheYear = item[0].year.toString();

    const newValue = cutTheYear.substring(2); // This will extract the characters from index 2 to the end of the string.
    let numValue = parseInt(newValue); // Convert the string to a number

    item[0].year = numValue;

    console.log('getAllTotalAmountByYearAndMonthWithLastDay: ', item);

    return item;
  }

  async getAllRepMin2(): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/getAllRepMin2`
      )
    );
    return item;
  }

  async getUserTotalByDate(): Promise<any[]> {
    const itemsByCart = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/getUserTotalByDate`
      )
    );
    console.log('itemsByCart: ', itemsByCart);

    return itemsByCart;
  }

  async getFullNameAnrUserId(): Promise<any[]> {
    const itemsByCart = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}FoodService.asmx/getFullNameAnrUserId`
      )
    );
    return itemsByCart;
  }
}
