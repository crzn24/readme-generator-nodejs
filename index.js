// Packages needed for this application
// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    "What is the name of your project?",
    "Enter your project description:",
    "Enter your Installation Instructions:",
    "Enter your Usage Information:",
    "Enter your Contribution Guidelines:",
    "Enter your Testing Instructions:",
    "Which license would you like to use?",
    "What is your GitHub username?",
    "What is your email address?",
    "What do you want to name your README file?"

    ////////// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions: GitHub & email
    
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Here is your README!"));
}

// Function to initialize app
function init() {
  inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: questions[0],
    },
    {
        type: "input",
        name: "description",
        message: questions[1],
    },
    {
        type: "input",
        name: "installation",
        message: questions[2],
    },
    {
        type: "input",
        name: "usage",
        message: questions[3],
    },
    {
        type: "input",
        name: "contribution",
        message: questions[4],
    },
    {
        type: "input",
        name: "tests",
        message: questions[5],
    },
    {
        type: "list",
        name: "license",
        message: questions[6],
        choices: ["MIT", "Apache 2.0", "GNU General Public License v3.0", "ISC License", "BSD-2", "BSD-3", "None"],
    },
    {
        type: "input",
        name: "username",
        message: questions[7],
    },
    {
        type: "input",
        name: "email",
        message: questions[8],
    },
    {
        type: "input",
        name: "filename",
        message: questions[9],
    },

  ])
  .then((answers) => {
    const template = (generateMarkdown(answers));
    const filename = `${answers.filename}.md`
    writeToFile(filename, template);
  });
}

// Function call to initialize app
init();
