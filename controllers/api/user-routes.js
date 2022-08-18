const router = require('express').Router();
const { User } = require('../../models');
const auth = require('../../utils/auth');

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' })
        }
        User.create({ username, email, password }).then((newUserData)=>{
            req.session.save(()=>{
                req.session.user_id = newUserData.id
                res.status(201).json({ message: 'Account was created successfully' })
            })
            
        }) .catch((error)=>{
            res.status(500).json({message: error.message})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error occured' })
    }
})

router.post('/login', (req, res)=>{
    try {
        const { username, email, password } = req.body
        User.findOne({ where: {email}}).then((userData)=>{
            if (!userData)  {
                return res.status(400).json({ message: 'No user with that email address' })
            }
            if (!userData.checkPassword(password))   {
                return res.status(400).json({ message: 'Password does not match' })
            }
                req.session.save(()=>{
                req.session.user_id = userData.id
                res.json({ message: 'Login Succesful'})  
            })
        })  .catch((error)=>{
            res.status(500).json({message: error.message})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error occured' })
    }
})

router.post('/logout', (req, res)=>{
    if (req.session.user_id)  {
        req.session.destroy(()=> {
            return res.status(200).json({ message: 'You are now logged out' })
        })
    } else {
        return res.status(400).json({ message: 'You are not logged in' })
    }
})


module.exports = router;