//Task 1

let value1 = prompt("Enter your first value: ");
let value2 = prompt("Enter your second value: ");

value1 = parseInt(value1);
value2 = parseInt(value2);

if (isNaN(value1 && value2)) {
    alert("Both entered values must be integers!");
}
else {
    result1 = value1 + value2;
    alert("The result of addition is "+ result1);
    result2 = value1 - value2;
    alert("The result of subtraction is "+ result2);
    result3 = value1 * value2;
    alert("The result of multiplication is "+ result3);
    result4 = value1 / value2;
    alert("The result of division is "+ result4);
}

//Task 2

let firstName = prompt("Enter you first name: ");
let lastName = prompt("Enter your last name: ");

alert("Hello " + firstName + " " + lastName);