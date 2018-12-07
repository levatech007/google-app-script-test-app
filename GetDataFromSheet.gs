var worksheet = Config().getSpreadsheet.getSheets()[0];
var rows = worksheet.getDataRange().getValues();
var headings = rows[0].map(String.toLowerCase);
var contents = rows.slice(1);
var contentWithHeadings = addHeadings(contents, headings);

function addHeadings(contents, headings) {
  return contents.map(function(contentAsArray) {
    var contentAsObj = {};
    headings.forEach(function(heading, idx) {
      contentAsObj[heading] = contentAsArray[idx];
    });
    contentAsObj['list'] = contentAsObj['list'].split(",");
    return contentAsObj;
  });
}

function buildSuccessGetResponse(message) {
  var response = {
    data: contentWithHeadings,
    message: message,
  };
  return ContentService.createTextOutput(JSON.stringify(response));
}

function buildErrorResponse(message) {
  var response = {
    status: 'error',
    message: message
  };
  
  return ContentService.createTextOutput(JSON.stringify(response));
}