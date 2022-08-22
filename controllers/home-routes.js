const router = require("express").Router();
const {Post} = require("../models")

router.get("/", async (req, res) => {
  console.log("Route Reached");
  const loggedIn = req.session.user_id ? true : false
  let notLoggedIn = req.session.user_id ? false : true
  const posts = await Post.findAll({})
  res.render("homepage", { posts, loggedIn, notLoggedIn});
});

router.get("/login", async (req, res) => {
  console.log("Route Reached");
  const loggedIn = req.session.user_id ? true : false
  res.render("login", {loggedIn});
});

router.get('/posts/:id', async (req, res) =>  {
  const post = await Post.findByPk(req.params.id)
  const loggedIn = req.session.user_id ? true : false
  res.render("post-detail", {post, loggedIn})
})  

module.exports = router;
