using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public class paramList
{

    private String myParamName;
    private String myParamValue;

    public paramList(String strParamName, String strParamValue)
    {

        this.myParamName = strParamName;
        this.myParamValue = strParamValue;
    }

    public String paramName
    {
        get { return myParamName; }
    }

    public String ParamValue
    {
        get { return myParamValue; }
    }


}

