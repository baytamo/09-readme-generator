let license;
let licenseURL;

function generateMarkdown(data) {
  if (`${data.license}` === "Apache License 2.0") {
    license = "Apache";
    licenseURL = "https://www.apache.org/licenses/LICENSE-2.0"
  }
  if (`${data.license}` === "MIT") {
    license = "MIT";
    licenseURL = "https://choosealicense.com/licenses/mit/";    
  }
  if (`${data.license}` === "GNU General Public License v3.0") {
    license = "GPL";
    licenseURL = "https://www.gnu.org/licenses/quick-guide-gplv3.pdf";
  }
  if (`${data.license}` === "ISC License") {
    license = "ISC";
    licenseURL = "https://www.isc.org/licenses/"
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

${data.installation}  
~~~
${data.installCode}
~~~

## [Usage](#usage)
${data.usage}  
~~~
${data.usageCode}
~~~

## [Tests](#tests)
${data.test}  
~~~
${data.testCode}
~~~

## [Contributing](#contributing)
${data.contributing}

## [Contributors](#contributors)
${nameList}

## [License](#license)
This project is licensed under the terms of [${data.license}](${licenseURL}).

## [Contact Info](#contact)  
Questions or Feedback? Direct your correspondence to:  

- Owner: ${data.name}  
- GitHub: [${data.username}](https://github.com/${data.username})  
- E-mail: ${data.email}

`;
}
module.exports = generateMarkdown;