//var name = undefined;
//
//if(typeof x === 'undefined') {
//	console.log('x is undefined');
//}

function greetUser(name) {
	if(typeof name === 'string') {
		console.log('Hello ' + name)	
	} else {
		console.log('Hello World!');
	}
}

greetUser('Glen');
greetUser();