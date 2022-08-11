function operation(action) {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    let result = 0;
    if (action === "addition") {
        result = value1 + value2;
    } else if (action === "substraction") {
        result = value1 - value2;
    } else if (action === "multiplication") {
        result = value1 * value2;
    } else if (action === "division") {
        result = value1 / value2;
    } else {
        alert("Error.");
    }
    document.getElementById('calculationResult').innerText = result;
}