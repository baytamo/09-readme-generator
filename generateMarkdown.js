const api = require("./api.js");
const { getAvatar } = require("./index.js");

function generateMarkdown(data) {
  let contributors = JSON.stringify(`${data.contributors}`);
  let nameList = JSON.parse(contributors.replace(/,/g, "  \\n"));
  return `


![${data.license}]()

# ${data.title}

## Table of Contents
About This Application  
Installation  
Usage  
Contributing  
Contributors  
License  
Contact Info

## About This Application
${data.description}

## Installation

Install dependencies by typing the following from command line:
~~~
npm install
~~~

## Usage
User will need [Node JS](https://nodejs.org/en/) installed on their computer.  
To run application, type the following in command line:  
~~~
node index.js
~~~

## Contributing
${data.contributing}

## Contributors
${nameList}

## License
This project is licensed under the terms of ${data.license}.

### Questions or Feedback? Direct your correspondence to:
 
Owner: ${data.name}  
GitHub: ${data.username}  
E-mail: ${data.email}

`;
}
module.exports = generateMarkdown;
