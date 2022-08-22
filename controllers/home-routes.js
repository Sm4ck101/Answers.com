const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("Route Reached");
  const loggedIn = req.session.user_id ? true : false
  res.render("homepage", {loggedIn});
});

router.get("/login", async (req, res) => {
  console.log("Route Reached");
  const loggedIn = req.session.user_id ? true : false
  res.render("login", {loggedIn});
});

module.exports = router;
