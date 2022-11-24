// TODO: Include packages needed for this application
// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your Installation Instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your Usage Information:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your Contribution Guidelines:",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT", "Apache 2.0", "GNU General Public License v3.0", "ISC License", "BSD-2", "BSD-3", "None"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

    ////////// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // Description, Installation, Usage, Contributing, and Tests. 
    // License.  
    // questions section: github username, email address, 
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Here is your README!"));
}

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
