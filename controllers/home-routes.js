const router = require('express').Router();


router.get('/', async (req,res) => {
    console.log('Route Reached')
    res.render('homepage')
});

module.exports = router;