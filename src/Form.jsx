import { useState } from "react";
import Select from "./Select";
import bills2025 from "./Data";


export default function Form() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();
  const currentMonthName = months[currentMonth];

  // bill options
  const billOptions = [
    { value: "", label: "--Select bill type--" },
    { value: "Electric", label: "Electric bill" },
    { value: "Security", label: "Security bill" },
    { value: "Total", label: "Total bill"}
  ];

  // month options
  const monthsOfTheYear = months.map((month) => ({
    value: month,
    label: month,
  }));
  monthsOfTheYear.unshift({ value: "", label: "--Select month--" });

  //Create method to get bill amount
 function getBillAmount(record, month, type,) {
   const billAmount = (record, month, type) => {
     return record
      .filter((bill) => bill.month === month && bill.billType === type)
      .map((bill) => bill.amountPerResident)
      .pop()
   };

  const getPreviousMonth = (list, currMonth) => {
    let index = list.indexOf(currMonth);
    return list[(index + list.length - 1) % list.length]  
  }

  const previousMonth = getPreviousMonth(months, month);

  let billTotal;
  if (type === "Electric") {
    billTotal = billAmount(record, previousMonth, type);
  } else if ( type === "Security") {
    billTotal = billAmount(record, month, type)
  } else {
    billTotal =
      billAmount(record, previousMonth, "Electric") +
      billAmount(record, month, "Security")
  }

  return billTotal || 0;  
 }

  const billRecords = bills2025.allBills();  
  
   // Add mouseover event 
  const [isMouseOver, setMouseOver] = useState(false);
  
  // Create form state
  const [bill, setBill] = useState({
    type: '',
    month:'' 
  }); 

  // Subheading state
  const [subHeadingText, setSubHeadingText] = useState({
    type:'Total',
    month: currentMonthName,
  })
  
  // Get current month total
  const amount = getBillAmount(billRecords, subHeadingText.month, subHeadingText.type);
  const displayAmount = amount.toLocaleString(); 

  // Handle change
  const handleChange = e => {
    let {name, value} = e.target; 
  
    setBill({
      ...bill, 
      [name]: value
    });
  }

  // Handle submit
  const handleSubmit = e => {
    e.preventDefault(); 

    const {name, value} = e.target; 

    setSubHeadingText(bill)
  }

  // Handle mouseover event
  function handleMouseOver() {
    return setMouseOver(true); 
  }

  // Add mouseout event
  function handleMouseOut() {
    return setMouseOver(false); 
  }

  const btnHoverColor = isMouseOver
  ? { backgroundColor: "#411F1F", color: "white" }
  : { backgroundColor: "white", color: "#411F1F" };
 

const formattedAmount = (
  <span className="amount-highlight">₦{displayAmount}</span>
);

const subHeading = subHeadingText.type === 'Total' || subHeadingText.type === '' 
  ? `Total bill for ${subHeadingText.month}: `
  : `${subHeadingText.type} bill for ${subHeadingText.month}: `;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{subHeading}{formattedAmount}</h2>
        <Select name="type" options={billOptions} value ={bill.type} onChange={handleChange}/>
        <Select name="month" options={monthsOfTheYear} value={bill.month} onChange={handleChange}/>
        <button 
          type="submit" 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}
          style={btnHoverColor}>Check
        </button>
      </form>
    </div>
  );
}