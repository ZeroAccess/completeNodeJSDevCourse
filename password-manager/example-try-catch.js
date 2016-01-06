function doWork() {
	throw new Error('unable to do work');
}

try {
	doWork();
} catch (e) {
	console.log(e.message);
} finally {
	console.log('this runs after the try or the catch');
}

console.log('try catch ended');