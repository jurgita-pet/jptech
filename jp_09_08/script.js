function addition() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    let result = value1 + value2;
    document.getElementById('calculationResult').innerText = result;
}

function substraction() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    let result = value1 - value2;
    document.getElementById('calculationResult').innerText = result;
}

function multiplication() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    let result = value1 * value2;
    document.getElementById('calculationResult').innerText = result;
}

function division() {
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    let result = value1 / value2;
    document.getElementById('calculationResult').innerText = result;
}