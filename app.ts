#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to code with Jiya of Number Guessing Game");

const randomNumber =Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([{
    name:"userguessnumber",
    type:"number",
    message:" Enter your guess number(Between 1 to 5):",

 },
]);

 if(answer.userguessnumber===randomNumber){
    console.log("Congrations!You guess correct number.");
 }
 else{
    console.log("Sorrry! you guess wrong number");

 }