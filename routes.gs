

function doGet(e) {
  if (!isAuthorized(e)) 
    return buildErrorResponse("Unauthorized");
  else 
    return buildSuccessGetResponse("Authorized");
}

function doPost(e) {
  var response;
  if(typeof e !== "undefined") {
    var name = e.parameter.name;
    var email = e.parameter.email;  
    var message = e.parameter.message;
    var formIsValid = processForm(name, email, message);
    formIsValid ?  sendEmail(name, email, message) : null;
    //enter data into a spreadsheet
    postDataToSheet(e);
    var response = buildResponse(formIsValid, getMessages());
  } else {
    var response = buildResponse(false, "Please fill in all fields");
  }
  return ContentService.createTextOutput(JSON.stringify(response));
}
