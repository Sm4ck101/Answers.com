const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Answer, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/  ')