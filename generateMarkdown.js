function generateMarkdown(data) {
  return `

## License
${data.license}

# ${data.title}

${data.description}

## Installation

Install dependencies by typing npm install from command line.

## Usage

To run application, type the following: 
node index.js

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


`;
}

module.exports = generateMarkdown;