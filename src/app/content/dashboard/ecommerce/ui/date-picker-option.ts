import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyDatePickerOptions {

    myOption: IAngularMyDpOptions  = {
  
        stylesData: {
          selector: 'dp1',
          styles: `
            .dp1 .myDpIconLeftArrow,
            .dp1 .myDpIconRightArrow,
            .dp1 .myDpHeaderBtn {
              color: #fff;
            }
            .dp1 .myDpHeaderBtn:focus,
            .dp1 .myDpMonthLabel:focus,
            .dp1 .myDpYearLabel:focus {
              color: #66afe9;
            }
            .dp1 .myDpDaycell:focus,
            .dp1 .myDpMonthcell:focus,
            .dp1 .myDpYearcell:focus {
              box-shadow: inset 0 0 0 1px #66afe9;
            }
            .dp1 .myDpSelector:focus {
              box-shadow: -1px 1px 6px 0px #ADD8E6;
            }
            .dp1 .myDpSelectorArrow:after {
              border-color: rgba(108, 117, 125, 0);
              border-bottom-color: #6c757d;
            }
            .dp1 .myDpSelectorArrow:focus:before {
              border-bottom-color: #ADD8E6;
            }
            .dp1 .myDpCurrMonth,
            .dp1 .myDpMonthcell,
            .dp1 .myDpYearcell {
              color: #fff;
              font-weight: bold;
            }
            .dp1 .myDpDaycellWeekNbr {
              color: #fff;
              background-color: #6c757d;
            }
            .dp1 .myDpPrevMonth,
            .dp1 .myDpNextMonth {
              color: #bbb;
            }
            .dp1 .myDpWeekDayTitle {
              background-color: #6c757d;
              color: #fff;
              font-weight: bold;
            }
            .dp1 .myDpHeaderBtnEnabled:hover,
            .dp1 .myDpMonthLabel:hover,
            .dp1 .myDpYearLabel:hover,
            .dp1 .myDpFooterBtn:hover {
              color: #ddd;
            }
            .dp1 .myDpMarkCurrDay, 
            .dp1 .myDpMarkCurrMonth, 
            .dp1 .myDpMarkCurrYear {
              border-bottom: 2px solid #fff;
            }
            .dp1 .myDpTableSingleDay:hover, 
            .dp1 .myDpTableSingleMonth:hover, 
            .dp1 .myDpTableSingleYear:hover {
              background-color: #ddd;
              color: #000;
              font-weight: bold;
            }
            .dp1 .myDpDaycell,
            .dp1 .myDpMonthcell,
            .dp1 .myDpYearcell {
              background-color: #6c757d;
            }
            .dp1 .myDpRangeColor {
              background-color: #aaa;
              color: #fff;
            }
            .dp1 .myDpSelectedDay,
            .dp1 .myDpSelectedMonth,
            .dp1 .myDpSelectedYear {
              background-color: #aaa;
              color: #fff;
              font-weight: bold;
              box-shadow: inset 0 0 0 1px #fff;
            }
            .dp1 .myDpSelector,
            .dp1 .myDpMonthYearSelBar,
            .dp1 .myDpFooterBar {
              background-color: #6c757d;
            }
            .dp1 .myDpDisabled {
              color: #fff;
              background: repeating-linear-gradient(-45deg, #6c757d 7px, #d3d3d3 8px, transparent 7px, transparent 14px);
            }
            .dp1 .myDpHighlight {
              color: 	#960018;
            }`
          } ,
        dateRange: false,
        dateFormat: 'dd/mm/yyyy',
        selectorWidth: '220px',
        markCurrentDay: true,
        firstDayOfWeek: 'su',
        rtl: true,
        sunHighlight: false,
    
        dayLabels:	{su: 'א', mo: 'ב', tu: 'ג', we: 'ד', th: 'ה', fr: 'ו', sa: 'ש'},
        monthLabels:	{ 1: 'ינו', 2: 'פבר', 3: 'מרץ', 4: 'אפר', 5: 'מאי', 6: 'יונ', 7: 'חול', 8: 'אוג', 9: 'ספט', 10: 'אוק', 11: 'נוב', 12: 'דצמ' }
    
        // other options are here...
      };
 
   parseDateToStr(value: String) : string | null
   {
      
     if (value!='' && (value.indexOf('/') > -1)) 
     {
       const str = value.split('/');
 
       const year = Number(str[2]);
       const month = Number(str[1]) - 1;
       const date = Number(str[0]);
     
       var new_date=new Date(year, month, date);
       var datePipe = new DatePipe("en-US");
      
       return datePipe.transform(new_date, 'yyyyMMdd')
     }
   }
 
   
   initDates(date: IMyDateModel) : string {
  
    console.log("date=" + JSON.stringify(date));
    console.log("date=" + JSON.stringify(date.singleDate.date.year));
    return (date.singleDate.date.day.toString().length == 1 ? '0' + date.singleDate.date.day : date.singleDate.date.day) + '/' + (date.singleDate.date.month.toString().length == 1 ? '0' + date.singleDate.date.month : date.singleDate.date.month) + '/' + date.singleDate.date.year
  }

  initDatesMonthOp(date: IMyDateModel) : string {
  
    console.log("date=" + JSON.stringify(date));
    console.log("date=" + JSON.stringify(date.singleDate.date.year));
    return (date.singleDate.date.month.toString().length == 1 ? '0' + date.singleDate.date.month : date.singleDate.date.month) + '/' + (date.singleDate.date.day.toString().length == 1 ? '0' + date.singleDate.date.day : date.singleDate.date.day) + '/' + date.singleDate.date.year
  }


   parseStrToDate(value: String) : string | null
   {
      
   
 
       const year = value.substring(0, 4);
       const month = value.substring(4, 6);
       const day = value.substring(6, 8);
     
       console.log("day=" + day)
       console.log("month=" + month)
       console.log("year=" + year)

       return day + '/' + month + '/' +  year;

   
   }

   getIMyDateModel(date) {
    return {'isRange':false,'singleDate': {"date":{"year": parseInt(date.substring(6, 10)), "month": parseInt(date.substring(3,5)), "day": parseInt(date.substring(0, 2))}}};

   }

   
}


  

