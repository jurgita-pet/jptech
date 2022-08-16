function filterColor() {
    let filteredItem = document.getElementById("colors");
    document.getElementById("filteredColor").innerHTML = filteredItem.options[filteredItem.selectedIndex].text;
    let colorList = document.getElementsByClassName('color');
    for (let i = 0; i < colorList.length; i++) {
        colorList[i].style.visibility = 'hidden';
    }
}

function filterFlower() {
    let filteredItem = document.getElementById("flowers");
    document.getElementById("filteredFlower").innerHTML = filteredItem.options[filteredItem.selectedIndex].text;
    let flowerList = document.getElementsByClassName('flower');
    for (let i = 0; i < flowerList.length; i++) {
        flowerList[i].style.visibility = 'hidden';
    }
}

function addNewElement() {
    let table = document.getElementById("table");
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let addNewColor = document.getElementById("newColor").value;
    let addNewFlower = document.getElementById("newFlower").value;
    cell1.innerHTML = addNewColor;
    cell2.innerHTML = addNewFlower;
    clearInputs();
}

function clearInputs() {
    const input = document.getElementsByTagName("input");
    for (let i = 0; i<input.length; i++) {
        input[i].value = "";
    }
}