const readline = require('readline');

const a = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

a.question('Enter number between 1 to 7: ', (input) => {
    let num = parseInt(input);

    switch (true) {
        case (num ==1):
            console.log("Monday");
            break;
        case (num ==2):
            console.log("Tuesday");
            break;
        case (num==3):
            console.log("Wednesday");
            break;
        case (num==4):
            console.log("Thurday");
            break;
        case (num==5):
            console.log("Friday");
            break;
        case (num==6):
            console.log("Saturday");
            break;
        case (num==7):
            console.log("Sunday");
            break;
        default:
            console.log("Please enter number between 1 to 7");
    }

    a.close(); 
});