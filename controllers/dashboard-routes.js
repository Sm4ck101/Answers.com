const router = require('express').Router();


router.get('/dashboard', async (req, res) => {
    console.log('Route Reached')
    res.render('dashboard')
});

module.exports = router;