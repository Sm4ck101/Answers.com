const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const answerRoutes = require('./answer-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/answers', answerRoutes);

module.exports = router;