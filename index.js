// TODO: Include packages needed for this application
// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },

  ]);
}

// Function call to initialize app
init();
