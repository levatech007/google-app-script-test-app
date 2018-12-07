var sheet = Config().postSpreadsheet

function postDataToSheet(e) {
  var lock = LockService.getPublicLock();
  lock.waitLock(30000);  // wait 30 seconds before conceding defeat.
  
  var headRow = e.parameter.header_row || 1;
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var nextRow = sheet.getLastRow()+1; // get next row
  var row = [];
  var output = "";
    // loop through the header columns
  for (i in headers){
    if (headers[i] == "timestamp"){ // special case if you include a 'Timestamp' column
      row.push(new Date());
    } else { // else use header name to get data
      row.push(e.parameter[headers[i]]);
    }
  }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    //output = JSON.stringify({"result":"success", "row": nextRow});
    //if (e.parameter.callback){
      // return jsonp success results
      //return ContentService
          //.createTextOutput(e.parameter.callback+"("+ output + ");")
          //.setMimeType(ContentService.MimeType.JAVASCRIPT);
    //}
    //else{
      // return jsonp success results
     // return ContentService
       //   .createTextOutput(output)
         // .setMimeType(ContentService.MimeType.JSON);
    //}
  //} catch(e){
    //output = JSON.stringify({"result":"error", "error": e});
    //if (e.parameter.callback){
      // if error return this, again, in jsonp
      //return ContentService
        //  .createTextOutput(e.parameter.callback+"("+ output + ");")
          //.setMimeType(ContentService.MimeType.JAVASCRIPT);
    //}
    //else{
      //return ContentService
        //  .createTextOutput(output)
          //.setMimeType(ContentService.MimeType.JSON);
   // }
  //} finally { //release lock
    lock.releaseLock();
  //}
//}

  
}
