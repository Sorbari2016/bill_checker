// Blueprint for the bills

// create a bill className
class Bill {
    constructor(noticeDate, month, billType, amount, totalResidents,dueDate) {
        const typeOfBill = billType === "Electric" ? "E":"S"
        this.id = `${typeOfBill}-${new Date(noticeDate).getMonth() + 1}-${new Date(noticeDate).getFullYear()}` 
        this.noticeDate = noticeDate; 
        this.month = month; 
        this.billType = billType; 
        this.amount = amount; 
        this.totalResidents = totalResidents; 
        this.dueDate = dueDate; 
    }

    getBillAmount() {
        return Math.round(this.amount/this.totalResidents);
    }

    billInfo() {
        return {
            id: this.id,
            month: this.month,
            billType: this.billType,
            totalResidents: this.totalResidents, 
            amountPerResident: this.getBillAmount(),
            dueDate: this.dueDate 
        }
    }
}

// create a bill manager class

class BillManager {
    constructor() {
        this.billLedger = []; 
    }

    // Get all the bills
    allBills() {
        return this.billLedger; 
    }

    // Find a bill
    findBill(noticeDate, billType) {
        const typeOfBill = billType === "Electric" ? "E":"S"
        const id = `${typeOfBill}-${new Date(noticeDate).getMonth() + 1}-${new Date(noticeDate).getFullYear()}`

        const ledger = this.billLedger; 

        for (let i = 0; i < ledger.length; i++ ) {
            let bill = ledger[i]; 
            if (bill.id === id) {
                return bill; 
            }
        }
        
        return null; 
    }


    // Add a new bill 
    addNewBill(noticeDate, month, billType, amount, totalResidents,dueDate) {
        
        const bill = this.findBill(noticeDate, billType); 

        // update bill if exists
        if (bill) {
            this.updateBill(noticeDate, month, billType, amount, totalResidents, dueDate); 
        }else { 
        // Create new bill
        const newBill = new Bill(noticeDate, month, billType, amount, totalResidents, dueDate)
        const ledger = this.billLedger; 
        ledger.push(newBill.billInfo()); // Add to the ledger
        }
    }

    // update an existing bill 
    updateBill(noticeDate, month, billType, amount, totalResidents, dueDate) {
        
        const bill = this.findBill(noticeDate, billType); 
        
        // save old data
        const oldMonth = bill.month;
        const oldTypeOfBill = bill.billType; 
        const oldResidentNumber = bill.totalResidents;
        const oldAmount = bill.amount;
        const oldDueDate = bill.dueDate;
        
        // set new data
        bill.month = oldMonth === month || !month ? oldMonth : month; 
        bill.typeOfBill = oldTypeOfBill === billType || !billType ? oldTypeOfBill : billType; 
        bill.totalResidents = oldResidentNumber === totalResidents || !totalResidents ? oldResidentNumber : totalResidents;
        bill.amount = oldAmount === amount || !amount ? oldAmount : amount;
        bill.dueDate = oldDueDate === dueDate || !dueDate ? oldDueDate : dueDate; 
        bill.amountPerResident = Math.round (bill.amount / bill.totalResidents); 
    }  
    
    viewSecurityBills() {
        const ledger = this.billLedger;
        const securityBills = ledger
            .filter((bill) => bill.billType === "Security")
            .map((bill) => ({
                month: bill.month,
            amount: bill.amountPerResident,
            }));

        return securityBills;
    }

    viewElectricBills() {
        const ledger = this.billLedger; 
        const electricBills = ledger
            .filter(bill => bill.billType === "Electric")
            .map((bill) => ({
                month: bill.month,
                amount: bill.amountPerResident, 
            }));

        return electricBills;  
    }

    viewCurrentSecurityBill() {
        const securityBills = this.viewSecurityBills();
        return securityBills[securityBills.length -1]; 
    }

    viewCurrentElectricBill() {
        const electricBills = this.viewElectricBills(); 
        return electricBills[electricBills.length - 1]; 
    }

    viewCurrentBills() {
        const currentSecurityBill = this.viewCurrentElectricBill(); 
        const currentElectricBill = this.viewCurrentSecurityBill(); 
        return [currentElectricBill, currentSecurityBill]; 
    }

    getTotalCurrentBill() {
      const totalBills = this.viewCurrentBills()
        .map(bill => bill.amount)
        .reduce((acc, cur) => acc + cur); 
        
      return totalBills;  
    }
   
}

export {BillManager}; 