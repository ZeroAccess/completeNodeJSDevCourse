var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len:[1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync({
    //force:true
}).then(function () {
    console.log('Everything is synced');
 //fetch a ToDo item by ID if I find it print it to screen with toJSON if not found print to screen Not found

        Todo.findById(2).then(function(todo) {
            if(todo) {
                console.log(todo.toJSON());
            } else {
                console.log('Todo not found');
            }
        });
});