//bring in inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

//prompt the user for questions 
const generateHTML = ({ name, location, github, linkedin}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
        }, 
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        }, 
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LI URL?',
        },
        
        
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
        
        fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
        



//verify the supplied answers are in an object from inquirer

//take the responses and dynamically create an index.html file w/ the fs mdoule 

//take the responses and call a function that returns a template string with the dynamic data

//in a template string is what i am going to provide as data to the second argument of fs.write file

//pull all of the html in a temoplate string

// const fileData = `<h1>${}</h1?`