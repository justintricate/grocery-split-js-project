function calculate() {
    var billAmt = document.getElementById("billAmt").value;
    var madiItems = document.getElementById("madiItems").value;
    var jItems = document.getElementById("jItems").value;
    //Calculates each person's share
    var splitAmt = (billAmt - jItems - madiItems) / 2;
    splitAmt = Number(splitAmt);
  
    var justinCost = splitAmt + Number(jItems);
    justinCost = Math.round(justinCost * 100.0) / 100;
  
    var madiCost = splitAmt + Number(madiItems);
    madiCost = Math.round(madiCost * 100.0) / 100;
  
    justinCost = justinCost.toFixed(2);
    madiCost = madiCost.toFixed(2);
  
    //Displays cost
    document.getElementById("madiOwes").innerHTML =
      "Madi's portion is: $" + madiCost;
    document.getElementById("jOwes").innerHTML = "J's portion is: $" + justinCost;
  }
  
  billAmt.addEventListener("input", calculate);
  madiItems.addEventListener("input", calculate);
  jItems.addEventListener("input", calculate);