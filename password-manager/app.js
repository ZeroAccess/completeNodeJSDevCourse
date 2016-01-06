console.log('starting password manager...');
var crypto = require('crypto-js');
var secretKey = '123abc';
var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Creates account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				description: 'Enter name of account',
				type: 'string'
			},
			username: {
				demand:true,
				description: 'Enter username',
				type: 'string'
			},
			password: {
				demand:true,
				description: 'Enter password',
				type: 'string'
			},
			masterPassword: {
			demand: true,
			description: 'Enter Master Password',
			type: 'string'
		}
		}).help('help');
	})
	.command('get', 'Retrieves account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				description: 'Enter name of account',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				description: 'Enter Master Password',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0];
switch(command) {
	case 'create':
		if(argv.name.length > 0 && argv.username.length > 0 && argv.password.length > 0) {
		createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password,
		}, argv.masterPassword);		
	} else {
		console.log('Please make sure to type all 3 variables');
	}
		break;
	case 'get':
	var foundAccount = getAccount(argv.name,argv.masterPassword);	
	if(foundAccount !== undefined) {
		console.log('Account: ' + foundAccount.name + ' Username: ' + foundAccount.username + ' Password: ' + foundAccount.password);
	} else {
		console.log('Sorry that account doesn\'t exist');
	}
		break;
	default:
		console.log('Please enter a correct arguement');
}

function getAccounts(masterPassword) {
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];
	if(typeof encryptedAccount !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
  	return JSON.parse(bytes.toString(crypto.enc.Utf8));	
	}
	return accounts;
}

function saveAccounts(accounts, masterPassword) {
  var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	storage.setItemSync('accounts', encryptedAccounts.toString());
	return accounts;
}

function createAccount(account, masterPassword) {
	var accounts = getAccounts(masterPassword);
	accounts.push(account);
	saveAccounts(accounts, masterPassword);
	return account;
}

function getAccount(accountName, masterPassword) {
	var accounts = getAccounts(masterPassword);
	for(var i = 0; i < accounts.length;i++){
		if(accounts[i].name === accountName) {
			return accounts[i];
		}
	}		
}