//bring in inquirer and fs
const inquirer = require('inquirer');

//prompt the user for questions 
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'location',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is you Bio?',
            name: 'confirm',
        }, 
            type: 'input',
            message: 'What is your LI?',
            name: 'url',
        }, 
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'url',
        },
        
        
    ])
    .then((response) =>
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    );



//verify the supplied answers are in an object from inquirer

//take the responses and dynamically create an index.html file w/ the fs mdoule 

//take the responses and call a function that returns a template string with the dynamic data

//in a template string is what i am going to provide as data to the second argument of fs.write file

//pull all of the html in a temoplate string

// const fileData = `<h1>${}</h1?`