//function greetMaker(name) {
//	function greet() {
//		console.log('Hello ' + name);
//	}
//	return greet;
//}
//
//var greetGlen = greetMaker('Glen');
//greetGlen();
//
//var greetCalix = greetMaker('Calix');
//greetCalix();

function createAdder(baseNumber) {
	return function (numberToAdd) {
		return baseNumber + numberToAdd;
	}
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));