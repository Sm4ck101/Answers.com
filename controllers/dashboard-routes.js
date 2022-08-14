const router = require('express').Router();


router.get('/', async (req,res) => {
    console.log('Route Reached')
    res.render('dashboard')
});

module.exports = router;