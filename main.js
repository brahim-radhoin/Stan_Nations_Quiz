var arr = document.getElementsByTagName("select");
var result = document.getElementById("result");
var x;
var i;

function comp(x) {
	for (i = 0; i < arr.length; i++) {
		if (x == i) {
			continue;
		} else if (arr[x].value == arr[i].value) {
			arr[i].value = "default";
		}
	}
}

var correctArr = [
	"Kazakhstan",
	"Uzbekistan",
	"Kyrgyzstan",
	"Turkmenistan",
	"Tajikistan",
	"Afghanistan",
	"Pakistan",
];

function test() {
	var tester = true;
	for (i = 0; i < arr.length; i++) {
		if (arr[i].value != correctArr[i]) {
			tester = false;
		}
	}
	if (tester == true) {
		result.innerText = "correct";
		result.style.color = "green";
	} else {
		result.innerText = "incorrect";
		result.style.color = "red";
	}
	colorCode();
}

function colorCode() {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].value == correctArr[i]) {
			arr[i].style.borderColor = "green";
		} else {
			arr[i].style.borderColor = "red";
		}
	}
}

function resetenater() {
	for (var i = 0; i < arr.length; i++) {
		arr[i].value = "default";
		arr[i].style.borderColor = "";
	}
	result.innerText = "";
}
