const express = require('express');

const tipsRouter = require('./tipsRouter');
const feedbackRouter = require('./feedbackRouter');


const app = express();

//middleware functions!

//any routes that are defined in tipsRouter, please prefix with /tips
//http:localhost:3001/api/tips
app.use("/tips", tipsRouter);

//any routes that are defined in feedbackRouter, please prefix with /feedback
//http://localhost:3001/api/feedback
app.use("/feedback", feedbackRouter);


module.exports = app;