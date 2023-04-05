const { verifySession } = require("../services/usersService");

module.exports = () => (req, res, next) => {
  const token = req.headers["X-Authorization"];

  try {
    if (token) {
      const userData = verifySession(token);
      req.user = userData;
    }
    next();
  } catch (err) {
    res.status(498).json({ msg: "Invalid access token. Please sign in" });
  }
};
