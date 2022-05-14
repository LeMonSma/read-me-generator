// const { writeToFile } = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs')




// prompt user for input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your Project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('please enter an answer');
                return false
            }

        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your Project!',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('please enter an answer')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation instructions.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('please enter an answer');
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'please enter contributing guidelines.',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('please enter an answer');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'please enter testing instructions.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('please enter an answer');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your git hub url? (REQUIRED)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('please enter an answer');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email? (REQUIRED)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('please enter an answer');
                return false
            }
        }
    }
]
    ;

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    const generateRead = require('./utils/generateMarkdown')
    const readMe = generateRead(data)
    fs.writeFile(fileName, readMe, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Read me Created!')
    })
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(data => {
            writeFile('myREADME.md', data)
        })
}

// Function call to initialize app
init();