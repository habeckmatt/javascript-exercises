function add (a, b) {
	return a + b;

	
}

function subtract (a, b) {
	return a - b;
	
}

function sum (arr) {
	let s = 0;
	for (var i=0; i < arr.length; i++) {
		s += arr[i];
	}
	return s;	
}

function multiply (arr) {
	let s = 1;
	for (var i=0; i < arr.length; i++) {
		s *= arr[i];
	}
	return s;
	
}

function power(a, b) {
	return Math.pow(a,b);
}

function factorial(n) {
	return n ? n * factorial(n - 1) :1;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}