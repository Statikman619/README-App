// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![Apache License 2.0](https://img.shields.io/badge/License-Apache_License_2.0-blue.svg)";
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "PERL") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license === "SIL") {
    return "[[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
  } else if (license === "WTFPL") {
    return "[[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "* [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of Contents
* [Title](#Title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.License)}
${renderLicenseBadge(data.License)}


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
