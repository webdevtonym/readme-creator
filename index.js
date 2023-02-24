const inquirer = require('inquirer');
const fs = require('fs');


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
        name: "Licence",
        message: "Please choose a licence for the project:",
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
.then((answers) => {
    const readme = `${answers.title}\n\n Read me for the project`;
    fs.writeFileSync('README.md', readme);
    console.log('README.md file generated!');
});