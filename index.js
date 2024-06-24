#! /usr/bin/env node
console.log("\t Welcome to Bilal's Simple Calculator \n");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { messgae: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select One of operator to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
    },
]);
// COndition testing based on OP
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator == "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Sorry! You enter a invalid operator");
}
