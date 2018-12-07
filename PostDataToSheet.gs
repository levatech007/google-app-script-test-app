var sheet = Config().postSpreadsheet.getSheets()[0];

function postDataToSheet(e) {
  //var lock = LockService.getPublicLock();
  //lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
  
  var rows = sheet.getDataRange().getValues(); 
  var headings = rows[0].map(String.toLowerCase);
  var row = [];
  for (i in headings)
    if (headings[i] == "timestamp")
      row.push(new Date());
    else 
      row.push(e.parameter[headings[i]]);
    
    sheet.appendRow(row);
     //lock.releaseLock();
  }
  
   
 
 
  

