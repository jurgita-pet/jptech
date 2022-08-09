//Task 1

alert(`Welcome to the task 1! 
Enter your date of birth in three steps: 
1) Enter your day, 
2) Enter you month, 
3) Enter your year of birth 
and you will find out what your Zodiac sign is.`)

let day = prompt("Enter you birth day (in numbers): ");
let month = prompt("Enter your birth month (in numbers): ");
let year = prompt("Enter your birth year (in numbers): ");

if (!isNaN(day) && !isNaN(month) && !isNaN(year) && day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1900 && year <= 2100) {
    if (month == 2) {
        if ((year % 4 === 0 && day <= 29) || (year % 4 !== 0 && day <= 28)) {
            if (day < 19) {
                alert("Aquarius");
            } else {
                alert("Pisces");
            }
        } else {
            alert(`The day of birth is incorrect, as February in ${year} has only 28 days.`)
        }
    } else if ((month % 2 === 1 && month <= 8) || (month % 2 === 0 && month >= 8)) {
        if (month == 1) {
            if (day < 20) {
                alert("Capricorn");
            } else {
                alert("Aquarius");
            }
        } else if (month == 3) {
            if (day < 21) {
                alert("Pisces");
            } else {
                alert("Aries");
            }
        } else if (month == 5) {
            if (day < 21) {
                alert("Taurus");
            } else {
                alert("Gemini");
            }
        } else if (month == 7) {
            if (day < 23) {
                alert("Cancer");
            } else {
                alert("Leo");
            }
        } else if (month == 8) {
            if (day < 23) {
                alert("Leo");
            } else {
                alert("Virgo");
            }
        } else if (month == 10) {
            if (day < 23) {
                alert("Libra");
            } else {
                alert("Scorpio");
            }
        } else if (month == 12) {
            if (day < 22) {
                alert("Sagittarius");
            } else {
                alert("Capricorn");
            }
        } else {
            alert("Something went wrong. Please try again.");
        }
    } else if ((month % 2 === 0 && month < 7) || (month % 2 === 1 && month > 8)) {
        if (month == 4) {
            if (day < 20) {
                alert("Aries");
            } else {
                alert("Taurus");
            }
        } else if (month == 6) {
            if (day < 21) {
                alert("Gemini");
            } else {
                alert("Cancer");
            }
        } else if (month == 9) {
            if (day < 23) {
                alert("Virgo");
            } else {
                alert("Libra");
            }
        } else if (month == 11) {
            if (day < 22) {
                alert("Scorpio");
            } else {
                alert("Sagittarius");
            }
        } else {
            alert("Something went wrong. Please try again.");
        }
    } else {
        alert("Something went wrong. Please try again.");
    }
} else {
    alert("Error. Please enter the correct date of birth using numbers only.");
}

//Task 2

alert(`Welcome to the task 2! 
Enter as many numeric elements as you need and they will be sorted.`);

let userNumber = prompt(`Please enter the number: `);
const userInputs = [];

while (userNumber != "end") {
    if (isNaN(userNumber) || (userNumber == "")) {
        alert("Error. Only numbers are allowed.");
        userNumber = prompt(`Please enter the number: `);
    } else {
        userInputs.push(userNumber);
        userNumber = prompt(`Please enter another number:
        *When all numbers are entered, please enter the word 'end'.`);
    }
}

let toNumbers = [];
toNumbers = userInputs.map(Number);
toNumbers.sort();

alert("Your numbers are sorted: " + toNumbers);

//Task 3

alert(`Welcome to the task 3! 
Enter numeric elements and they will be filtered according certain properties.`);

let userElement = prompt(`Please enter the number: `);
const elementsInput = [];

while (userElement != "end") {
    if (isNaN(userElement) || (userElement == "")) {
        alert("Error. Only numbers are allowed.");
        userElement = prompt(`Please enter the number: `);
    } else {
        elementsInput.push(userElement);
        userElement = prompt(`Please enter another number: 
        *When all numbers are entered, please enter the word 'end'.`);
    }
}

let arrayToNumbers = [];
arrayToNumbers = elementsInput.map(Number);

//For filtering values

const negativeArray = arrayToNumbers.filter(negativeNumbers);
function negativeNumbers(negative) {
    return negative < 0;
}
alert("The negative element(s): " + negativeArray);

const oddArray = arrayToNumbers.filter(oddNumbers);
function oddNumbers(odd) {
    return odd % 2 !== 0;
}
alert("The odd element(s): " + oddArray);

alert("The number of odd elements: " + oddArray.length);

const isMultipleElements = arr =>
    arr.filter((item, index) => arr.indexOf(item) === index);
if (isMultipleElements(arrayToNumbers).length == arrayToNumbers.length) {
    alert("There are no multiple elements with the same value.");
} else {
    alert("There are multiple elements with the same value.");
}

function eachSecondElement(array) {
    let eachSecondArray = []
    for (let i = 1; i < array.length; i += 2) {
        eachSecondArray.push(array[i]);
    }
    return eachSecondArray.join(", ")
}
alert("The each second element: " + eachSecondElement(arrayToNumbers));

let sum = 0;
let arrayAverage = 0;
for (let i = 0; i < arrayToNumbers.length; i++) {
    arrayAverage = (sum += arrayToNumbers[i]) / arrayToNumbers.length;
}
alert("The average value of the array: " + arrayAverage);

const quantitySmallerThanAverage = arrayToNumbers.filter(smallerThan);
function smallerThan(smallerNumber) {
    return smallerNumber < arrayAverage;
}
alert("How many elements are smaller than average value: " + quantitySmallerThanAverage.length);