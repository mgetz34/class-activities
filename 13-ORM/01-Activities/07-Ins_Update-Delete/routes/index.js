const router = require('express').Router();
const apiRoutes = require('./api'); //l;ooks for an index api in the api dir

 
//prefix routes that are apiRoutes with /api\
// http://localhost:3001/api
router.use('/api', apiRoutes);

module.exports = router;
