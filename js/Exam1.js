function CalcLoan()
{
     var principal = new Number(document.getElementById("loanlabel").value); //get loan amount or principal
     
     var intrate = new Number(document.getElementById("ratelabel").value)/100 / 12; //get interest rate
     
     var term = new Number(document.getElementById("termlabel").value); //get the term of loan
     
     var x = Math.pow(1 + intrate, term); //interest
     
     var monthlypay = (principal*x*intrate)/(x-1); //calculate monthly payment
     
    
     document.getElementById("MonthlyPayment").innerHTML = "Monthly Payment = " + "$" + monthlypay.toFixed(2);  //display the monthly payment in a label
     
    
     var balance = new Number(document.getElementById("loanlabel").value);
     
     
     
      var results = "<table><tr><th>Months  </th><th>Beginning Amount  </th><th>Paid to Principal  </th><th>Paid to Interest  </th><th>End Amount</th></tr>";  //Create a table header 
    
         

     for (var count=0; count < term; count++)
     {
        
     var interestForMonth = balance * intrate;
     
     var principalForMonth = monthlypay - interestForMonth;
     
     balance = balance - principalForMonth;
     
     var endamt = balance - principalForMonth;
     
     if (endamt <= 0)
    {
        endamt = 0.00;
    }
    
     
     results += "<tr><td>" + (count + 1) + "</td><td>" + "$" + balance.toFixed(2) + "</td><td>" + "$" + principalForMonth.toFixed(2) + "</td><td>" + "$" + interestForMonth.toFixed(2) + "</td><td>" + "$" + endamt.toFixed(2)+ "</td></tr>";  //Create Table rows
     
    
     
     document.getElementById("ATable").innerHTML = results;
     }
     
     results += "</table>";
     
     
     
     
     
}