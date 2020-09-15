let license;
let licenseURL;

function generateMarkdown(data) {
  if (`${data.license}` === "Apache License 2.0") {
    console.log("apache-2.0"); 
    license = "Apache";
    licenseURL = "https://www.apache.org/licenses/LICENSE-2.0"
    console.log(license);
  }
  if (`${data.license}` === "MIT") {
    console.log("mit");
    license = "MIT";
    licenseURL = "https://choosealicense.com/licenses/mit/";
    console.log(license);
    
  }
  if (`${data.license}` === "GNU General Public License v3.0") {
    console.log("gpl-3.0");
    license = "GPL";
    licenseURL = "https://www.gnu.org/licenses/quick-guide-gplv3.pdf";
    console.log(license);
  }
  if (`${data.license}` === "ISC License") {
    console.log("isc");
    license = "ISC";
    licenseURL = "https://www.isc.org/licenses/"
    console.log(license);
  }
  let contributors = JSON.stringify(`${data.contributors}`);
  let nameList = JSON.parse(contributors.replace(/,/g, "  \\n"));
  return `

[![${data.license}](https://img.shields.io/badge/license-${license}-orange)](${licenseURL})  

# ${data.title}

## Table of Contents
[About This Application](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Tests](#tests)  
[Contributing](#contributing)  
[Contributors](#contributors)  
[License](#license)  
[Contact Info](#contact)

## [About This Application](#description)
${data.description}

## [Installation](#installation)

Install dependencies by typing the following from command line:
~~~
npm install
~~~

## [Usage](#usage)
User will need [Node JS](https://nodejs.org/en/) installed on their computer.  
To run application, type the following in command line:  
~~~
node index.js
~~~

## [Tests](#tests)
${data.test}

## [Contributing](#contributing)
${data.contributing}

## [Contributors](#contributors)
${nameList}

## [License](#license)
This project is licensed under the terms of ${data.license}.

### [Contact Info](#contact)  
Questions or Feedback? Direct your correspondence to:  

- Owner: ${data.name}  
- GitHub: [${data.username}](https://github.com/${data.username})  
- E-mail: ${data.email}

`;
}
module.exports = generateMarkdown;