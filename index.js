#!/usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let myPin = 2580;
let pinAnswer = await inquirer.prompt({
    type: "password",
    name: "pin",
    message: "Enter your pin",
});
//check pin
if (pinAnswer.pin == myPin) {
    console.log(pinAnswer.pin);
    console.log("select the operation you want to perform");
    let operation = await inquirer.prompt({
        type: "list",
        name: "operation",
        message: "Enter your operation",
        choices: ["Withdraw", "Balance", "Deposit", "Exit"],
    });
    if (operation.operation == "Withdraw") {
        let amountWithdraw = await inquirer.prompt({
            type: "number",
            name: "amount",
            message: "Enter the amount you want to withdraw",
        });
        //withdraw function here
        if (mybalance < amountWithdraw.amount) {
            console.log("insuffucient balance");
        }
        else {
            mybalance = mybalance - amountWithdraw.amount;
            console.log("transaction_successfull");
            console.log("amount remaining");
            console.log(mybalance);
        }
    }
    //deposit money
    else if (operation.operation == "Deposit") {
        console.log("enter the amount to deposit");
        let amountDeposit = await inquirer.prompt({
            type: "number",
            name: "amountDeposited",
            message: "Enter the amount to deposit",
        });
        mybalance = mybalance + amountDeposit.amountDeposited;
        console.log("balance after deposit : ");
        console.log(mybalance);
    }
    //to check the available balance
    else if (operation.operation == "Balance") {
        console.log(mybalance);
    }
    //to exit the process
    else if (operation.operation == "Exit") {
        console.log("thankyou for using our bank");
        process.exit();
    }
}
//if pin is wrong
else {
    console.log("wrong pin");
}
