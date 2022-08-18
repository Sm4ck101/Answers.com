const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

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