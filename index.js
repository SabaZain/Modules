// Import
import squareOfNumber from "./main.js";
const number = 7;
const square = squareOfNumber(number);
console.log(`The Square of ${number} is ${square}.`);
import { add } from "./main.js";
console.log("Addition of two numbers:", add(6, 5));
import { myFirstName, myLuckyNumber, myFavColor } from "./main.js";
console.log("My First Name:", myFirstName);
console.log("My Lucky Number:", myLuckyNumber);
console.log("My Favourite Color:", myFavColor);
import { groupOfFriends as bestFriends } from "./main.js";
console.log("Best Friends:", bestFriends);
import { evenNumbers } from "./main.js";
console.log("Even Numbers:", evenNumbers);
import { employeeDetails } from "./main.js";
console.log("Details Of Employee:", employeeDetails);
import inquirer from "inquirer";
import chalk from "chalk";
let response = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: chalk.yellow.bold("Enter Your Name:")
    }
]);
let answer = await inquirer.prompt([
    {
        name: "Qualification",
        type: "list",
        message: chalk.magenta.bold("Select your Qualification"),
        choices: ["HR", "MBA", "MCS", "MA", "MEng", "MPA"]
    }
]);
