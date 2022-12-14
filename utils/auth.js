const withAuth = (req, res, next) => {
  console.log("With Auth", req.session)
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    console.log("Session User", req.session.user_id)
    next();
  }
};

module.exports = withAuth;
