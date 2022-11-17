const
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
            type: "list",
            message: "what languages do you know?",
            name: "username",
        },
    ])