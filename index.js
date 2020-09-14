const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
// const api = require("./api.js");
const { getUser } = require("./api.js");

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the name of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please provide a description of your project.",
  },
  {
    name: "license",
    type: "list",
    message: "Please choose a license governing the terms of your project",
    choices: ["Apache License 2.0", "MIT", "GNU GPLv3", "ISC License"],
    // https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#choosing-the-right-license

    // keywords: apache-2.0 , 	mit,	gpl-3.0, 	isc
  },
  {
    name: "contributing",
    type: "list",
    message: "Who is allowed to contribute to this project?",
    choices: [
      "Further Contributions are not permitted at this time.",
      "Users can submit a pull request for further review.",
    ],
  },
  {
    name: "contributors",
    type: "input",
    message:
      "Who contributed to this project? List their names(including yourself), separated by commas.",
  },
  {
    name: "name",
    type: "input",
    message: "What is your full name?",
  },
  {
    name: "username",
    type: "input",
    message: "Enter your GitHub username",
  },
  {
    name: "email",
    type: "input",
    message: "What is your e-mail?",
  },
];

function writeToFile(fileName, data) {
  // fs is file system; it writes or reads file to local computer; without it you can't write anything to your directory

  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log(`The file ${fileName} has been saved.`);
  });
}

let getAvatar = function init() {
  inquirer.prompt(questions).then((answers) => {
    console.table(answers);
    getUser();
    writeToFile("README.md", generateMarkdown(answers));
  });
};

getAvatar();

module.exports = getAvatar;
