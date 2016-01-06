var person = {
	name: 'Glen',
	age: 32
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);


console.log('Challenge Area');

var animal = '{"name": "Tundra"}';

var animalObject = JSON.parse(animal);

//add age and convert back to JSON and print to screen
animalObject.age = 7;
animal = JSON.stringify(animalObject);
console.log(animal);