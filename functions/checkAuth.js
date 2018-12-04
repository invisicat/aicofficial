module.exports = function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.send("not logged in :(");
};
