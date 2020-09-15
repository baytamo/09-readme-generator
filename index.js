const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
let username;

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
    choices: [
      "Apache License 2.0",
      "MIT",
      "GNU General Public License v3.0",
      "ISC License",
    ],
  },
  {
    name: "test",
    type: "input",
    message: "How can this app be tested?",
  },
  {
    name: "contributing",
    type: "list",
    message: "Who is allowed to contribute to this project?",
    choices: [
      "Users can submit a pull request for further review.",
      "Further contributions are not permitted at this time.",
    ],
  },
  {
    name: "contributors",
    type: "input",
    message:
      "Who contributed to this project? List their names (including yourself), separated by commas.",
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

function init() {
  inquirer.prompt(questions).then((answers) => {
    username = answers.username;
    writeToFile("README.md", generateMarkdown(answers));
    getUser();
  });
}

async function getUser() {
  console.log(username);
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    let avatar = data.map((data) => data.owner.avatar_url)[0];
    console.log(avatar);
    let bioImage = `![GitHub bio image](${avatar})`;

    fs.appendFile("README.md", bioImage, (err) => {
      if (err) throw err;
      console.log("bio image added to readme file");
    });
  } catch (e) {
    console.log(e);
  }
}

init();

module.exports = init;