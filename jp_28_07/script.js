let value1 = prompt("Enter your first value: ");
let value2 = prompt("Enter your second value: ");
let operation = prompt("Enter one of the following: +, -, *, /");

if (!isNaN(value1) && !isNaN(value2)) {
    value1 = parseFloat(value1);
    value2 = parseFloat(value2);
    if (operation == "+") {
        result1 = value1 + value2;
        alert("The result of addition is " + result1);
    } else if (operation == "-") {
        result2 = value1 - value2;
        alert("The result of subtraction is " + result2);
    } else if (operation == "*") {
        result3 = value1 * value2;
        alert("The result of multiplication is " + result3);
    } else if (operation == "/") {
        result4 = value1 / value2;
        alert("The result of division is " + result4);
    } else {
        alert("Error. Please, enter one of the following: +, -, *, /");
    }
} else if (isNaN(value1) || isNaN(value2)) {
    if (operation == "+") {
        alert("The strings are concatenated: " + value1 + " " + value2);
    } else {
        alert("Error. Both values must be integers!");
    }
} else {
    alert("Something went wrong. Please, try again.");
}