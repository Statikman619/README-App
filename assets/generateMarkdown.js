// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
* [Title](#Title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Test](#test)
* [Username](#username)
* [Email](#license)
## Description
${data.Description}
## Installation 
${data.Installation}
## Usage 
${data.Usage}
## License
${data.License}
## Contributors
${data.Contributors}
## Test
${data.Test}
## Questions
Contact me:
Github:[${data.Username}](https://github.com/Statikman619)
Email:[${data.Email}](https://github.com/Statikman619)


`;
}

module.exports = generateMarkdown;
