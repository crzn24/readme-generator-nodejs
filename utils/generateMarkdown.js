// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Choices are: "MIT", "Apache 2.0", "GNU General Public License v3.0", "ISC License", "BSD-2", "BSD-3", "None"
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![${license}](https://img.shields.io/badge/License-MIT-brightgreen)`
  }
  if (license === "Apache 2.0") {
    return `![${license}](https://img.shields.io/badge/License-Apache_2.0-brightgreen)`
  }
  if (license === "GNU General Public License v3.0") {
    return `![${license}](https://img.shields.io/badge/License-GPLv3-brightgreen)`
  }
  if (license === "ISC License") {
    return `![${license}](https://img.shields.io/badge/License-ISC-brightgreen)`
  }
  if (license === "BSD-2") {
    return `![${license}](https://img.shields.io/badge/License-BSD_2--Clause-brightgreen)`
  }
  if (license === "BSD-3") {
    return `![${license}](https://img.shields.io/badge/License-BSD_3--Clause-brightgreen)`
  }
  
  if (license === "None") {
    return ``;
  }
  else {
    return ``;
  }

}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === "GNU General Public License v3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === "ISC License") {
    return `https://opensource.org/licenses/ISC`
  }
  if (license === "BSD-2") {
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
  if (license === "BSD-3") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }

  if (license === "None") {
    return ``;
  }
  else {
    return ``;
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ## Usage

  ## Credits

  ## License


  ---
  ## Features

  ## How to Contribute

  ## Tests


`;
}

module.exports = generateMarkdown;
