console.log('starting password manager...');

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('accounts', [{
//	username: 'Glen',
//	balance: 0
//}]); 

var accounts = storage.getItemSync('accounts');

//accounts.push({
//	username: 'Calix',
//	balance: 0
//});
//
//
//storage.setItemSync('accounts', accounts);




console.log(accounts);