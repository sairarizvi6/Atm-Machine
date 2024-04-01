#! /usr/bin/env node 
import inquirer from "inquirer";
// initialize user balance and pin code
let myBalance = 15000;
let myPin = 2589;
//Print welcome message
console.log("welcome to use my Atm Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct , Login Successfully");
    console.log(`Current Account Balance is $"{myBalance}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw  Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Account Balance is:${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
