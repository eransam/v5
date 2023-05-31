import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MegadelSearchService {
  constructor(private http: HttpClient) {}

  //   Megadel: ------------------------------------------------------------------------------------------------------------------------

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
    lull2000Code: any
  ): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/getPartner?farmID=${farmID}&flockID=${flockID}&lull2000Code=${lull2000Code}`
      )
    );
    console.log('item: ', item);
    return item;
  }

  //   getPartner(farmID, flockID, lull2000Code) {
  //     return this.http.get<any>(
  //       `${environment.apiPath}/growerService.asmx/getPartner?farmID=${farmID}&flockID=${flockID}&lull2000Code=${lull2000Code}`
  //     );
  //   }

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

  async get_growerId_By_code_atar(ycode: any): Promise<any[]> {
    const item = await firstValueFrom(
      this.http.get<any[]>(
        `${environment.apiPath}growerService.asmx/get_growerId_By_code_atar?ycode=${ycode}`
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
