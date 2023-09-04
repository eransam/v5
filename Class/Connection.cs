using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;
using MobileApp.Class;
using Newtonsoft.Json;


public class Connection
{


    public static string connectionStringmoaz
    {
        get
        {
            //return System.Configuration.ConfigurationManager.ConnectionStrings["FoodConnectionString"].ConnectionString;
            return System.Configuration.ConfigurationManager.ConnectionStrings["EggConnectionStringmoaz"].ConnectionString;

        }

    }



    public static string connectionString
    {
        get
        {
            //return System.Configuration.ConfigurationManager.ConnectionStrings["FoodConnectionString"].ConnectionString;
            return System.Configuration.ConfigurationManager.ConnectionStrings["EggConnectionString"].ConnectionString;

        }

    }


    public static string connectionStringTest
    {
        get
        {
            //return System.Configuration.ConfigurationManager.ConnectionStrings["FoodConnectionString"].ConnectionString;
            return System.Configuration.ConfigurationManager.ConnectionStrings["EggConnectionStringTest"].ConnectionString;

        }



    }

    public static string LullMobileconnectionString
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["LulMobileConnectionString"].ConnectionString;
        }

    }



    public static string POconnectionString
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["PinuyOfotConnectionString"].ConnectionString;
        }

    }

    public static string Tichnun
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["Tichnun"].ConnectionString;
        }

    }

    public static string ChickenHealthConnectionString
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["ChickenHealthConnectionString"].ConnectionString;
        }

    }

    public static string LulMobileConnectionString
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["LulMobileConnectionString"].ConnectionString;
        }

    }




    public static string EggMovementsConnectionString
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["EggMovementsConnectionString"].ConnectionString;
        }

    }

    public static string connectionStringCarPermission
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["CarPermissionConnectionString"].ConnectionString;
        }

    }

    public static string HdConnection
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["HdConnection"].ConnectionString;
        }

    }

    public static string CarPermissionConnection
    {
        get
        {
            return System.Configuration.ConfigurationManager.ConnectionStrings["CarPermissionConnection"].ConnectionString;
        }
    }

    public static void insertExceptionToFile(string line)
    {
        System.IO.StreamWriter file = new System.IO.StreamWriter("c:\\error.txt");

        file.WriteLine(line);

        file.Close();

    }

    public static ArrayList getParam(string paramName, string paramValue)
    {

        ArrayList arr = new ArrayList();
        arr.Add(new paramList(paramName, paramValue));
        return arr;

    }

    public static SqlDataReader getDataReaderBySP(String spName, ArrayList paramArr, string conStr = "")
    {
        SqlConnection myConn = new SqlConnection(conStr == "" ? connectionString : conStr);
        SqlCommand sCommand;

        sCommand = new SqlCommand("", myConn);
        SqlDataReader sReader = null;

        try
        {
            myConn.Open();

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;

            setParams(sCommand, paramArr);

            sReader = sCommand.ExecuteReader(CommandBehavior.CloseConnection);



        }
        catch (Exception ex)
        {

            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return sReader;


    }

    public static SqlCommand getCommandBySP(String spName, ArrayList paramArr)
    {
        SqlConnection myConn = new SqlConnection(connectionString);
        SqlCommand sCommand;

        sCommand = new SqlCommand("", myConn);

        try
        {
            myConn.Open();

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;

            setParams(sCommand, paramArr);

        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return sCommand;

    }

    public static Object getScalarBySP(String spName, ArrayList paramArr, String conString = "")
    {

        SqlConnection myConn = new SqlConnection(conString == "" ? connectionString : conString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        Object sObject = null;

        try
        {

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sObject = sCommand.ExecuteScalar();

        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return sObject;
    }

    public static Object getScalarBySPChicken(String spName, ArrayList paramArr)
    {

        SqlConnection myConn = new SqlConnection(ChickenHealthConnectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);


        myConn.Open();

        Object sObject = null;

        try
        {

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sObject = sCommand.ExecuteScalar();

        }
        catch (Exception ex)
        {

            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return sObject;
    }


    public static Object getScalarBySPLul(String spName, ArrayList paramArr)
    {

        SqlConnection myConn = new SqlConnection(LulMobileConnectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);


        myConn.Open();

        Object sObject = null;

        try
        {

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sObject = sCommand.ExecuteScalar();

        }
        catch (Exception ex)
        {

            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return sObject;
    }







    public static Object getScalarBySqlStr(String sqlStr)
    {

        SqlConnection myConn = new SqlConnection(connectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        Object sObject = null;

        try
        {

            sCommand.CommandText = sqlStr;
            sCommand.CommandType = CommandType.Text;
            sObject = sCommand.ExecuteScalar();

        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            // myConn.Close();
        }

        return sObject;
    }


    public static SqlDataReader getDataReaderBySqlStr(String sqlStr, string conn = "")
    {

        SqlConnection myConn = new SqlConnection(conn != "" ? conn : connectionString);
        SqlCommand sCommand;
        if (myConn.State != ConnectionState.Closed) { myConn.Close(); }


        sCommand = new SqlCommand("", myConn);
        SqlDataReader sReader = null;

        try
        {
            myConn.Open();
            sCommand.CommandText = sqlStr;
            sReader = sCommand.ExecuteReader(CommandBehavior.CloseConnection);

        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
            myConn.Close();
        }
        finally
        {
            // myConn.Close();
        }
        return sReader;

    }

    public static DataTable getDataTableBySP(String spName, ArrayList paramArr)
    {
        SqlConnection myConn = new SqlConnection(connectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);
        DataTable dataTable = new DataTable();

        try
        {
            myConn.Open();

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            SqlDataAdapter sDataAdapter = new SqlDataAdapter(sCommand);

            sDataAdapter.Fill(dataTable);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return dataTable;

    }

    public static SqlDataReader getDataReaderBySPChicken(String spName, ArrayList paramArr)
    {
        SqlConnection myConn = new SqlConnection(ConfigurationManager.ConnectionStrings["Labs_InitConnectionString"].ConnectionString);
        SqlCommand sCommand;

        sCommand = new SqlCommand("", myConn);
        SqlDataReader sReader = null;

        try
        {
            myConn.Open();

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;

            setParams(sCommand, paramArr);

            sReader = sCommand.ExecuteReader(CommandBehavior.CloseConnection);



        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return sReader;


    }


    public static DataTable getDataTableBySPChicken(String spName, ArrayList paramArr)
    {
        SqlConnection myConn = new SqlConnection(ConfigurationManager.ConnectionStrings["Labs_InitConnectionString"].ConnectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);
        DataTable dataTable = new DataTable();

        try
        {
            myConn.Open();

            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            SqlDataAdapter sDataAdapter = new SqlDataAdapter(sCommand);

            sDataAdapter.Fill(dataTable);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }


        return dataTable;

    }


    public static DataTable getDataTableBySqlStr(String spName)
    {
        SqlConnection myConn = new SqlConnection(connectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);
        DataTable dataTable = new DataTable();

        try
        {
            myConn.Open();

            sCommand.CommandText = spName;

            SqlDataAdapter sDataAdapter = new SqlDataAdapter(sCommand);

            sDataAdapter.Fill(dataTable);
        }
        catch (Exception ex)
        {

            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return dataTable;

    }

    public static bool sqlExec(string sqlStr, string connStr = "")
    {

        bool returnValue = false;
        SqlConnection myConn = new SqlConnection(connStr == "" ? connectionString : connStr);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = sqlStr;
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {


            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return returnValue;

    }

    public static bool sqlExecChicken(string sqlStr)
    {

        bool returnValue = false;
        SqlConnection myConn = new SqlConnection(ChickenHealthConnectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = sqlStr;
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {

            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return returnValue;

    }

    public static bool sqlExecLul(string sqlStr)
    {

        bool returnValue = false;
        SqlConnection myConn = new SqlConnection(LulMobileConnectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = sqlStr;
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {

            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return returnValue;

    }




    public static bool spExec(String spName, ArrayList paramArr)
    {
        bool returnValue = true;
        SqlConnection myConn = new SqlConnection(connectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {

            returnValue = false;
            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return returnValue;

    }


    public static bool spExec(String spName, ArrayList paramArr, string connection_string)
    {
        bool returnValue = true;
        SqlConnection myConn = new SqlConnection(connection_string);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {
            // insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function spExec - spName: " + spName + " - error: " + ex.Message.ToString()); 
            returnValue = false;
            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return returnValue;

    }

    
    public static bool spExecChicken(String spName, ArrayList paramArr)
    {
        bool returnValue = true;
        SqlConnection myConn = new SqlConnection(ChickenHealthConnectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {
            insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function spExec - spName: " + spName + " - error: " + ex.Message.ToString());

            returnValue = false;
            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return returnValue;

    }


    public static bool spExecLul(String spName, ArrayList paramArr)
    {
        bool returnValue = true;
        SqlConnection myConn = new SqlConnection(LulMobileConnectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            sCommand.ExecuteNonQuery();
            returnValue = true;
        }
        catch (Exception ex)
        {
            insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function spExec - spName: " + spName + " - error: " + ex.Message.ToString());

            returnValue = false;
            Console.Write(ex.Message);
        }
        finally
        {
            myConn.Close();
        }

        return returnValue;

    }




    public static int spExecScalar(String spName, ArrayList paramArr)
    {
        int returnValue = 0;
        SqlConnection myConn = new SqlConnection(connectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            returnValue = int.Parse(sCommand.ExecuteScalar().ToString());

        }
        catch (Exception ex)
        {


            insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function spExecScalar - spName: " + spName + " - error: " + ex.Message.ToString());

            returnValue = 0;
            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return returnValue;

    }

    public static int spExecScalar(String spName, ArrayList paramArr, string connection_string)
    {
        int returnValue = 0;
        SqlConnection myConn = new SqlConnection(connection_string);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            returnValue = (sCommand.ExecuteScalar().ToString() == "" ? 0 : int.Parse(sCommand.ExecuteScalar().ToString()));

        }
        catch (Exception ex)
        {
            insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function spExecScalar - spName: " + spName + " - error: " + ex.Message.ToString());

            returnValue = 0;
            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return returnValue;

    }

    public static string spExecScalarString(String spName, ArrayList paramArr)
    {
        string returnValue = "";
        SqlConnection myConn = new SqlConnection(connectionString);
        SqlCommand sCommand = new SqlCommand("", myConn);

        myConn.Open();

        try
        {
            sCommand.CommandText = spName;

            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, paramArr);
            returnValue = sCommand.ExecuteScalar().ToString();

        }
        catch (Exception ex)
        {
            insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function spExecScalar - spName: " + spName + " - error: " + ex.Message.ToString());

            returnValue = "";
            Console.Write(ex.Message);
        }
        finally
        {
            //  myConn.Close();
        }

        return returnValue;

    }

    public static DataTable GetDataTableBySqlStr(string sqlStr)
    {
        String ConnString = connectionString;
        SqlConnection conn = new SqlConnection(ConnString);
        SqlDataAdapter adapter = new SqlDataAdapter();
        adapter.SelectCommand = new SqlCommand(sqlStr, conn);

        DataTable myDataTable = new DataTable();

        conn.Open();
        try
        {
            adapter.Fill(myDataTable);
        }
        finally
        {
            // conn.Close();
        }


        return myDataTable;
    }

    public static DataTable GetDataTableBySP(string spName, ArrayList arr, string connectin_string)
    {
        try
        {
            String ConnString = connectin_string;// connectionString;
            SqlConnection myConn = new SqlConnection(ConnString);

            SqlCommand sCommand = new SqlCommand("", myConn);
            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, arr);
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = sCommand;
            DataTable dtGet = new DataTable();
            da.Fill(dtGet);
            return dtGet;
        }
        catch (Exception ex)
        {
            return null;

        }

    }

    public static DataSet GetDataSetBySqlStr(string sqlStr)
    {

        String ConnString = connectionString;
        SqlConnection myConn = new SqlConnection(ConnString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = sqlStr;

            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }

    public static DataSet GetDataSetBySqlStr(string sqlStr, string connectionString)
    {

        String ConnString = connectionString;
        SqlConnection myConn = new SqlConnection(connectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = sqlStr;

            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }


    public static DataSet GetDataSetBySqlStrChickenHealth(string sqlStr)
    {

        String ConnString = connectionString;
        SqlConnection myConn = new SqlConnection(ChickenHealthConnectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = sqlStr;

            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }



    public static DataSet GetDataSetBySqlStrLul(string sqlStr)
    {

        String ConnString = connectionString;
        SqlConnection myConn = new SqlConnection(LulMobileConnectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = sqlStr;

            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }


    public static DataSet GetDataSetBySPLulMobile(string spName, ArrayList arr)
    {
        String ConnString = ChickenHealthConnectionString;
        SqlConnection myConn = new SqlConnection(LullMobileconnectionString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, arr);
            da.SelectCommand = sCommand;
            sCommand.CommandTimeout = 90000;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            //insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function GetDataSetBySP - spName: " + spName + " - error: " + ex.Message.ToString());
            //     new Logger().WriteError("error date: " + DateTime.Now.ToLongDateString() + " In Function GetDataSetBySP - spName: " + spName + " - error: " + ex.Message.ToString());
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }










    public static DataSet GetDataSetBySP(string spName, ArrayList arr)
    {

        String ConnString = connectionString;
        SqlConnection myConn = new SqlConnection(ConnString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, arr);
            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            //insertExceptionToFile("error date: " + DateTime.Now.ToLongDateString() + " In Function GetDataSetBySP - spName: " + spName + " - error: " + ex.Message.ToString());
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }

    public static DataSet GetDataSetBySPChickenHealth(string spName, ArrayList arr)
    {
        String ConnString = ChickenHealthConnectionString;
        SqlConnection myConn = new SqlConnection(ConnString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, arr);
            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }

    public static DataSet GetDataSetBySPLul(string spName, ArrayList arr)
    {
        String ConnString = LulMobileConnectionString;
        SqlConnection myConn = new SqlConnection(ConnString);

        SqlCommand sCommand = new SqlCommand("", myConn);

        SqlDataAdapter da = new SqlDataAdapter();
        DataSet ds = new DataSet();

        try
        {
            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, arr);
            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }





    



    public static void setParams(SqlCommand sCommand, ArrayList paramArr)
    {
        if (paramArr != null)
        {
            if (paramArr.Count > 0)
            {

                foreach (paramList arr in paramArr)
                {
                    if (arr.ParamValue == "")
                    {
                        sCommand.Parameters.Add(new SqlParameter(arr.paramName.ToString(), System.DBNull.Value));

                    }
                    else
                    {
                        sCommand.Parameters.Add(new SqlParameter(arr.paramName.ToString(), arr.ParamValue.ToString()));
                    }
                }
            }
        }
    }

    public static DataTable ExecuteSelect(string selectCommand, Dictionary<string, object> parameters, string connectionString)
    {
        SqlConnection MySqlConnection = new SqlConnection(connectionString);
        SqlDataAdapter MySqlDataAdapter = new SqlDataAdapter();
        MySqlDataAdapter.SelectCommand = new SqlCommand(selectCommand, MySqlConnection);
        foreach (KeyValuePair<string, object> pair in parameters)
        {
            MySqlDataAdapter.SelectCommand.Parameters.Add(new SqlParameter(pair.Key, pair.Value));
        }

        DataTable data = new DataTable();
        MySqlConnection.Open();
        try
        {
            MySqlDataAdapter.Fill(data);
        }

        finally
        {
            MySqlConnection.Close();
        }

        return data;
    }


    public static DataSet GetDataSetBySP(string spName, ArrayList arr, string connection_string)
    {
        DataSet ds = new DataSet();
        try
        {
            SqlConnection myConn = new SqlConnection(connection_string);
            SqlCommand sCommand = new SqlCommand("", myConn);
            SqlDataAdapter da = new SqlDataAdapter();
            sCommand.CommandText = spName;
            sCommand.CommandType = CommandType.StoredProcedure;
            setParams(sCommand, arr);
            da.SelectCommand = sCommand;
            da.Fill(ds);
        }
        catch (Exception ex)
        {
            Console.Write(ex.Message);
        }
        finally
        {
            //myConn.Close();
        }

        return ds;

    }




}






