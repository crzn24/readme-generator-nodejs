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

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.




`;
}

module.exports = generateMarkdown;
