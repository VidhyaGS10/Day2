let billAmt = document.getElementById("billAmt");
let tipPer = document.getElementById("tipPer");
let totalAmt = document.getElementById("totalAmt");

function calculate(billAmt, tipPer){
    let tipPercentage = tipPer/100;
    // let tipAmt = billAmt * tipPercentage;
    // const totalAmt = billAmt + tipAmt;
    // console.log("Calculating");
    // console.log(totalAmt);
    console.log(billAmt, tipPer, tipPercentage);
}

// let text = "Your final price is " + "CA$" + " " + totalAmt;
// document.innerHTML = text;
