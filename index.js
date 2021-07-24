// TODO: Include packages needed for this application
//Import inquirer and node modules
const { prompt } = require("inquirer");
const { writeFile } = require("fs");
const { promisify } = require("util");

// Import template.js
const generateMarkdown = require("./assets/generateMarkdown");

// Wrap fs.writeFile inside util.promisify
const writeFileAsync = promisify(writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    //Title of project
    type: "input",
    message: "What is your project title?",
    name: "Title",
    validate: function (Title) {
      if (Title) {
        return true;
      }

      return "A professional README has a project title.";
    },
  },
  {
    //Describe your project
    type: "input",
    message: "Describe your project",
    name: "Description",
    validate: function (Description) {
      if (Description) {
        return true;
      }

      return "A professional README provides a Description of the project.";
    },
  },
  {
    //What should be installed?
    type: "input",
    message: "What are the steps required to install your project?",
    name: "Installation",
    validate: function (install) {
      if (install) {
        return true;
      }

      return "A professional README provides steps on how to install the project.";
    },
  },
  {
    //Instructions for your project
    type: "input",
    message: "Provide instructions for using your project.",
    name: "Usage",
    validate: function (use) {
      if (use) {
        return true;
      }

      return "A professional README provides instructions on how to use the project.";
    },
  },
  {
    //select your License
    type: "list",
    message: "Please select a license for your project.",
    name: "License",
    choices: ["Apache", "GNU", "ISC", "MIT", "PERL", "SIL", "WTFPL", "None"],
  },

  {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributors",
    default:
      "Mike with the help of Herm, Elma, Joey during office hours and my awesome tutor Andrew.",
  },

  {
    //How to test your project
    type: "input",
    message: "How do you test your project?",
    name: "Test",
    default: "npm test",
  },
  {
    //What is your Github username?
    type: "input",
    message: "What is your Github username?",
    name: "Username",
    default: "Statikman619",
    validate: function (username) {
      if (username) {
        return true;
      }

      return "It is required to enter your github username.";
    },
  },
  {
    //What is your email?
    type: "input",
    message: "What is your email?",
    name: "Email",
    default: "martinez.michael02@gmail.com",
    validate: function (email) {
      let pass = email.match(/\S+@\S+\.\S+/g);
      if (pass) {
        return true;
      }

      return "Please enter a valid email.";
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  {
    prompt(questions).then((answers) => {
      const response = generateMarkdown(answers);
      console.log(answers);
      console.log(response);
      writeToFile("README.md", response);
    });
  }
}

// Function call to initialize app
init();
