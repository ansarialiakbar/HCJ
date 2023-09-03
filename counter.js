const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayvalue = document.getElementById("displayvalue");
// for decrementBtn
decrementBtn.addEventListener("click", () => {
    const value  = Number(displayvalue.innerText);
    if(value > 0){
        displayvalue.innerText = value - 1;
    }
    else{
        alert("Negative value are not allowed");
    }
}
);
// for increment
incrementBtn.addEventListener("click", () => {
    const value  = Number(displayvalue.innerText);
    if(value >= 10){
       alert("Above 10 values are not allowed")
    }
    else{
        displayvalue.innerText = value + 1;
    }
});
// for rest
resetBtn.addEventListener("click", () => {
    displayvalue.innerText = 0;
});