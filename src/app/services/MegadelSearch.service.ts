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
