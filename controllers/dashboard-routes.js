const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    console.log('Route Reached')
    res.render('dashboard')
});

module.exports = router;