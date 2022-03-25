var arr = document.getElementsByTagName("select");
var x;
function comp(x) {
	for (var i = 0; i < arr.length; i++) {
		if (x == i) {
			continue;
		} else if (arr[x].value == arr[i].value) {
			arr[i].value = "default";
		}
	}
}

var result = document.getElementById("result");

function test() {
	if (
		arr[0].value == "Kazakhstan" &&
		arr[1].value == "Uzbekistan" &&
		arr[2].value == "Kyrgyzstan" &&
		arr[3].value == "Turkmenistan" &&
		arr[4].value == "Tajikistan" &&
		arr[5].value == "Afghanistan" &&
		arr[6].value == "Pakistan"
	) {
		result.innerHTML = "correct";
		result.style.color = "green";
	} else {
		result.innerHTML = "incorrect";
		result.style.color = "red";
	}
}
