const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'mike',
        email: 'mike@mike.com',
        password: 'yep123'
    },
    {
        username: 'web-dev expert',
        email: 'iknowthings@gmail.com',
        password: 'bestdev'
    }
]