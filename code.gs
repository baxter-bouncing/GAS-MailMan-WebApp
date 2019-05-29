function doGet() {
 var template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasesList();
  var html = template.evaluate().setTitle('MailMan');
  return html;
};



function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu('➡ MailMan')
  .addItem('Show sidebar', 'showSidebar')
  .addToUi();  
};


function showSidebar() {
  var template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasesList();
  var html = template.evaluate().setTitle('MailMan');
  SpreadsheetApp.getUi().showSidebar(html);
};
  

function getGmailAliasesList() {
  var aliases = GmailApp.getAliases();
  aliases.push(Session.getActiveUser().getEmail());
  return aliases;
};

function sendEmail(data) {
var  from = data.from,
     to = data.to,
     subject = data.subject,
     body = data.body;
  
  try {
    GmailApp.sendEmail(to, subject, body, {
      from: from
    });
  } catch (f) {
    try {
      MailApp.sendEmail(to, subjct, body, {
        from: from
      });
    } catch (e) {
      return "Error: ".concat(e.toString());
  }
 }
  return "Email sent to ".concat(to);  
};


function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();

};

                       
                       




