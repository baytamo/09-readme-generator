// At least one badge
// x Project title
// x Description
// Table of Contents
// x Installation
// x Usage
// License
// x Contributing
// Tests
// Questions
//   * User GitHub profile picture
//   * User GitHub email

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
// const api = require("./api.js");

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?',
        
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project.'
       
    },
    {
        name: 'license',
        type: 'rawlist',
        message: 'Please choose a license governing the terms of your project',
        choices: ['a', 'b', 'c'],
        // https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#choosing-the-right-license
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Who contributed to this project? List their names, separated by commas.'
    },

];

function writeToFile(fileName, data) {

    // fs is file system; it writes or reads file to local computer; without it you can't write anything to your directory

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(`The file ${fileName} has been saved.`);
      })
    // LICENSE: This project is licensed under the terms of (license name)

}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
       // Do something with the answers
       // Write generated MD file to disk
       console.table(answers);
       console.log(answers.title);
        writeToFile('README.md', generateMarkdown(answers));
     });
}

init();
