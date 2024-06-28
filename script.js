let billAmtS = document.getElementById("billAmt");
let tipPerS = document.getElementById("tipPer");
let totalAmt = document.getElementById('totalAmt');
let text;

function calculate(billAmt, tipPer){
    billAmt = billAmtS.value;
    tipPer = tipPerS.value;
    // const tipPercentage = tipPer/100;
    // let tipAmt = billAmt * tipPercentage;
    let total = (billAmt * (1 + (tipPer/100))).toFixed(2);
    // console.log("Calculating");
    // console.log(billAmt, tipPer, tipPercentage, tipAmt);
    console.log(total);
    text = "Your final price is " + "CA$" + " " + total;
    console.log(text);
    totalAmt.innerHTML = text;
}
