var grades = [100, 50, 70];

grades.push(80,70,50,50);
//grades.unshift(79);
//console.log(grades);
//
//var grade = grades.pop();
//console.log(grade);

//grades.push(97);
//
//console.log(grades[0]);
//
//grades.forEach(function(grade) {
//	//console.log(grade);
//});
//
//console.log(grades.length);


//totalGrade = 0

var totalGrade = 0;

grades.forEach(function(grade){
	totalGrade += grade;
});

console.log(totalGrade / grades.length);