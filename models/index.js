// const { UPSERT } = require('sequelize/types/query-types');
const Answer = require('./Answer');
const Post = require('./Post');
const Vote = require('./Vote');
const User = require('./User');


User.hasMany(Post, {
    foreignKey: 'user_id'
});
 
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
  
Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});
  
Answer.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Answer.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Answer, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Post.hasMany(Answer, {
    foreignKey: 'post_id'
});
  
module.exports = { User, Post, Vote, Answer };
  