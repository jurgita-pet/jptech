function addValue(number) {
	let value = $("#answerLine").val();
	if (value == "0") {
		$("#answerLine").val("");
	}
	if (value == "Cannot devide by 0" || value == "Invalid input" || value == "ERROR") {
		$("#answerLine").val("");
	}
	$("#answerLine").val($("#answerLine").val() + number);
}

function plusMinus() {
	let value = $("#answerLine").val();
	let result = value * -1;
	$("#answerLine").val(result);
}

function fraction() {
	let value = $("#answerLine").val();
	let result = 1 / value;
	if (value === "0") {
		$("#answerLine").val("Cannot devide by 0");
	} else if (isNaN(value)) {
		$("#answerLine").val("ERROR");
	} else {
		$("#answerLine").val(result);
	}
}

function square() {
	let value = $("#answerLine").val();
	let result = value * value;
	if (isNaN(value)) {
		$("#answerLine").val("ERROR");
	} else {
		$("#answerLine").val(result);
	}
}

function root() {
	let value = $("#answerLine").val();
	let result = Math.sqrt(value);
	if (value < "0") {
		$("#answerLine").val("Invalid input");
	} else if (isNaN(value)) {
		$("#answerLine").val("ERROR");
	} else {
		$("#answerLine").val(result);
	}
}

function result() {
	let value = $("#answerLine").val();
	let length = value.length;
	let operation = value[length - 1];
	if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {
		let newValue = parseFloat(value);
		if (operation == '+') {
			$("#answerLine").val(newValue + newValue);
		} else if (operation == '-') {
			$("#answerLine").val(newValue - newValue);
		} else if (operation == '*') {
			$("#answerLine").val(newValue * newValue);
		} else if (operation == '/') {
			$("#answerLine").val(newValue / newValue);
		} else {
			$("#answerLine").val("ERROR");
		}
	} else {
		$("#answerLine").val(eval(value));
	}
}

function clearInput() {
	$("#answerLine").val(0);
}

function deleteNumber() {
	let value = $("#answerLine").val();
	$("#answerLine").val(value.slice(0, -1));
}