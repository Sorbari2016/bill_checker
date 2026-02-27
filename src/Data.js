import { BillManager } from "./Bills";

const bills2025 = new BillManager();

// Electric bills 
bills2025.addNewBill('01/08/2025', 'December', 'Electric', 129457,25,'01/15/2025');
bills2025.addNewBill('02/07/2025', 'January', 'Electric', 96018, 26,'02/15/2025');
bills2025.addNewBill('03/07/2025', 'February', 'Electric', 87312,24,'03/15/2025');
bills2025.addNewBill('04/08/2025','March','Electric',0,24,'05/15/2025');
bills2025.addNewBill('05/02/2025', 'April', 'Electric', 87672,24,'05/15/2025');
bills2025.addNewBill('06/12/2025', 'May', 'Electric', 56005,23,'06/15/2025');
bills2025.addNewBill('07/13/2025', 'June', 'Electric', 97576,24,'07/15/2025');
bills2025.addNewBill('08/08/2025', 'July', 'Electric', 127440,24,'08/15/2025');
bills2025.addNewBill('09/10/2025', 'August', 'Electric', 115200,24,'09/15/2025');
bills2025.addNewBill('10/14/2025', 'September', 'Electric', 114000,24,'10/15/2025');
bills2025.addNewBill('11/13/2025', 'October', 'Electric', 119080,26,'10/15/2025');
bills2025.addNewBill('12/08/2025', 'November', 'Electric', 41600,26,'12/15/2025');


// Security Bills
bills2025.addNewBill('01/15/2025', 'January', 'Security', 60000,25,'01/28/2025');
bills2025.addNewBill('02/15/2025', 'February', 'Security', 60000,25,'02/28/2025');
bills2025.addNewBill('03/15/2025', 'March', 'Security', 60000,25,'03/28/2025');
bills2025.addNewBill('04/15/2025', 'April', 'Security', 60000,25,'04/28/2025');
bills2025.addNewBill('05/15/2025', 'May', 'Security', 60000,24,'05/28/2025');
bills2025.addNewBill('06/15/2025', 'June', 'Security', 60000,24,'06/28/2025');
bills2025.addNewBill('07/15/2025', 'July', 'Security', 60000,25,'07/28/2025');
bills2025.addNewBill('08/15/2025', 'August', 'Security', 60000,25,'08/28/2025');
bills2025.addNewBill('09/15/2025', 'September', 'Security', 60000,25,'09/28/2025');
bills2025.addNewBill('10/15/2025', 'October', 'Security', 60000,25,'10/28/2025');
bills2025.addNewBill('11/15/2025', 'November', 'Security', 60000,25,'11/28/2025');
bills2025.addNewBill('12/15/2025', 'December', 'Security', 60000,25,'12/28/2025');

export default bills2025;