function countDownFor(startingPoint, stoppingPoint) {
	for(; startingPoint > stoppingPoint;startingPoint--) {
		console.log(startingPoint);
	}
		
	while(startingPoint>stoppingPoint) {
		console.log(startingPoint);
		startingPoint--;
	}
}
countDownFor(10,0);

function countDownWhile(startingPoint, stoppingPoint) {
	while(startingPoint>stoppingPoint) {
		console.log(startingPoint);
		startingPoint--;
	}
}
countDownWhile(20,0);