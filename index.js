const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a short description explaining the what, why, and how of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples for the use of your project.',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'Please choose a license.',
            name: 'license',
            choices: ['MIT', 'GPLv3', 'Apache_2.0', 'Boost_1.0'],
        },
        {
            type: 'input',
            message: 'If other developers would like to contribute to your project, what are the contribution guidelines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please provide intructions on how to test your project.',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((response) => {
        console.log('response', response);
        const readme = getReadMe(response);
        fs.writeFile('README.md', readme, err => err ? console.log(err) : console.log('Your README.md has been created'))
    })

function getReadMe({ title, description, installation, usage, license, contribution, test, github, email }) {
    const readme =
        `# ${title} ![Badge](https://img.shields.io/badge/License-${license[0]}-brightgreen?style=for-the-badge&logo=appveyor)

## Description

    ${description}
    
## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    
## Installation
    
    ${installation}
    
## Usage
    
    ${usage}
    
    
## License
    
    This application is covered under ${license[0]} license.
    
## Contribution
    
    ${contribution}
    
## Tests
    
    ${test}
    
## Questions
    
    If there are any questions or concerns, please contact me at:
    GitHub: https://github.com/${github}
    Email: [${email}](mailto:${email})
    `;
    return readme;
}

