var accounts = [];

function createAccount(account) {
	accounts.push(account);	
	return account;
}

function getAccount(username) {
	var matchedAccount;
	for(var i = 0; i < accounts.length; i++) {
			if(accounts[i].username === username) {
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}

function deposit(account, amount) {
	if(typeof amount === 'number') {
		account.balance += amount;	
	} else {
		console.log('Deposit was not a number.');
	}
}

function withdraw(account, amount) {
	if(typeof amount === 'number') {
		account.balance -= amount;	
	} else {
		console.log('Withdraw was not a number.');
	}
}

function getBalanace(account) {
	return account.balance;
}

function createBalanceGetter(account) {
	return function() {
		return account.balance;
	}
}

var glensAccount = createAccount({
	username:'glen',
	balance: 10000
});

deposit(glensAccount, 100);
withdraw(glensAccount, 12.12);

deposit(glensAccount, 'test');
withdraw(glensAccount, 'test');

var glen2 = getAccount('glen');
var getGlen2Balance = createBalanceGetter(glen2);

console.log(getGlen2Balance());

//console.log(getBalanace(glensAccount));