//var isValid = true;
//
//if(isValid){
//	console.log('Data is valid.');
//} else {
//	console.log('Data isn\'t valid.');
//}

function toggleBoolean(booleanVar) {
	if(typeof booleanVar === 'boolean') {
		printBoolean(!booleanVar);
	} else {
		console.log('You did not input a boolean value.')
	}
}

function printBoolean(booleanVar) {
	console.log('Your boolean value is ' + booleanVar);
}

toggleBoolean(true);
toggleBoolean(false);
toggleBoolean('a');
toggleBoolean(1);
toggleBoolean(true);
//toggle only a boolean