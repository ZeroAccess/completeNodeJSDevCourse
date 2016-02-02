//var person = {
//    name: 'Glen',
//    age: 21
//};
//
//function updatePerson(obj) {
//    //obj = {
//    //    name: 'Glen',
//    //    age: 32
//    //};
//    obj.age = 32;
//}
//
//updatePerson(person);
//console.log(person);

var grades = [100,90];

function addGrade(gradesObj,grade) {
    gradesObj.push(grade);
    console.log(gradesObj);
}

function updateGrades(gradeObj) {
    gradeObj = [12,33,99];
    console.log(grades);
    console.log(gradeObj);
}

addGrade(grades,80);
updateGrades(grades);