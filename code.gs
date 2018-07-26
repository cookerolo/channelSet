function campaign(text) {
  result = [];
  switch (text.substr(0,3).toLowerCase()) {
    case "geo":
      result.push("Geo JB");
      switch(text.substr(3,3).toLowerCase()) {
        case "vic":
          result.push("V");
          break;
        case "stf":
          result.push("S");
          break;
        case "bar":
          result.push("B");
          break;
        case "ale":
          result.push("A");
          break;
        case "rom":
          result.push("R");
          break;
        case "ann":
          result.push("An");
          break;
        case "jos":
          result.push("J");
          break;    
        default: 
          result.push("Check please");
          break;
      };
      result.push(text.substr(6,text.length));
      break;
    case "fun": 
      result.push("Functional JB");
      switch(text.substr(3,3).toLowerCase()) {
        case "vic":
          result.push("V");
          break;
        case "stf":
          result.push("S");
          break;
        case "bar":
          result.push("B");
          break;
        case "ale":
          result.push("Al");
          break;
        case "rom":
          result.push("R");
          break;
        case "ann":
          result.push("An");
          break;
        case "jos":
          result.push("J");
          break;    
        default: 
          result.push("Check please");
          break;
      };
      result.push(text.substr(6,text.length));
      break;
    case "dmg":
      result.push("GA","NA","NA");
      break;
    case "liz":
    case "lin":
      result.push("LI","NA", "NA");
      break;
    case "htr":
      result.push("HTR","NA", "NA");
      break;
    case "dmf":
    case "dmm":
    case "dmv":
    case "dmn":
    case "dmb":
      result.push("FB","NA","NA");
      break;
    case "dml":
      result.push("LIA","NA","NA");
      break;
    case "jbz":
      result.push("St","NA","NA");
      break;
    default:
      result.push("Other","NA","NA");
      break;
  }
  return (text==null || text=="")? ["None","NA","NA"] : result;  
}

function setChannel() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheets()[0];
  var valuesOnSheet = sh.getRange("A:A").getValues();
  var lastRow = valuesOnSheet.filter(String).length;;
  var lastCategorizedRow = 2;
  if(lastRow != lastCategorizedRow) {
    var valuesToCalculate =  sh.getRange(lastCategorizedRow, 7, lastRow -1 ).getValues();
    var results = [];
    for(var i = 0; i < valuesToCalculate.length; i++ ) {
      var result = campaign(valuesToCalculate[i].toString());
      results.push(result);
    }
    sh.getRange(lastCategorizedRow, 12, lastRow -1, 3).setValues(results); 
    ss.toast("All rows updated!", "Success!", 3)
  } else {
    ss.toast("No rows to update, please try again later!", "Ops!", 3)
  }
 
}
