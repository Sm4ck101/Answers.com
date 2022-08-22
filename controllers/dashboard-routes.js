const router = require("express").Router();
const auth = require("../utils/auth");
const {Post} = require("../models")

router.get("/dashboard", auth, async (req, res) => {
  console.log("Route Reached");
  const loggedIn = req.session.user_id ? true : false
  const posts = await Post.findAll({user_id: req.session.user_id})
  res.render("dashboard", { posts, loggedIn });
});

module.exports = router;
