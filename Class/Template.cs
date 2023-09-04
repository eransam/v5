using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

using System.Net.Mail;
using System.Text.RegularExpressions;

using System.Globalization;
using System.Data.SqlClient;


using System.Security.Principal;

using MobileApp.Class;

namespace ReportServiceClass
{
    public class Template
    {


        public static bool isLabWorker()
        {

            return HttpContext.Current.Session["EmpRoleID"].ToString() == "1" || HttpContext.Current.Session["EmpRoleID"].ToString() == "2" || HttpContext.Current.Session["EmpRoleID"].ToString() == "4" || HttpContext.Current.Session["EmpRoleID"].ToString() == "6";
        }

        public static string HTMLTableHeader(string[] strHeaderText)
        {

            string returnString = "";

            foreach (string strHeader in strHeaderText)
            {

                returnString += "<td align='right'><u><b>" + strHeader + "</b></u></td>";
            }
            return returnString;
        }

        public static System.Drawing.Color getMustFieldColor()
        {
            return System.Drawing.Color.FromArgb(255, 255, 202);

        }

        public static System.Drawing.Color getQuarantineColor()
        {
            return System.Drawing.Color.FromArgb(253, 215, 228);

        }

        public static System.Drawing.Color getCanMarketingColor()
        {
            return System.Drawing.Color.FromArgb(230, 255, 230);

        }

        public static System.Drawing.Color getQuarantineAllowColor()
        {
            return System.Drawing.Color.FromArgb(230, 255, 230);
            // return System.Drawing.Color.FromArgb(253, 215, 228);

        }

        public static System.Drawing.Color getConfirmColor()
        {
            return System.Drawing.Color.FromArgb(234, 255, 234);

        }


        public static System.Drawing.Color getNotConfirmColor()
        {
            return System.Drawing.Color.FromArgb(255, 234, 234);

        }



        public static System.Drawing.Color getDisableFieldColor()
        {
            return System.Drawing.Color.FromArgb(242, 242, 242);

        }


        public static System.Drawing.Color getBackColorLogFieldColor()
        {
            return System.Drawing.Color.FromArgb(254, 226, 234);

        }

        public static System.Drawing.Color getForeColorLogFieldColor()
        {
            return System.Drawing.Color.Black;

        }


        public static string convertDateToSpString(String dt)
        {

            String dtTemp = dt.Replace("00:00:00", "");
            string returnValue = "";

            try
            {
                string day = "";
                string month = "";

                day = (dtTemp.Split('/')[0].Trim().Length == 1 ? "0" + dtTemp.Split('/')[0].Trim() : dtTemp.Split('/')[0].Trim());
                month = (dtTemp.Split('/')[1].Trim().Length == 1 ? "0" + dtTemp.Split('/')[1].Trim() : dtTemp.Split('/')[1].Trim());

                returnValue = dtTemp.Split('/')[2].Trim() + month + day;
            }
            catch (Exception ex)
            {
                returnValue = "";

                Console.Write(ex.Message);
            }

            return returnValue;

        }



        public static string convertDate2ToSpString(String dt)
        {

            String dtTemp = dt.Replace("00:00:00", "");
            string returnValue = "";

            try
            {
                returnValue = dtTemp.Split('/')[2].Trim() + "-" + dtTemp.Split('/')[1].Trim() + "-" + dtTemp.Split('/')[0].Trim();
            }
            catch (Exception ex)
            {
                returnValue = "";

                Console.Write(ex.Message);
            }

            return returnValue;

        }

        public static string GetHebrewDateString(DateTime anyDate, bool addDayOfWeek)
        {
            System.Text.StringBuilder hebrewFormatedString = new System.Text.StringBuilder();
            // Create the hebrew culture to use hebrew (Jewish) calendar 
            CultureInfo jewishCulture = CultureInfo.CreateSpecificCulture("he-IL");
            jewishCulture.DateTimeFormat.Calendar = new HebrewCalendar();
            #region Format the date into a Jewish format
            if (addDayOfWeek)
            {
                // Day of the week in the format " " 
                hebrewFormatedString.Append(anyDate.ToString("dddd", jewishCulture) + " ");
            }
            // Day of the month in the format "'" 
            hebrewFormatedString.Append(anyDate.ToString("dd", jewishCulture) + " ");
            // Month and year in the format " " 
            hebrewFormatedString.Append("" + anyDate.ToString("y", jewishCulture).Replace(" ", " , "));
            #endregion

            return hebrewFormatedString.ToString();
        }




        public static ArrayList getParamListArr(String fieldName, String val)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList(fieldName, val));
            return arr;
        }

        public static bool checkIDNumber(string idNumber, int lenID)
        {

            bool returnValue = true;
            int j = 1;
            int i;
            int temp;
            int mySum = 0;

            try
            {

                if (idNumber == "") returnValue = false;
                if (idNumber.Length % 2 == 0) j = 2;


                for (i = 1; i <= idNumber.Length - 1; i++)
                {
                    temp = int.Parse(idNumber.Substring(i - 1, 1));
                    temp = j * temp;
                    if (temp > 9) temp = 1 + temp - 10;
                    mySum += temp;
                    j = (j == 1 ? 2 : 1);

                }

                returnValue = (((mySum + int.Parse(idNumber.Substring(idNumber.Length - 1, 1))) % 10) == 0 ? true : false);


            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);

            }
            return returnValue;
        }


        public static bool isValidEmailAddress(string sEmail)
        {
            if (sEmail == null)
            {
                return false;
            }

            int nFirstAT = sEmail.IndexOf('@');
            int nLastAT = sEmail.LastIndexOf('@');

            if ((nFirstAT > 0) && (nLastAT == nFirstAT) &&
            (nFirstAT < (sEmail.Length - 1)))
            {
                // address is ok regarding the single @ sign
                return (Regex.IsMatch(sEmail, @"(\w+)@(\w+)\.(\w+)"));

            }
            else
            {
                return false;
            }
        }

        public static string strReverse(string s)
        {
            int j = 0;
            char[] c = new char[s.Length];
            for (int i = s.Length - 1; i >= 0; i--) c[j++] = s[i];
            return new string(c);
        }


        public static bool IsInteger(string theValue)
        {
            try
            {
                int.Parse(theValue);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool IsDouble(string theValue)
        {
            try
            {
                double.Parse(theValue);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool IsDate(string sdate)
        {

            DateTime dt;
            bool isDate = true;

            try
            {
                dt = DateTime.Parse(sdate);
            }
            catch
            {
                isDate = false;
            }

            return isDate;


        }

        public static int parseStrToInt(string value)
        {

            int returnValue = -1;
            try
            {
                returnValue = int.Parse(value);
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
                returnValue = -1;

            }

            return returnValue;

        }


        public static DateTime DateStrToDBDate(String dateStr)
        {
            if (dateStr == "")
            {
                return DateTime.MinValue;
            }
            else
            {
                try
                {
                    return DateTime.Parse(dateStr);
                }
                catch
                {
                    return DateTime.MinValue;
                }
            }
        }


        public static string convDbNull(string dbValue, string returnValue)
        {
            if (dbValue != "")
            {
                return dbValue;
            }
            else
            {
                return returnValue;
            }
        }



        public static string getEnglishDate()
        {
            string returnValue = "";

            switch (DateTime.Now.Month.ToString())
            {
                case "1":
                    returnValue = "JANUARY";
                    break;
                case "2":
                    returnValue = "FEBRUARY";
                    break;
                case "3":
                    returnValue = "MARCH";
                    break;
                case "4":
                    returnValue = "APRIL";
                    break;
                case "5":
                    returnValue = "MAY";
                    break;
                case "6":
                    returnValue = "JUNE";
                    break;
                case "7":
                    returnValue = "JULY";
                    break;
                case "8":
                    returnValue = "AUGUST";
                    break;
                case "9":
                    returnValue = "SEPTEMBER";
                    break;
                case "10":
                    returnValue = "OCTOBER";
                    break;
                case "11":
                    returnValue = "NOVEMBER";
                    break;
                case "12":
                    returnValue = "DECEMBER";
                    break;

            }

            returnValue = returnValue + ' ' + DateTime.Now.Day.ToString() + " ," + DateTime.Now.Year.ToString();

            return returnValue;

        }


        public static string ReadSetting(string key)
        {
            var appSettings = ConfigurationManager.AppSettings;
            return appSettings[key] ?? string.Empty;
        }


        public static double DateDiffWeek(DateTime newDate, DateTime oldDate)
        {

            DateTime tmpOldDate = oldDate; // new DateTime(2002, 7, 15);
            DateTime tmpNewDate = DateTime.Now;

            // Difference in days, hours, and minutes.
            TimeSpan ts = tmpNewDate - tmpOldDate;
            // Difference in days.
            double differenceInDays = ts.Days / 7;
            return differenceInDays;

        }





        public static bool Is_SQLServerName_Test(string connectionString)
        {
            bool is_sql_test = true;
            //string connectionString = ConfigurationManager.ConnectionStrings["SQL_Connection"].ToString();
            string[] array = connectionString.Split('=');
            if (array.Length > 0)
            {
                string server_name = array[1], ic = array[2];
                int len = server_name.IndexOf(';');
                string temp = server_name.Substring(0, len);
                server_name = temp;

                len = ic.IndexOf(';');
                temp = ic.Substring(0, len);
                ic = temp;

                if (server_name == "epb-moaz")
                    is_sql_test = false;
                else
                    is_sql_test = true;
            }
            else is_sql_test = false;



            return is_sql_test;

        }





        public static string GetRemindTime(DateTime date_time_reminder)
        {
            DateTime date_time_now = DateTime.Now;
            TimeSpan time_span = date_time_reminder - date_time_now;


            string time = string.Format("{0:00}:{1:00}", time_span.Hours, time_span.Minutes);
            return time_span.Days.ToString() + " ימים, " + time + " שעות";

        }

        public static string GetRemindTimeHour(DateTime date_time_reminder)
        {
            DateTime date_time_now = DateTime.Now;
            TimeSpan time_span = date_time_reminder - date_time_now;


            string time = string.Format("{0:0}", time_span.Hours);
            return ((time_span.Days * 24) + int.Parse(time)).ToString() + " שעות";

        }



        public static void dsToExcel(DataSet ds, HttpResponse response)
        {

            response.Clear();
            response.Charset = "";
            //set the response mime type for excel
            response.ContentType = "application/vnd.ms-excel";
            //create a string writer
            System.IO.StringWriter stringWrite = new System.IO.StringWriter();

            //create an htmltextwriter which uses the stringwriter
            System.Web.UI.HtmlTextWriter htmlWrite = new System.Web.UI.HtmlTextWriter(stringWrite);
            //instantiate a datagrid
            DataGrid dg = new DataGrid();
            //set the datagrid datasource to the dataset passed in
            dg.DataSource = ds.Tables[0];
            //bind the datagrid
            dg.DataBind();
            //tell the datagrid to render itself to our htmltextwriter
            dg.RenderControl(htmlWrite);
            //all that's left is to output the html
            response.Write(stringWrite.ToString());
            response.End();
        }


        public static void setMessage(Panel pnl, Label lbl, string lblText, Image img, string messageType)
        {
            pnl.Visible = true;
            pnl.BorderWidth = 1;

            switch (messageType)
            {

                case "ERROR":
                    pnl.BackColor = System.Drawing.Color.FromName("#ca4f4f");
                    lbl.Text = lblText;
                    img.ImageUrl = "~/images/Error.png";
                    break;

                case "SUCCESS":
                    pnl.BackColor = System.Drawing.Color.FromArgb(97, 199, 112);
                    pnl.BorderColor = System.Drawing.Color.FromArgb(131, 214, 155);


                    lbl.Text = lblText;
                    img.ImageUrl = "~/images/check-mark.png";
                    lbl.ForeColor = System.Drawing.Color.White;

                    break;
                case "WARNING":
                    pnl.BackColor = System.Drawing.Color.Orange;
                    pnl.BorderColor = System.Drawing.Color.OrangeRed;
                    lbl.Text = lblText;

                    break;
            }

        }

        public static string sendEmail(string subject, string body, ArrayList arr, string attachmentFileUrl)
        {
            string returnValue = string.Empty, SendFromEmail = ReadSetting("SendFromEmail"), MailDisplayName = ReadSetting("MailDisplayName");
            string email_to = string.Empty;
            try
            {
                for (int i = 0; i < arr.Count; i++)
                {

                    //MailAddress SendFrom = new MailAddress("testlab@epb.org.il", "המועצה לענף הלול");
                    MailAddress SendFrom = new MailAddress("oshick@epb.org.il", MailDisplayName);
                    email_to = arr[i].ToString();
                    MailAddress SendTo = new MailAddress(email_to);
                    MailMessage MyMessage = new MailMessage(SendFrom, SendTo);

                    MyMessage.Subject = subject;
                    MyMessage.Body = body;
                    MyMessage.IsBodyHtml = true;

                    if (attachmentFileUrl != "")
                    {
                        Attachment attachFile = new Attachment(attachmentFileUrl);
                        MyMessage.Attachments.Add(attachFile);
                    }

                    SmtpClient emailClient = new SmtpClient();
                    emailClient.Send(MyMessage);

                }

            }
            catch (Exception ex)
            {
                string error = ex.Message;
                if (ex.InnerException != null)
                    error = error + "  -  " + ex.InnerException.Message;

                // new Logger().WriteError("sendEmail error: " + error + "email_to = " + email_to + " subject = " + subject);
                returnValue = ex.Message;
            }

            return returnValue;
        }



        public static string getReportURL()
        {

            return "\\\\epb-iis12.epb.local\\REPORT\\EvacuationChicken\\";
        }

        public static string getScanURL()
        {

            return "\\\\epb-iis12.epb.local\\SCAN\\EvacuationChicken\\";
        }

        public static DataRow cloneRow(DataRow row, DataRow dRow)
        {




            int i;

            for (i = 0; i < dRow.Table.Columns.Count - 1; i++)
            {
                row[i] = dRow[i];
            }
            return row;
        }

    

    public static string getOptionByField(string fieldName)
        {
            SqlDataReader objDataReader = null;
            string returnValue = "";

            try
            {
                objDataReader = Connection.getDataReaderBySqlStr("select " + fieldName + " as field_name FROM PARAMETER");
                objDataReader.Read();
                returnValue = objDataReader["field_name"].ToString();
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }

            return returnValue;

        }



        public static int getChickenSumException(string ChickenNumber)
        {
            float exceptionPercent = float.Parse(Template.getOptionByField("exception_percent"));

            return int.Parse(Math.Round((float.Parse(ChickenNumber) * exceptionPercent)).ToString());


        }






        public static void insertError(string formName, string functionName, string parameter, string exceptionDesc)
        {
            ArrayList arr = new ArrayList();
            arr.Add(new paramList("@form_name", formName));
            arr.Add(new paramList("@function_name", functionName));
            arr.Add(new paramList("@parameter", parameter));
            arr.Add(new paramList("@exeption_desc", exceptionDesc));

            Connection.spExec("prc_error_insert", arr);

        }




        public static string getFlockDetailsForTransfer(string certificateID)
        {
            string returnValue = "";

            System.Data.SqlClient.SqlDataReader objDataReader = null;
            string sqlStr = "";

            sqlStr = "select flock_id,virtual_flock_status_id from CERTIFICATE where id=" + certificateID;

            try
            {
                objDataReader = Connection.getDataReaderBySqlStr(sqlStr);

                if (objDataReader.Read())
                {
                    returnValue = objDataReader["flock_id"].ToString() + "," + objDataReader["virtual_flock_status_id"].ToString();

                }

            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }

            return returnValue;

        }



    }



}
