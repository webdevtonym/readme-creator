//Code to import inquirer and file system packages
const inquirer = require('inquirer');
const fs = require('fs');

//prompt method combined with inquirer with objects for each
//piece of data to capture
inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?'
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide a description of the project?"
    },
    {
        type: "input",
        name: "Installation",
        message: "Please provide installation instructions:"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide usage information for the project:"

    },
    {
        type: "list",
        name: "License",
        message: "Please choose a license for the project:",
        choices: ['MIT', 'GPL', 'cc', 'ms-pl']
    },
    {
        type: 'input',
        name: "Contributing",
        message: "Please provide contribution guidelines for the project:"
    },
    {
        type: "input",
        name: "Tests",
        message: "Please provide test instructions for the project:"
    },
    {
        type: "input",
        name: "Github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

])
//.then and expression function to build structure of readme file
//using captured data
.then((answers) => {
    const readme =
      `# ${answers.Title}\n\n Read me for the project\n\n` +
      `## Description\n\n${answers.Description}\n\n` +
      `## Table of Contents\n\n` +
      `- [Installation](#installation)\n` +
      `- [Usage](#usage)\n` +
      `- [License](#license)\n` +
      `- [Contributing](#contributing)\n` +
      `- [Tests](#tests)\n` +
      `- [Questions](#questions)\n\n` +
      `## Installation\n\n${answers.Installation}\n\n` +
      `## Usage\n\n${answers.Usage}\n\n` +
      `## License\n\nThis project is licensed with the ${answers.License} license.\n\n` +
      `## Contributing\n\n${answers.Contributing}\n\n` +
      `## Tests\n\n ${answers.Tests}\n\n` +
      `## Questions\n\n If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}). You can find information about my other projects at [http://github.com/${answers.Github}](https://github.com/${answers.Github}).`;
    

    fs.writeFileSync('README.md', readme);
    console.log('README.md file generated!');
});