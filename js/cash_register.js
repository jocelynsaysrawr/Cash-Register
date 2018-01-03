console.log("register sanity check");

function cashRegister() {

    let totalBtn = document.getElementById("total");
    let clearBtn = document.getElementById("clear");
    let subtotalBtn = document.getElementById("getBalance");
    let depositBtn = document.getElementById("deposit");
    let withdrawBtn = document.getElementById("withdraw");
    
    let display = document.getElementById("amount");


   /* function showNum() {
        if (dollars === 0){
            dollars += Number(this.innerHTML) / 100;
            display.innerHTML = dollars;
        }else if (dollars !== 0){
           dollars = (dollars * 10) + (Number(this.innerHTML) / 100);
           dollars = Number(dollars.toFixed(2));
            display.innerHTML = calculator.load(dollars);
        }   
    }
    */
    let numBtns = document.getElementsByClassName("num");

    for (var i = 0; i < numBtns.length; i++){
        numBtns[i].addEventListener("click", showNum);
    }

    let numArray = [];

    function showNum() {
        if (display.innerHTML === "0.00"){
            display.innerHTML = this.innerHTML;
        }else{
            display.innerHTML += this.innerHTML;
        }
    }

    let decimalBtn = document.getElementById("cents");
    decimalBtn.addEventListener("click", decimal)

    function decimal() {
        if (display.innerHTML.includes(".")){
            throw Error ("too many decimals!")
        }else{
            display.innerHTML += this.innerHTML;
        }
    }

    let dollars = 0;
    let operation = null;

    let addBtn = document.getElementById("add");
    addBtn.addEventListener("click", addition);

    function addition() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "add";
        console.log(typeof dollars);
        console.log(dollars);
        calculator.add(dollars);
        display.innerHTML = "";
    }

    let subtractBtn = document.getElementById("subtract");
    subtractBtn.addEventListener("click", subtraction);

    function subtraction() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "subtract";
        calculator.subtract(dollars);
        dispaly.innerHTML = "";
    }

    let multiplyBtn = document.getElementById("multiply");
    multiplyBtn.addEventListener("click", multiplication);

    function multiplication() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "multiply";
        calculator.multiply(dollars);
        display.innerHTML = "";
    }

    let divideBtn = document.getElementById("divide");
    divideBtn.addEventListener("click", division);

    function division() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "divide";
        calculator.divide(dollars);
        display.innerHTML = "";
    }

}

cashRegister();