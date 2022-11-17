const inquirer = require("inquirer")
const fs = require("fs")
const { default: inquirer } = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "username",
        },
        {
            type: "checkbox",
            message: "what languages do you know?",
            choices: ["js", "java", "python", "c#"],
            name: "username",
        },
        {
            type: "list",
            message: "what do you like for communication",
            choices: ["email", "text", "pony-express", "phone call"],
            name: "communication",
        },
    ])
    .then((response) => {
        // console.log(response)
        fs.writeFile("user.txt", JSON.stringify(response), (err) => {
            err ? console.error(err) : console.log("success");
        });
    });
