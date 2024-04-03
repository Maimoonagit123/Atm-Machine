#! /usr/bin/env node

import inquirer from "inquirer";

let Welcome = "Welcome to an ATM Machine";
console.log(Welcome);

let myBalance = 15000;
let myPin = 122333;

let question = await inquirer.prompt([
  { message: "Enter your pin code", type: "number", name: "pincode" },
]);

if (question.pincode === myPin) {
    console.log("Congragulations!!! Correct Pin Code");
  let answer = await inquirer.prompt([
    {
      name: "operations",
      type: "list",
      message: "Select one operations from this list",
      choices: ["Fast Cash", "Check Balance", "Cash Withdrawal", "Pin Change"],
    },
  ]);

  if (answer.operations === "Check Balance") {
    console.log(`"Your Balance is: ${15000}"`);
  } else if (answer.operations === "Fast Cash") {
    let fastcash = await inquirer.prompt([
      {
        name: "Cashfast",
        type: "list",
        message: "Choose amount for withdrawal",
        choices: [500, 1000, 1500, 2000, 2500, 5000, 10000]
      }
    ]);
    let balance=myBalance-=fastcash.Cashfast;
console.log(`"your remaining amount is" ${balance}`);
  } else if (answer.operations === "Cash Withdrawal") {
    let answer = await inquirer.prompt([
      { name: "Amount", type: "number", message: "Enter Amount for Withdraw" },
    ]);
    let money = myBalance;
    if (answer.Amount <= myBalance) {
      console.log(
        `"your Remaining balance is" ${(myBalance -= answer.Amount)}`
      );
    } else if (answer.Amount > myBalance) {
      console.log(`"unable to process transaction! your total balance is" ${myBalance}`
      );
    }
  }
}else {
  console.log("Incorrect Pin code");
}
