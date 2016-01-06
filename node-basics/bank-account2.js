var accounts = [];

var account = {
}

function createAccount(account) {
	accounts.push(account);	
	return account;
}

function getAccount(username) {
	var matchedAccount;
	accounts.forEach(function (account){
		if(username === account.username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

function deposit(account, amount) {
	account.balance += amount;
}

function withdraw(account, amount) {
	account.balance -= amount;
}

function getBalanace(account) {
	return account.balance;
}

var glensAccount = createAccount({
	username: 'Glen',
	balance: 0
});

deposit(glensAccount,100);
console.log(getBalanace(glensAccount));

withdraw(glensAccount,11);
console.log(getBalanace(glensAccount));

var existingAccount = getAccount('Glen');
console.log(existingAccount.username);

var calixsAccount = createAccount({
	username: 'Calix',
	balance: 100000
});

console.log(accounts);