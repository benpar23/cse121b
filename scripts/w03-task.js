/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factorNumber1 = Number(document.querySelector("#factor1").value);
    let factorNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factorNumber1, factorNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = function() {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    let subtotal = Number(document.querySelector("#subtotal").value);

    const member = document.querySelector("#member");

    // member.addEventListener("click", true);

    if (member) {
        subtotal * 0.8;
    }

    document.querySelector("#total").innerHTML = `${subtotal}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
