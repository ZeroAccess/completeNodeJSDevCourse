//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intruiging Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];


function lookUp(firstName, prop) {
    i = 0;
    while (i < contacts.length) {
        if (firstName !== contacts[i].firstName) {
            console.log('1');
            return 'No such contact';
        } else if (firstName === contacts[i].firstName && contacts[i].hasOwnProperty(prop) === false) {
            console.log('2');
            return 'No such property';
        } else {
            console.log('3');
            return contacts[i].prop;
        }
        i++;
    }
}
lookUp("Akira", "likes");