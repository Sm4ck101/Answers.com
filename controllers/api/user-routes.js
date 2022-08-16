const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');

router.post('/register', async (req, res) =>  {
    try {
        const { username, email, password, confirmPassword } = req.body
        if (password !== confirmPassword)   {
            return res.status(400).json({message: 'Passwords do not match'})
        }
    } catch (error) {
        
    }
})   


module.exports = router;