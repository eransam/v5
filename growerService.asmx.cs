using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Collections;
using System.Data.SqlClient;
using System.Runtime.InteropServices;
using ReportServiceClass;
using System.IO;
using CrystalDecisions.Shared;
using CrystalDecisions.CrystalReports.Engine;

namespace WebApplication7
{
    /// <summary>
    /// Summary description for FoodService
    /// </summary>
    ///   [WebMethod]
    
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.W
    public class growerService : System.Web.Services.WebService
    {


        [WebMethod]
        public void get_meshavek_tzamod_more_details_by_farm_id(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("get_meshavek_tzamod_more_details_by_farm_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void history_get_meshavek_tzamod_more_details_by_farm_id(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("history_get_meshavek_tzamod_more_details_by_farm_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void history_get_meshavek_tzamod_more_details(string hz_Yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@hz_Yzrn", hz_Yzrn));
            DataSet ds = Connection.GetDataSetBySP("history_get_meshavek_tzamod_more_details", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void get_meshavek_tzamod_more_details(string hz_Yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@hz_Yzrn", hz_Yzrn));
            DataSet ds = Connection.GetDataSetBySP("get_meshavek_tzamod_more_details", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void top_1_get_old_flocks_by_siteId_and_growerId(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("top_1_get_old_flocks_by_siteId_and_growerId", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void prc_quarantine_details_to_eran(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("prc_quarantine_details_to_eran", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void get_flock_ages_by_flock_id(string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@flock_id", flock_id));
            DataSet ds = Connection.GetDataSetBySP("get_flock_ages_by_flock_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_Internal_transfer_certificates(string site_num, string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@site_num", site_num));
            arr.Add(new paramList("@flock_id", flock_id));
            DataSet ds = Connection.GetDataSetBySP("get_Internal_transfer_certificates", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_old_flocks_by_siteId_and_growerId(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("get_old_flocks_by_siteId_and_growerId", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_real_hiclos_in_site_from_madgera(string farm_id, string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            arr.Add(new paramList("@flock_id", flock_id));
            DataSet ds = Connection.GetDataSetBySP("get_real_hiclos_in_site_from_madgera", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_mifkadim_by_atar_id_and_flock_num(string flock_num, string atar_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@flock_num", flock_num));
            arr.Add(new paramList("@atar_id", atar_id));
            DataSet ds = Connection.GetDataSetBySP("get_mifkadim_by_atar_id_and_flock_num", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_pinoyim_by_flock_num_and_atar_id(string flock_num, string atar_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@flock_num", flock_num));
            arr.Add(new paramList("@atar_id", atar_id));
            DataSet ds = Connection.GetDataSetBySP("get_pinoyim_by_flock_num_and_atar_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_more_hiclos_pargit_after_kizuz(string id_atar, string flock_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@id_atar", id_atar));
            arr.Add(new paramList("@flock_num", flock_num));
            DataSet ds = Connection.GetDataSetBySP("get_more_hiclos_pargit_after_kizuz", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void Get_grower_num_and_grower_id_by_farm_code(string farm_code)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_code", farm_code));
            DataSet ds = Connection.GetDataSetBySP("Get_grower_num_and_grower_id_by_farm_code", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_grower_id_by_grower_number(string grower_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_num", grower_num));
            DataSet ds = Connection.GetDataSetBySP("get_grower_id_by_grower_number", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        


                    [WebMethod]
        public void get_farm_code_by_farm_id(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("get_farm_code_by_farm_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_farm_id_by_farm_code(string farm_code)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_code", farm_code));
            DataSet ds = Connection.GetDataSetBySP("get_farm_id_by_farm_code", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_flock_num_by_farm_id(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("get_flock_num_by_farm_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void get_more_hiclos_pargit(string id_atar, string flock_num , string cdgdl)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@id_atar", id_atar));
            arr.Add(new paramList("@flock_num", flock_num));
            arr.Add(new paramList("@cdgdl", cdgdl));

            DataSet ds = Connection.GetDataSetBySP("get_more_hiclos_pargit", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void get_first_hicls_by_farm_code(string farm_code, string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_code", farm_code));
            arr.Add(new paramList("@flock_id", flock_id));

            DataSet ds = Connection.GetDataSetBySP("get_first_hicls_by_farm_code", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void check_active_growers(string yz_yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            DataSet ds = Connection.GetDataSetBySP("check_active_growers", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_were_house_name_and_code_by_id_were_house(string id_were_house)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@id_were_house", id_were_house));
            DataSet ds = Connection.GetDataSetBySP("get_were_house_name_and_code_by_id_were_house", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_name_of_wereHouse_to_nsvk_from_grower(string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@flock_id", flock_id));
            DataSet ds = Connection.GetDataSetBySP("get_name_of_wereHouse_to_nsvk_from_grower", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_current_partners_by_cdgdl(string cdgdl)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@cdgdl", cdgdl));
            DataSet ds = Connection.GetDataSetBySP("get_current_partners_by_cdgdl", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void get_num_of_lolim_by_farm_id(string farm_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            DataSet ds = Connection.GetDataSetBySP("get_num_of_lolim_by_farm_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_real_hiclos_in_site_splite(string site_num, string flock_id, string site_num_splite)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@site_num", site_num));
            arr.Add(new paramList("@flock_id", flock_id));
            arr.Add(new paramList("@site_num_splite", site_num_splite));
            DataSet ds = Connection.GetDataSetBySP("get_real_hiclos_in_site_splite", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void get_atar_partnerts_and_partners_all_tzrt_witout_hatala_by_num_yzrn(string num_yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@num_yzrn", num_yzrn));

            DataSet ds = Connection.GetDataSetBySP("get_atar_partnerts_and_partners_all_tzrt_witout_hatala_by_num_yzrn", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_real_hiclos_in_site_the_all_site(string site_num, string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@site_num", site_num));
            arr.Add(new paramList("@flock_id", flock_id));

            DataSet ds = Connection.GetDataSetBySP("get_real_hiclos_in_site_the_all_site", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_hiclos_gidul_hotz_by_partner(string grower_num, string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_num", grower_num));
            arr.Add(new paramList("@flock_id", flock_id));

            DataSet ds = Connection.GetDataSetBySP("get_hiclos_gidul_hotz_by_partner", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_real_hiclos_in_site(string site_num, string flock_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@site_num", site_num));
            arr.Add(new paramList("@flock_id", flock_id));
            DataSet ds = Connection.GetDataSetBySP("get_real_hiclos_in_site", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_main_partner_id_from_partner_num(string grower_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_num", grower_num));
            DataSet ds = Connection.GetDataSetBySP("get_main_partner_id_from_partner_num", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_msvk_zamud(string Yzrn_num, string site_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@Yzrn_num", Yzrn_num));
            arr.Add(new paramList("@site_num", site_num));
            DataSet ds = Connection.GetDataSetBySP("get_msvk_zamud", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_main_grower_by_code_gidul(string code_gidul)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@code_gidul", code_gidul));
            DataSet ds = Connection.GetDataSetBySP("get_main_grower_by_code_gidul", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_grower_id_by_farm_num(string farm_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_num", farm_num));
            DataSet ds = Connection.GetDataSetBySP("get_grower_id_by_farm_num", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_growers_id_with_splite_by_farm_num(string farm_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_num", farm_num));
            DataSet ds = Connection.GetDataSetBySP("get_growers_id_with_splite_by_farm_num", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void check_sug_megadel2(string growerNum)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@growerNum", growerNum));
            DataSet ds = Connection.GetDataSetBySP("check_sug_megadel2", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_split_farm_by_grower_id(string grower_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_id", grower_id));
            DataSet ds = Connection.GetDataSetBySP("get_split_farm_by_grower_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void get_shem_yeshov_by_code_yeshov(string code_yeshov)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@code_yeshov", code_yeshov));
            DataSet ds = Connection.GetDataSetBySP("get_shem_yeshov_by_code_yeshov", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_start_grower_det_test_not_work(string grower_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_id", grower_id));
            DataSet ds = Connection.GetDataSetBySP("get_start_grower_det", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_start_grower_det(string grower_id, string siteNum, string gidulNum, string growerNum, string yz_shem_yeshuv, string grower_yz_zehut)
        {
            ArrayList arr = new ArrayList();
            if (grower_id != "") arr.Add(new paramList("@grower_id", grower_id));
            if (siteNum != "") arr.Add(new paramList("@siteNum", siteNum));
            if (gidulNum != "") arr.Add(new paramList("@gidulNum", gidulNum));
            if (growerNum != "") arr.Add(new paramList("@growerNum", growerNum));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (grower_yz_zehut != "") arr.Add(new paramList("@grower_yz_zehut", grower_yz_zehut));
            DataSet ds = Connection.GetDataSetBySP("get_start_grower_det", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void megadel_by_atar_name_yeshov_shloha_not_active(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));

            DataSet ds = Connection.GetDataSetBySP("megadel_by_atar_name_yeshov_shloha_not_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }






        [WebMethod]
        public void getFarm(string farmID, string settlementID, string growerID, string fundingCustomerID,
                    string farmTypeID, string farmStatusID, string fromDate, string toDate, string isFarmBlockFunder,
                    string labID, string belongingGroupID, string isDeleted, string isQuarantine, string blockID,
                    string isNotBlock, string henHouseType, string splitHenHouse)
        {

            ArrayList arr = new ArrayList();

            arr.Add(new paramList("@farm_id", farmID));
            arr.Add(new paramList("@settlement_id", settlementID));
            arr.Add(new paramList("@grower_id", growerID));
            arr.Add(new paramList("@funding_customer_id", fundingCustomerID));
            arr.Add(new paramList("@farm_type_id", farmTypeID));
            arr.Add(new paramList("@farm_status_id", farmStatusID)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@farm_from_date", fromDate));
            arr.Add(new paramList("@farm_to_date", toDate));
            arr.Add(new paramList("@farm_block_Funder", isFarmBlockFunder)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@lab_id", labID));
            arr.Add(new paramList("@funding_belonging_group", belongingGroupID));
            arr.Add(new paramList("@isDeleted", isDeleted)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@farm_code", "-1")); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@relation_id", "-1")); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@is_quarantine", isQuarantine)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@block_id", blockID)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@farm_up_id", "-1")); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@is_not_block", isNotBlock)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@hen_house_type_id", henHouseType)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));
            arr.Add(new paramList("@is_split_hen_house", splitHenHouse)); //DDLTestCodeType.SelectedValue != "" ? DDLTestCodeType.SelectedValue : "-1"));

            DataSet ds = Connection.GetDataSetBySP("prc_farm", arr, Connection.Tichnun);

            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void Get_grower_id_by_name(string grower_name)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_name", grower_name));
            DataSet ds = Connection.GetDataSetBySP("Get_grower_id_by_name", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }







        public class paramClass
        {
            public string name { get; set; }
            public string value { get; set; }

        }


            public class reportClass
        {

            public string reportName { get; set; }
            public string pdfName { get; set; }
            public string connectionString { get; set; }

            [JsonProperty("param")]
            public List<paramClass> param { get; set; }

        }

        [WebMethod]
        public void exportPDFWithHebrewDate()
        {
            var reader = new StreamReader(HttpContext.Current.Request.InputStream);
            var inputString = reader.ReadToEnd();

            ArrayList arr = new ArrayList();

            var mydata = JsonConvert.DeserializeObject<List<reportClass>>(inputString);// parse json string to object.
            string base64;
            byte[] data = null;
         
            string x = mydata[0].reportName;
            for (var i = 0; i < mydata[0].param.Count; i++)
            {
                arr.Add(new paramList("@" + mydata[0].param[i].name, mydata[0].param[i].value));

            }

            string returnValue = "";

            TableLogOnInfo tliCurrent = new TableLogOnInfo();
            ReportDocument oRpt2 = new ReportDocument();

            string paramName = string.Empty;
            string paramValue = string.Empty;

            try
            {
                //\\\\epb-iis22\\Report\\ + mydata[0].reportName + ".rpt"

                // oRpt2.Load(\\\\epb-iis22\\Project\\ReportViewer\\Report\\rptGrowerSplitReport.rpt);
                oRpt2.Load(mydata[0].reportName);


                ConnectionInfo connInfo = new ConnectionInfo();
                // the ODBC DSN on this system is GS30QA, but I'm not sure how to specify this via the ConnectionInfo
                // object... So instead I'll list the actual elements for the connection
                connInfo.ServerName = "epb-moaz";
                connInfo.UserID = "sa";

                connInfo.Password = "Lul2000";
                connInfo.DatabaseName = mydata[0].connectionString;

                Tables oTables = oRpt2.Database.Tables;
                foreach (CrystalDecisions.CrystalReports.Engine.Table oTbl in oTables)
                {
                    TableLogOnInfo tableLogonInfo = oTbl.LogOnInfo;
                    tableLogonInfo.ConnectionInfo = connInfo;
                    oTbl.ApplyLogOnInfo(tableLogonInfo);
                }

                ParameterValues Field = null;
                ParameterDiscreteValue Value = null;

                if (arr != null)
                {
                    for (int i = 0; i < arr.Count; i++)
                    {
                        paramValue = (arr[i] as paramList).ParamValue;

                        Field = new ParameterValues();
                        Value = new ParameterDiscreteValue();
                        Value.Value = paramValue;
                        paramName = (arr[i] as paramList).paramName;
                        Field.Add(Value);

                        oRpt2.DataDefinition.ParameterFields[paramName].ApplyCurrentValues(Field);
                    }
                }

                //   oRpt2.DataDefinition.FormulaFields["HebrewDate"].Text = '"' + Template.GetHebrewDateString(DateTime.Now, false).Replace("\"", "''").ToString() + '"';

                ExportOptions crExportOptions = oRpt2.ExportOptions;
                DiskFileDestinationOptions crDiskFileDestinationOptions = new DiskFileDestinationOptions();
                PdfRtfWordFormatOptions crFormatTypeOptions = new PdfRtfWordFormatOptions();
                // \\\\epb -iis22\\Project\\ReportViewer\\Pdfs\\

                crDiskFileDestinationOptions.DiskFileName = mydata[0].pdfName;

                crExportOptions = oRpt2.ExportOptions;

                crExportOptions.ExportDestinationType = ExportDestinationType.DiskFile;
                crExportOptions.ExportFormatType = ExportFormatType.PortableDocFormat;
                crExportOptions.DestinationOptions = crDiskFileDestinationOptions;
                crExportOptions.FormatOptions = crFormatTypeOptions;

                oRpt2.Export();

                Context.Response.Write(JsonConvert.SerializeObject(true));
            }

            catch (Exception ex)
            {
                Context.Response.Write(JsonConvert.SerializeObject(ex.Message));

                returnValue = ex.Message;

                Console.Write(ex.Message);

            }
            finally
            {
                oRpt2.Close();
                oRpt2.Dispose();
            }

        }


        

                    [WebMethod]
        public void Get_split_site_name_by_grower_id(string growerId)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@growerId", growerId));
            DataSet ds = Connection.GetDataSetBySP("Get_split_site_name_by_grower_id", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void Get_grower_num_and_grower_id_by_grower_id_new(string grower_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_id", grower_id));
            DataSet ds = Connection.GetDataSetBySP("Get_grower_num_and_grower_id_by_grower_id_new", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_growerId_By_code_atar(string ycode)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@ycode", ycode));
            DataSet ds = Connection.GetDataSetBySP("get_growerId_By_code_atar", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void Get_gidul_hotz_num_by_farm_num(string farm_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_num", farm_num));
            DataSet ds = Connection.GetDataSetBySP("Get_gidul_hotz_num_by_farm_num", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void Get_zan_num_new(string farm_num, string grower_num, string min_date_hiclos)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_num", farm_num));
            arr.Add(new paramList("@grower_num", grower_num));
            arr.Add(new paramList("@min_date_hiclos", min_date_hiclos));
            DataSet ds = Connection.GetDataSetBySP("Get_zan_num_new", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void Get_zan_num(string farm_num, string grower_num, string min_date_hiclos)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_num", farm_num));
            arr.Add(new paramList("@grower_num", grower_num));
            arr.Add(new paramList("@min_date_hiclos", min_date_hiclos));
            DataSet ds = Connection.GetDataSetBySP("Get_zan_num", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod] 
        public void get_farm_det_v2( string yzrn_id, string farm_num)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yzrn_id", yzrn_id));
            arr.Add(new paramList("@farm_num", farm_num));
            DataSet ds = Connection.GetDataSetBySP("get_farm_det_v2", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void farm_start_det(string grower_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_id", grower_id));
            DataSet ds = Connection.GetDataSetBySP("farm_start_det", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void Teuda_Calendary(string order, string year, string tz, string yzrn, string Rishaion, string HodFr, string HodTo)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@year", year));
            arr.Add(new paramList("@tz", tz));
            arr.Add(new paramList("@yzrn", yzrn));
            arr.Add(new paramList("@Rishaion", Rishaion));
            arr.Add(new paramList("@HodFr", HodFr));
            arr.Add(new paramList("@HodTo", HodTo));
            DataSet ds = Connection.GetDataSetBySP("Teuda_Calendary", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }







        [WebMethod]
        public void Yzrn_Chk_Hok_Galil(string Yzrn, string Tzrt, string yr, string dateHzmd)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@Yzrn", Yzrn));
            arr.Add(new paramList("@Tzrt", Tzrt));
            arr.Add(new paramList("@yr", yr));
            arr.Add(new paramList("@dateHzmd", dateHzmd));
            DataSet ds = Connection.GetDataSetBySP("Yzrn_Chk_Hok_Galil", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void Tkufa_Mhir_Select_New(string order, string start_code_yzrn, string start_tzrt, string start_sug_mhir, string start_shana, string Job)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_code_yzrn", start_code_yzrn));
            arr.Add(new paramList("@start_tzrt", start_tzrt));
            arr.Add(new paramList("@start_sug_mhir", start_sug_mhir));
            arr.Add(new paramList("@start_shana", start_shana));
            arr.Add(new paramList("@Job", Job));
            DataSet ds = Connection.GetDataSetBySP("Tkufa_Mhir_Select_New", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void Tables_Select_New(string order, string start_prefix, string start_code, string start_Year, string start_Tzrt, string start_Yzrn, string start_Status)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_prefix", start_prefix));
            arr.Add(new paramList("@start_code", start_code));
            arr.Add(new paramList("@start_Year", start_Year));
            arr.Add(new paramList("@start_Tzrt", start_Tzrt));
            arr.Add(new paramList("@start_Yzrn", start_Yzrn));
            arr.Add(new paramList("@start_Status", start_Status));
            DataSet ds = Connection.GetDataSetBySP("Tables_Select_New", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void Bizua_Rav_Shnati_Scr(string YearCrnt, string YearBack, string Toz, string SvkDateFrom, string SvkDateTo, string Ezorfrom, string Ezorto, string YzrnFrom, string YzrnTo, string xsl, string Yr1, string Yr2, string Yr3, string Yr4, string Efr_Ptm, string Sug_Tslm, string atar_code, string show_svk_cdgdl, string SvkDateFrom_Rel, string SvkDateTo_Rel, string job, string ShowAhzBza)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@YearCrnt", YearCrnt));
            arr.Add(new paramList("@YearBack", YearBack));
            arr.Add(new paramList("@Toz", Toz));
            arr.Add(new paramList("@SvkDateFrom", SvkDateFrom));
            arr.Add(new paramList("@SvkDateTo", SvkDateTo));
            arr.Add(new paramList("@Ezorfrom", Ezorfrom));
            arr.Add(new paramList("@Ezorto", Ezorto));
            arr.Add(new paramList("@YzrnFrom", YzrnFrom));
            arr.Add(new paramList("@YzrnTo", YzrnTo));
            arr.Add(new paramList("@xsl", xsl));
            arr.Add(new paramList("@Yr1", Yr1));
            arr.Add(new paramList("@Yr2", Yr2));
            arr.Add(new paramList("@Yr3", Yr3));
            arr.Add(new paramList("@Yr4", Yr4));
            arr.Add(new paramList("@Efr_Ptm", Efr_Ptm));
            arr.Add(new paramList("@Sug_Tslm", Sug_Tslm));
            arr.Add(new paramList("@atar_code", atar_code));
            arr.Add(new paramList("@show_svk_cdgdl", show_svk_cdgdl));
            arr.Add(new paramList("@SvkDateFrom_Rel", SvkDateFrom_Rel));
            arr.Add(new paramList("@SvkDateTo_Rel", SvkDateTo_Rel));
            arr.Add(new paramList("@job", job));
            arr.Add(new paramList("@ShowAhzBza", ShowAhzBza));


            DataSet ds = Connection.GetDataSetBySP("Bizua_Rav_Shnati_Scr", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));



        }




        [WebMethod]
        public void Tz_By_Yzrn(string order, string start_yzrn, string start_year, string start_tz, string start_sg_mcsa)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_yzrn", start_yzrn));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@start_tz", start_tz));
            arr.Add(new paramList("@start_sg_mcsa", start_sg_mcsa));

            DataSet ds = Connection.GetDataSetBySP("Tz_By_Yzrn", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));



        }





        [WebMethod]
        public void Mdgrot_Teuda(string Order, string start_yzrn, string start_tz, string start_year, string start_date, string End_date, string Rishaion)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@Order", Order));
            arr.Add(new paramList("@start_yzrn", start_yzrn));
            arr.Add(new paramList("@start_tz", start_tz));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@start_date", start_date));
            arr.Add(new paramList("@End_date", End_date));
            arr.Add(new paramList("@Rishaion", Rishaion));

            DataSet ds = Connection.GetDataSetBySP("Mdgrot_Teuda", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));



        }




        [WebMethod]
        public void Yazran_Cartis_Select(string order, string start_yzrn, string start_year, string start_tz, string start_sg_mcsa)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_yzrn", start_yzrn));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@start_tz", start_tz));
            arr.Add(new paramList("@start_sg_mcsa", start_sg_mcsa));

            DataSet ds = Connection.GetDataSetBySP("Yazran_Cartis_Select", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }
        [WebMethod]
        public void convert_shlohaMaaravi_to_shlohaOshik(string shloha)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@shloha", shloha));
            DataSet ds = Connection.GetDataSetBySP("convert_shlohaMaaravi_to_shlohaOshik", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }



        [WebMethod]
        public void convert_shlohaOshik_to_shlohaMaaravi(string shloha)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@shloha", shloha));
            DataSet ds = Connection.GetDataSetBySP("convert_shlohaOshik_to_shlohaMaaravi", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }




        //--exec Pargit_Teuda @order =4, @start_yzrn ="02060341" , @start_tz ='48',@start_year  ='2022', @start_date  ='', @end_date  ='', @Rishaion  =0
        [WebMethod]
        public void Pargit_Teuda(string order, string start_yzrn, string start_tz, string start_year, string start_date, string end_date, string Rishaion)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_yzrn", start_yzrn));
            arr.Add(new paramList("@start_tz", start_tz));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@start_date", start_date));
            arr.Add(new paramList("@end_date", end_date));
            arr.Add(new paramList("@Rishaion", Rishaion));
            DataSet ds = Connection.GetDataSetBySP("Pargit_Teuda", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));



        }

        //		--exec Micsa_Get_McsKvua_New @ORDER 	=2 ,@YZRN 	="11303047",@TZ   ='30',@YEAR  =2023, @MCS1 ='1' , @MCS3  ='3' ,@DtSvk='', @tik_McsSys=0
        [WebMethod]
        public void Micsa_Get_McsKvua_New(string @ORDER, string @YZRN, string @Tz, string @YEAR, string @MCS1, string @MCS3, string @DtSvk, string @tik_McsSys)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@ORDER", ORDER));
            arr.Add(new paramList("@YZRN", YZRN));
            arr.Add(new paramList("@Tz", Tz));
            arr.Add(new paramList("@YEAR", YEAR));
            arr.Add(new paramList("@MCS1", MCS1));
            arr.Add(new paramList("@MCS3", MCS3));
            arr.Add(new paramList("@DtSvk", DtSvk));
            arr.Add(new paramList("@tik_McsSys", tik_McsSys));

            DataSet ds = Connection.GetDataSetBySP("Micsa_Get_McsKvua_New", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }






        [WebMethod]
        public void Get_yz_shem_yeshuv_by_yz_yzrn(string yz_yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_yzrn", yz_yzrn));

            DataSet ds = Connection.GetDataSetBySP("Get_yz_shem_yeshuv_by_yz_yzrn", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void Teuda_Select_New(string order, string start_year, string start_tzrt, string start_yzrn, string start_date, string end_date, string start_list, string Rishaion)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@start_tzrt", start_tzrt));
            arr.Add(new paramList("@start_yzrn", start_yzrn));
            arr.Add(new paramList("@start_date", start_date));
            arr.Add(new paramList("@end_date", end_date));
            arr.Add(new paramList("@start_list", start_list));
            arr.Add(new paramList("@Rishaion", Rishaion));
            DataSet ds = Connection.GetDataSetBySP("Teuda_Select_New", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void Tables_Select_All_Atarim_Of_Yzrn(string order, string start_prefix, string start_code, string start_Year, string start_Tzrt, string start_Yzrn, string start_Status)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_prefix", start_prefix));
            arr.Add(new paramList("@start_code", start_code));
            arr.Add(new paramList("@start_Year", start_Year));
            arr.Add(new paramList("@start_Tzrt", start_Tzrt));
            arr.Add(new paramList("@start_Yzrn", start_Yzrn));
            arr.Add(new paramList("@start_Status", start_Status));
            DataSet ds = Connection.GetDataSetBySP("Tables_Select_All_Atarim_Of_Yzrn", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void Yzrn_Select_For_Search_Yzrn(string order, string start_code_yzrn, string start_name_yzrn, string start_name_yeshuv, string start_sug, string KntNo, string start_tzrt, string start_year, string AcountNo, string start_Id_No, string start_Msk, string code, string RishaionNo)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_code_yzrn", start_code_yzrn));
            arr.Add(new paramList("@start_name_yzrn", start_name_yzrn));
            arr.Add(new paramList("@start_name_yeshuv", start_name_yeshuv));
            arr.Add(new paramList("@start_sug", start_sug));
            arr.Add(new paramList("@KntNo", KntNo));
            arr.Add(new paramList("@start_tzrt", start_tzrt));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@AcountNo", AcountNo));
            arr.Add(new paramList("@start_Id_No", start_Id_No));
            arr.Add(new paramList("@start_Msk", start_Msk));
            arr.Add(new paramList("@code", code));
            arr.Add(new paramList("@RishaionNo", RishaionNo));

            DataSet ds = Connection.GetDataSetBySP("Yzrn_Select_For_Search_Yzrn", arr, Connection.connectionStringmoaz);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void Yzrn_Select_For_Search_Yzrn_Atar(string order, string start_code_yzrn, string start_name_yzrn, string start_name_yeshuv, string start_Id_No, string start_Msk, string start_tzrt, string TzLab, string AtarNm, string AtarNo, string sts)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_code_yzrn", start_code_yzrn));
            arr.Add(new paramList("@start_name_yzrn", start_name_yzrn));
            arr.Add(new paramList("@start_name_yeshuv", start_name_yeshuv));
            arr.Add(new paramList("@start_Id_No", start_Id_No));
            arr.Add(new paramList("@start_Msk", start_Msk));
            arr.Add(new paramList("@start_tzrt", start_tzrt));
            arr.Add(new paramList("@TzLab", TzLab));
            arr.Add(new paramList("@AtarNm", AtarNm));
            arr.Add(new paramList("@AtarNo", AtarNo));
            arr.Add(new paramList("@sts", sts));

            DataSet ds = Connection.GetDataSetBySP("Yzrn_Select_For_Search_Yzrn_Atar", arr, Connection.connectionStringmoaz);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_calc_750_eran(string farnId)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farnId", farnId));

            DataSet ds = Connection.GetDataSetBySP("get_calc_750_eran", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void Partners_By_Farm_Select(string order, string Atar_Code, string Tzrt, string yzrnH, string datefrom, string dateto)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@Atar_Code", Atar_Code));
            arr.Add(new paramList("@Tzrt", Tzrt));
            arr.Add(new paramList("@yzrnH", yzrnH));
            arr.Add(new paramList("@datefrom", datefrom));
            arr.Add(new paramList("@dateto", dateto));

            DataSet ds = Connection.GetDataSetBySP("Partners_By_Farm_Select", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void Partners_Get_CodeGidul(string order, string start_code_yzrn, string start_tzrt, string start_year)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@start_code_yzrn", start_code_yzrn));
            arr.Add(new paramList("@start_tzrt", start_tzrt));
            arr.Add(new paramList("@start_year", start_year));

            DataSet ds = Connection.GetDataSetBySP("Partners_Get_CodeGidul", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void Yazran_History_Get_Data(string yazran, string Field_Name)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yazran", yazran));
            arr.Add(new paramList("@Field_Name", Field_Name));

            DataSet ds = Connection.GetDataSetBySP("Yazran_History_Get_Data", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void Yzrn_Other_Addr_Get_Data(string yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yzrn", yzrn));
            DataSet ds = Connection.GetDataSetBySP("Yzrn_Other_Addr_Get_Data", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void Yzrn_Get_Rishaion_Esek(string order, string tzrt, string yzrn, string dt, string atar_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@order", order));
            arr.Add(new paramList("@tzrt", tzrt));
            arr.Add(new paramList("@yzrn", yzrn));
            arr.Add(new paramList("@dt", dt));
            arr.Add(new paramList("@atar_id", atar_id));
            DataSet ds = Connection.GetDataSetBySP("Yzrn_Get_Rishaion_Esek", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_hiclos_by_growerId_and_farmId(string farm_id, string grower_id)
        {


            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            arr.Add(new paramList("@grower_id", grower_id));
            DataSet ds = Connection.GetDataSetBySP("get_hiclos_by_growerId_&_farmId", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void Yzrn_Select_By_View_New(string Order, string start_code_yzrn, string start_name_yzrn, string start_name_yeshuv, string start_sug, string start_status, string start_tzrt, string start_year, string start_sug_mcsa)
        {


            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@Order", Order));
            arr.Add(new paramList("@start_code_yzrn", start_code_yzrn));
            arr.Add(new paramList("@start_name_yzrn", start_name_yzrn));
            arr.Add(new paramList("@start_name_yeshuv", start_name_yeshuv));
            arr.Add(new paramList("@start_sug", start_sug));
            arr.Add(new paramList("@start_status", start_status));
            arr.Add(new paramList("@start_tzrt", start_tzrt));
            arr.Add(new paramList("@start_year", start_year));
            arr.Add(new paramList("@start_sug_mcsa", start_sug_mcsa));


            DataSet ds = Connection.GetDataSetBySP("Yzrn_Select_By_View_New", arr, Connection.connectionString);

            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }





        [WebMethod]
        public void getPartner(string farmID, string flockID, string lull2000Code, string date_entry)
        {


          ArrayList arr = new ArrayList();
          arr.Add(new paramList("@order", "1"));
         arr.Add(new paramList("@Tzrt", "30"));
          arr.Add(new paramList("@Atar_id", farmID));
          arr.Add(new paramList("@date_entry", date_entry));
          arr.Add(new paramList("@flock_id", flockID));
          arr.Add(new paramList("@lull2000_code", lull2000Code));
          DataSet ds = Connection.GetDataSetBySP("prc_certificate_egg_partners_by_farm_id_eran", arr, Connection.Tichnun);

            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

         }





        //[WebMethod]
        //public void getPartner(string farmID, string flockID, string lull2000Code)
        //{


        //  ArrayList arr = new ArrayList();
        //  arr.Add(new paramList("@order", "1"));
        // arr.Add(new paramList("@Tzrt", "30"));
        //  arr.Add(new paramList("@Atar_id", farmID));
        //  arr.Add(new paramList("@date_entry", Template.convertDateToSpString(DateTime.Now.ToShortDateString())));
        //  arr.Add(new paramList("@flock_id", flockID));
        //  arr.Add(new paramList("@lull2000_code", lull2000Code));
        //  DataSet ds = Connection.GetDataSetBySP("prc_certificate_egg_partners_by_farm_id_eran", arr, Connection.Tichnun);

        //    Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        // }



        [WebMethod]
        public void Micsa_Select_New(string Order, string start_yzrn, string start_year,string start_tz, string start_sg_mcsa)
        {
            ArrayList arr = new ArrayList();
            if (Order != "") arr.Add(new paramList("@Order", Order));
            if (start_yzrn != "") arr.Add(new paramList("@start_yzrn", start_yzrn));
            if (start_year != "") arr.Add(new paramList("@start_year", start_year));
            if (start_tz != "") arr.Add(new paramList("@start_tz", start_tz));
            if (start_sg_mcsa != "") arr.Add(new paramList("@start_sg_mcsa", start_sg_mcsa));
            DataSet ds = Connection.GetDataSetBySP("Micsa_Select_New", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void YazrnExtrnl_Get_Code(string Order, string MsvkExtrnl, string YzrnMoaza)
        {
            ArrayList arr = new ArrayList();
            if (Order != "") arr.Add(new paramList("@Order", Order));
           arr.Add(new paramList("@MsvkExtrnl", MsvkExtrnl));
            if (YzrnMoaza != "") arr.Add(new paramList("@YzrnMoaza", YzrnMoaza));
            DataSet ds = Connection.GetDataSetBySP("YazrnExtrnl_Get_Code", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }









        

        [WebMethod]
        public void megadel_by_atar_name_yeshov_shloha_all_with_pa_Counter(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn, string pa_Counter)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            if (pa_Counter != "") arr.Add(new paramList("@pa_Counter", pa_Counter));


            DataSet ds = Connection.GetDataSetBySP("megadel_by_atar_name_yeshov_shloha_all_with_pa_Counter", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void megadel_by_atar_name_yeshov_shloha_not_active_with_pa_Counter(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn, string pa_Counter)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            if (pa_Counter != "") arr.Add(new paramList("@pa_Counter", pa_Counter));


            DataSet ds = Connection.GetDataSetBySP("megadel_by_atar_name_yeshov_shloha_not_active_with_pa_Counter", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void megadel_by_atar_name_yeshov_shloha_active_with_pa_Counter(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn, string pa_Counter)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            if (pa_Counter != "") arr.Add(new paramList("@pa_Counter", pa_Counter));


            DataSet ds = Connection.GetDataSetBySP("megadel_by_atar_name_yeshov_shloha_active_with_pa_Counter", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void Get_partners_by_pa_Counter_and_megadel(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn, string pa_Counter)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            if (pa_Counter != "") arr.Add(new paramList("@pa_Counter", pa_Counter));


            DataSet ds = Connection.GetDataSetBySP("Get_partners_by_pa_Counter_and_megadel", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void Get_partners_by_pa_Counter_and_megadel_not_active(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn, string pa_Counter)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            if (pa_Counter != "") arr.Add(new paramList("@pa_Counter", pa_Counter));


            DataSet ds = Connection.GetDataSetBySP("Get_partners_by_pa_Counter_and_megadel_not_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void Get_partners_by_pa_Counter_and_megadel_all(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn, string pa_Counter)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            if (pa_Counter != "") arr.Add(new paramList("@pa_Counter", pa_Counter));


            DataSet ds = Connection.GetDataSetBySP("Get_partners_by_pa_Counter_and_megadel_all", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void getContactPersonFarmHatala(string yzrn)
        {

            ArrayList arr = new ArrayList();

            arr.Add(new paramList("@yzrn", yzrn));

            DataSet ds = Connection.GetDataSetBySP("prc_farm_contact_hatala", arr, Connection.EggMovementsConnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }






        [WebMethod]
        public void prc_farm_details_eran(string farm_id, string hen_house_id)
        {
            if (farm_id == "0" || farm_id == "undefined") { return; }
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@farm_id", farm_id));
            arr.Add(new paramList("@hen_house_id", hen_house_id));
            DataSet ds = Connection.GetDataSetBySP("prc_farm_details_eran", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_siteName_by_yzId(string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_Id", yz_Id));
            DataSet ds = Connection.GetDataSetBySP("get_siteName_by_yzId", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void GET_YAZRAN_BY_YZ_ID(string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_Id", yz_Id));
            DataSet ds = Connection.GetDataSetBySP("GET_YAZRAN_BY_YZ_ID", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }







        [WebMethod]
        public void Get_farmId_By_siteName(string siteName)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@siteName", siteName));
            DataSet ds = Connection.GetDataSetBySP("Get_farmId_By_siteName", arr, Connection.Tichnun);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



    





















        [WebMethod]
        public void megadel_by_atar_name_yeshov_shloha_active(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));
            DataSet ds = Connection.GetDataSetBySP("megadel_by_atar_name_yeshov_shloha_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void megadel_by_atar_name_yeshov_shloha_all(string yz_Id, string yz_first_name, string yz_shem_yeshuv, string belonging_group_id, string yz_yzrn)
        {
            ArrayList arr = new ArrayList();
            if (yz_Id != "") arr.Add(new paramList("@yz_Id", yz_Id));
            if (yz_first_name != "") arr.Add(new paramList("@yz_first_name", yz_first_name));
            if (yz_shem_yeshuv != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (belonging_group_id != "") arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            if (yz_yzrn != "") arr.Add(new paramList("@yz_yzrn", yz_yzrn));

            DataSet ds = Connection.GetDataSetBySP("megadel_by_atar_name_yeshov_shloha_all", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }







        [WebMethod]
        public void getAllMegadelDetailsWantedFunc()
        {
            DataSet ds = Connection.GetDataSetBySqlStr("getAllMegadelDetailsWanted");
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void getAllYeshovimAndEzurim()
        {
            DataSet ds = Connection.GetDataSetBySP("GetAllYeshovimAndEzurim",null, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void getAllNameSiteIdstatus()
        {
            DataSet ds = Connection.GetDataSetBySP("GetAllNameSite_Id_status", null, Connection.ChickenHealthConnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void getAllShloha()
        {
            DataSet ds = Connection.GetDataSetBySP("GetAllShloha", null, Connection.ChickenHealthConnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void GetAllShlohaNAME()
        {
            DataSet ds = Connection.GetDataSetBySP("GetAllShlohaNAME", null, Connection.ChickenHealthConnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        [WebMethod]
        public void All_Megadel_Details_ByFirstName_All(string firstname)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            DataSet ds = Connection.GetDataSetBySP("getAllMegadelDetailsWantedByFirstName", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void Get_All_Shloha_Id_By_NAME(string name)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@name", name));
            DataSet ds = Connection.GetDataSetBySP("Get_All_Shloha_Id_By_NAME", arr, Connection.ChickenHealthConnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_Farmid_By_yzId(string yz_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_id", yz_id));
            DataSet ds = Connection.GetDataSetBySP("get_Farmid_By_yzId", arr, Connection.ChickenHealthConnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }





        








        [WebMethod]
        public void All_Megadel_Details_ByFirstName_All_To_Desplay(string firstname)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_To_Desplay", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void all_Megadel_Details_ByFirstName_That_Active_To_Desplay(string firstname)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            DataSet ds = Connection.GetDataSetBySP("Active_MegadelDetails_ByFirstName_To_Desplay", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void all_Megadel_Details_ByFirstName_That_Not_Active_To_Desplay(string firstname)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            DataSet ds = Connection.GetDataSetBySP("Not_Active_MegadelDetails_ByFirstName_To_Desplay", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }







        [WebMethod]
        public void all_Megadel_Details_ByFirstName_That_Active(string firstname)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            DataSet ds = Connection.GetDataSetBySP("All_Megadel_Details_ByFirstName_That_Active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void all_Megadel_Details_ByFirstName_That_NotActive(string firstname)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            DataSet ds = Connection.GetDataSetBySP("All_Megadel_Details_ByFirstName_That_NotActive", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void all_Megadel_Details_ByFirstName_and_shemYeshuv(string firstname, string shem_yeshuv)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@shem_yeshuv", shem_yeshuv));

            DataSet ds = Connection.GetDataSetBySP("All_Megadel_Details_ByFirstName_and_shemYeshuv", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void allMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay(string firstname, string yz_shem_yeshuv)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));

            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_active(string firstname, string yz_shem_yeshuv)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));

            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_Notactive(string firstname, string yz_shem_yeshuv)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));

            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_and_shemYeshuv_To_Desplay_that_Notactive", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void get_num_of_gidol_hotz_from_yz_yzrn(string pa_Yzrn)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@pa_Yzrn", pa_Yzrn));

            DataSet ds = Connection.GetDataSetBySP("Get_num_of_gidol_hotz_from_yz_yzrn", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void  allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_Notactive(string firstname, string yz_shem_yeshuv,string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            arr.Add(new paramList("@yz_Id", yz_Id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_Notactive", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_active(string firstname, string yz_shem_yeshuv, string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            arr.Add(new paramList("@yz_Id", yz_Id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void allMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay(string firstname, string yz_shem_yeshuv, string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            arr.Add(new paramList("@yz_Id", yz_Id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_and_shemYeshuv_and_atar_To_Desplay", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));



        }



        [WebMethod]
        public void get_megadelDetails_ByShlocha_Not_active
(string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            DataSet ds = Connection.GetDataSetBySP("get_megadelDetails_ByShlocha_Not_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_megadelDetails_ByShlocha_active
(string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            DataSet ds = Connection.GetDataSetBySP("get_megadelDetails_ByShlocha_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void get_megadelDetails_ByShlocha
(string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            DataSet ds = Connection.GetDataSetBySP("get_megadelDetails_ByShlocha", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }



        [WebMethod]
        public void AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha(string firstname, string yz_shem_yeshuv, string yz_Id, string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            arr.Add(new paramList("@yz_Id", yz_Id));
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));



        }



        [WebMethod]
        public void AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_all(string firstname, string yz_shem_yeshuv, string yz_Id, string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            arr.Add(new paramList("@yz_Id", yz_Id));
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_all", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));





        }



        [WebMethod]
        public void AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_not_active(string firstname, string yz_shem_yeshuv, string yz_Id, string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@yz_shem_yeshuv", yz_shem_yeshuv));
            arr.Add(new paramList("@yz_Id", yz_Id));
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByFirstName_shemYeshuv_atar_shloha_not_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }


        [WebMethod]
        public void AllMegadelDetails_ByBelonging_group_id_not_active( string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByBelonging_group_id_not_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }

        [WebMethod]
        public void AllMegadelDetails_ByBelonging_group_id_active(string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByBelonging_group_id_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }

        [WebMethod]
        public void AllMegadelDetails_ByBelonging_group_id(string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));


            DataSet ds = Connection.GetDataSetBySP("AllMegadelDetails_ByBelonging_group_id", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        }



        [WebMethod]
        public void megadelDetails_by_shem_shlocha(string firstname, string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            DataSet ds = Connection.GetDataSetBySP("megadelDetails_by_shem_shlocha", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void megadelDetails_by_shem_shlocha_active(string firstname, string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            DataSet ds = Connection.GetDataSetBySP("megadelDetails_by_shem_shlocha_active", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }


        [WebMethod]
        public void megadelDetails_by_atar_Notactive(string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_Id", @yz_Id));
            DataSet ds = Connection.GetDataSetBySP("megadelDetails_by_atar_Notactive", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void megadelDetails_by_atar_active(string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_Id", @yz_Id));
            DataSet ds = Connection.GetDataSetBySP("megadelDetails_by_atar_Notactive", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        [WebMethod]
        public void megadelDetails_by_atar(string yz_Id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@yz_Id", @yz_Id));
            DataSet ds = Connection.GetDataSetBySP("megadelDetails_by_atar_Notactive", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }















        [WebMethod]
        public void megadelDetails_by_shem_shlocha_all(string firstname, string belonging_group_id)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@firstname", firstname));
            arr.Add(new paramList("@belonging_group_id", belonging_group_id));
            DataSet ds = Connection.GetDataSetBySP("megadelDetails_by_shem_shlocha_all", arr, Connection.connectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }




        [WebMethod]
        public void getGrowerDetails(string growerID)
        {
            //     45454
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@grower_id", growerID));
            DataSet ds = Connection.GetDataSetBySP("prc_grower_select", arr, Connection.LullMobileconnectionString);
            Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));
        }

        //[WebMethod]
        //public void getGrowerDetails(string growerID)
        //{
            //     45454
            //DataSet ds = Connection.GetDataSetBySPLulMobile("prc_grower_select", Template.getParamListArr("@grower_id", growerID));

          //  Context.Response.Write(JsonConvert.SerializeObject(ds.Tables[0]));

        //}




































































    }
}
