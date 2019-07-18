 const router = require('express').Router();
 const userRoutes = require('./userRoutes')
 console.log("Routes..............")
 router.use('/user', userRoutes)
 module.exports = router;