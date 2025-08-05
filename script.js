let button = document.querySelector("#calculate");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");

function calcBill(b, t, p) {
    let tip_amount = b * (t / 100);
    let total_amount = tip_amount + b;
    let b_p_p = total_amount / p;
    return b_p_p;
}

button.addEventListener("click", () => {
    let bill = parseFloat(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);
    let tip = parseFloat(document.getElementById("tip").value);

    if (!isNaN(bill) && !isNaN(person) && !isNaN(tip) && bill > 0 && person > 0 && tip >= 0) {
        console.log(person);
        let result = calcBill(bill, tip, person);

        msg.innerText = `Bill per person: ${result} Rs`;
    } else {
        msg.innerText = "Please enter valid inputs";
    }
});

reset.addEventListener("click", () => {
    msg.innerText = "";
    document.getElementById("bill").value = "";
    document.getElementById("person").value = "";
    document.getElementById("tip").value = "";
});
