// This constant is written in column C for rows for which an email
// has been sent successfully.
let EMAIL_SENT = 'EMAIL_SENT';

/**
 * Sends non-duplicate emails with data from the current spreadsheet.
 */
function sendNonDuplicateEmails() {
  try{
    // Get the active sheet in spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    let startRow = 2; // First row of data to process
    let numRows = 2; // Number of rows to process
    // Fetch the range of cells A2:B3
    const dataRange = sheet.getRange(startRow, 1, numRows, 3);
    // Fetch values for each row in the Range.
    const data = dataRange.getValues();
    for (let i = 0; i < data.length; ++i) {
      const row = data[i];
      const emailAddress = row[0]; // First column
      const message = row[1]; // Second column
      const emailSent = row[2]; // Third column
      if (emailSent !== EMAIL_SENT) { // Prevents sending duplicates
        let subject = 'Sending emails from a Spreadsheet';
        // Send emails to emailAddresses which are presents in First column
        MailApp.sendEmail(emailAddress, subject, message);
        sheet.getRange(startRow + i, 3).setValue(EMAIL_SENT);
        // Make sure the cell is updated right away in case the script is interrupted
        SpreadsheetApp.flush();
      }
    }
  }
  catch(err){
    Logger.log(err)
  }
}
// [END gmail_send_non_duplicate_emails]
