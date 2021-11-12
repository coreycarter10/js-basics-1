const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Welcome to the Password Validator! What is the password you would like to validate? ", function(input) {
    tokens = input.split(' ');

    if (input.length >= 10) {
        console.log('This is a strong password!');
    } else {
        console.log('This is a weak password!');
    }

    reader.close();
});