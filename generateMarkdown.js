let license;

function generateMarkdown(data) {
  if (`${data.license}` === "Apache License 2.0") {
    console.log("apache-2.0"); 
    license = "Apache";
    console.log(license);
  }
  if (`${data.license}` === "MIT") {
    console.log("mit");
    license = "MIT";
    console.log(license);
    
  }
  if (`${data.license}` === "GNU General Public License v3.0") {
    console.log("gpl-3.0");
    license = "GPL";
    console.log(license);
  }
  if (`${data.license}` === "ISC License") {
    console.log("isc");
    license = "ISC";
    console.log(license);
  }
  let contributors = JSON.stringify(`${data.contributors}`);
  let nameList = JSON.parse(contributors.replace(/,/g, "  \\n"));
  return `

![${data.license}](https://img.shields.io/badge/license-${license}-orange)  

# ${data.title}

## Table of Contents
[About This Application]()  
[Installation]()  
[Usage]()  
[Contributing]()  
[Contributors]()  
[License]()  
[Contact Info]()

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

## Tests
${data.test}

## Contributing
${data.contributing}

## Contributors
${nameList}

## License
This project is licensed under the terms of ${data.license}.

### Contact Info  
Questions or Feedback? Direct your correspondence to:  
Owner: ${data.name}
GitHub: [${data.username}](https://github.com/${data.username})  
E-mail: ${data.email}

`;
}
module.exports = generateMarkdown;