// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
 const promptUser = () => {
     return inquirer.prompt([
         {
             type: 'input',
             name: 'projectTitle',
             message: 'What is the name of the project?',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('Please enter a project name!');
                     return false;
                    }
                }
         },
         {
             type: 'input',
             name: 'projectDescription',
             message: 'Please describe the project?'
         
         },
         {
             type: 'input',
             name: 'tableOfContents',
             message: 'What is the projects table of content?'
         },
         {
             type: 'input',
             name: 'installation',
             message: 'What is the installation process?'
         },
         {
             type: 'input',
             name: 'usage',
             message: 'What is this project used for?'
         },
         {
             type: 'list',
             name: 'license',
             message: 'Please choose your licenses',
             choices: [
                 'Apache',
                 'ISC',
                 'MIT',
                 'IBM'
             ]
         },
         {
             type: 'input',
             name: 'contributing',
             message: 'Who all contributed to the project?'
         },
         {
             type: 'input',
             name: 'tests',
             message:'What tests instructions?'
         },
         {
             type: 'input',
             name: 'questions',
             message: 'Any questions?'
         },
         {
             type: 'input',
             name: 'githubName',
             message: 'What is your GitHub user name?'
         },
         {
             type: 'input',
             name: 'email',
             message: 'What is your email address?'
         }
    ]);
 };

 const questions = [];
 
 // TODO: Create a function to write README file
 const writeToFile = data => {
     
     fs.writeFile('README.md', data, err => {
         if (err) throw err;
         console.log("Readme has been created")
        })
    }
    
    
    // TODO: Create a function to initialize app
    function init() {
        promptUser()
        .then(answers =>
        {
            return generatePage(answers)
        })
        .then(data =>
        {
            return writeToFile(data)
        })
        .then(answers => console.log(answers)) 
    }
    
    // Function call to initialize app
    init();
    
       

