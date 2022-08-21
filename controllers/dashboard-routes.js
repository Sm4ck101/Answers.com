const router = require("express").Router();
const auth = require("../utils/auth")

router.get("/dashboard", auth, async (req, res) => {
  console.log("Route Reached");
  res.render("dashboard", {});
});

module.exports = router;
