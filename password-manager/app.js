console.log('starting password manager...');

var storage = require('node-persist');
storage.initSync();

function createAccount(account) {
	var accounts = storage.getItemSync('accounts');
	if(typeof accounts === 'undefined') {
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync('accounts',accounts);
	return account;
}

function getAccount(accountName) {
	var accounts = storage.getItemSync('accounts');
	for(var i = 0; i < accounts.length;i++){
		if(accounts[i].name === accountName) {
			return accounts[i];
		}
	}
}

//createAccount({
//	name: 'Udemy',
//	username: 'glen',
//	password: 'password'
//});
var existingAccount = getAccount('Udemy');
console.log(existingAccount);

//createAccount({
//	name: 'Udacity',
//	username: 'glen7',
//	password: 'password123'
//});
var existingAccount = getAccount('Udacity');
console.log(existingAccount);