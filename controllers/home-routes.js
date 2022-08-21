const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("Route Reached");
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  console.log("Route Reached");
  res.render("login");
});

module.exports = router;
