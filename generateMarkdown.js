function generateMarkdown(data) {
  let contributors = JSON.stringify(
    `${data.contributors}`);
  let nameList = JSON.parse(contributors.replace(/,/g, "  \\n"));
  console.log(`${nameList}`);
  return `

## License
${data.license}

## ${data.title}

## About This App
${data.description}

## Installation Instructions

Install dependencies by typing npm install from command line.

## Usage

To run application, type the following: 
node index.js

## Contributors
${nameList}

### Questions or Feedback? Direct your correspondence to:
Name: ${data.name}  
GitHub: ${data.username}  
E-mail: ${data.email}


`;
}
module.exports = generateMarkdown;