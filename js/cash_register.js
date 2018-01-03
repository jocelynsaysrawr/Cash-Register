console.log("register sanity check");

function cashRegister() {

    let clearBtn = document.getElementById("clear");
    let subtotalBtn = document.getElementById("getBalance");
    let depositBtn = document.getElementById("deposit");
    let withdrawBtn = document.getElementById("withdraw");
    
    let display = document.getElementById("amount");
    let numBtns = document.getElementsByClassName("num");

    for (var i = 0; i < numBtns.length; i++){
        numBtns[i].addEventListener("click", showNum);
    }

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
    let savedDollars = 0;
    let operation = null;

    let addBtn = document.getElementById("add");
    addBtn.addEventListener("click", addition);

    function addition() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "add";
        console.log(typeof dollars);
        console.log(dollars);
        calculator.load(dollars);
        calculator.saveMemory();
        display.innerHTML = "";
    }

    let subtractBtn = document.getElementById("subtract");
    subtractBtn.addEventListener("click", subtraction);

    function subtraction() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "subtract";
        calculator.load(dollars);
        calculator.saveMemory();
        display.innerHTML = "";
    }

    let multiplyBtn = document.getElementById("multiply");
    multiplyBtn.addEventListener("click", multiplication);

    function multiplication() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "multiply";
        calculator.load(dollars);
        calculator.saveMemory();
        display.innerHTML = "";
    }

    let divideBtn = document.getElementById("divide");
    divideBtn.addEventListener("click", division);

    function division() {
        dollars = Number(parseFloat(display.innerHTML).toFixed(2));
        operation = "divide";
        calculator.load(dollars);
        calculator.saveMemory();
        display.innerHTML = "";
    }

    let totalBtn = document.getElementById("total");
    totalBtn.addEventListener("click", equals);

    function equals() {
        if (operation === "add"){
            dollars = Number(parseFloat(display.innerHTML).toFixed(2));
            calculator.add(dollars);
            let totalStr = calculator.getTotal().toString();
            if (!totalStr.includes(".")) {
                display.innerHTML = totalStr + ".00";
            }else{
                display.innerHTML = calculator.getTotal().toFixed(2);
            }
        }else if (operation === "subtract") {
            dollars = Number(parseFloat(display.innerHTML).toFixed(2));
            calculator.subtract(dollars);
            let totalStr = calculator.getTotal().toString();
            if (!totalStr.includes(".")) {
                display.innerHTML = totalStr = ".00";
            }else{
                display.innerHTML = calculator.getTotal().toFixed(2);
            }
        }else if (operation === "multiply") {
            dollars = Number(parseFloat(display.innerHTML).toFixed(2));
            calculator.multiply(dollars);
            let totalStr = calculator.getTotal().toString();
            if (!totalStr.includes(".")) {
                display.innerHTML = totalStr + ".00";
            }else{
                display.innerHTML = calculator.getTotal().toFixed(2);
            }
        }else if (operation === "divide") {
            dollars = Number(parseFloat(display.innerHTML).toFixed(2));
            calculator.divide(dollars);
            let totalStr = calculator.getTotal().toString();
            if (!totalStr.includes(".")) {
                display.innerHTML = totalStr + ".00";
            }else{
                display.innerHTML = calculator.getTotal().toFixed(2);
            }
        }
    }

}

cashRegister();