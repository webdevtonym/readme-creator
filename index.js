const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: "",
        name:
    }
])
.then((answers) => {
    const readme = `${answers.title}\n\n Read me for the project`;
    fs.writeFileSync('README.md', readme);
    console.log('README.md file generated!');
});