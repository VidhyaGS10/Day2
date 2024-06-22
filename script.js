let billAmt = document.getElementById("billAmt");
let tipPer = document.getElementById("tipPer");

// parseInt(billAmt, parseInt);

function calculate(){
    let tipAmt = billAmt * (tipPer / 100);
    let totalAmt = billAmt + tipAmt;
    console.log("Calculating");
    document.getElementById("totalAmt").innerHTML = totalAmt; 
}