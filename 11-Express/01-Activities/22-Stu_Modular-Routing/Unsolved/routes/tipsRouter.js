//here is where alll of our tip routes will be written!!
const tips = require("express").Router(); //this router function is what enables us to modularize our routes - mini app
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')

// GET Route for retrieving all the tips
//http:localhost:3001/api/tips
tips.get("/", (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
//http:localhost:3001/api/tips
tips.post("/", (req, res) => {
    console.info(`${req.method} request received to add a tip`);

    const { username, topic, tip } = req.body;

    if (req.body) {
        const newTip = {
            username,
            tip,
            topic,
            tip_id: uuid(),
        };

        readAndAppend(newTip, './db/tips.json');
        res.json(`Tip added successfully 🚀`);
    } else {
        res.error('Error in adding tip');
    }
});

module.exports = tips;