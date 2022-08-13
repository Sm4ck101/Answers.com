// const { UPSERT } = require('sequelize/types/query-types');
const Comment = require('./Comment');
const Post = require('./Post');
const Vote = require('./Vote');
const User = require('./User');






// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete
// })