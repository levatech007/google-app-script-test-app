var sendToEmail = Config().sendToEmail;
var messages;

function processForm(name, email, message) {
  var formIsValid = validateForm(name, email, message);
  formIsValid ?  messages = ["Successfully submitted!"] : messages = returnErrors()
  return formIsValid;
}

function getMessages() {
  return messages;
}

function sendEmail(name, email, message) {
  var formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  MailApp.sendEmail({
        to: sendToEmail,
        subject: "New form entry: " + formattedName,
        htmlBody: 
        "Name: " + formattedName + "<br>" +
        "Email: " + email + "<br>" + 
        "Message: " + message
      });
}

function buildResponse(formValid, message) {
  return {formIsValid: formValid, message: message}
}
