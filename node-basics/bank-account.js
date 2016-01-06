var account = {
	balance: 0
};

//My attempt
//function deposit(account, amount){
//	account.balance += amount;
//	getBalance(account);
//}
//
//function withdraw(account, amount){
//	account.balance -= amount;
//	getBalance(account);
//}
//
//function getBalance(account) {
//	console.log('You now have ' + account.balance + ' in your account.');
//}
//
//deposit(account, 100);
//withdraw(account, 50);


//Instructors solution
function deposit(account, amount) {
	account.balance += amount;
}

function withdraw(account, amount) {
	account.balance -= amount;
}

function getBalanace(account) {
	return account.balance;
}

deposit(account, 1000);
console.log(getBalanace(account));

withdraw(account, 121);
console.log(getBalanace(account));