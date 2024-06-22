let billAmt = parseFloat(document.getElementById("billAmt").value);
let tipPer = parseFloat(document.getElementById("tipPer").value);

// parseInt(billAmt, parseInt);

function calculate(){
    let tipAmt = billAmt * (tipPer / 100);
    let totalAmt = billAmt + tipAmt;
    console.log("Calculating");
    document.getElementById("totalAmt").innerHTML = totalAmt; 
}