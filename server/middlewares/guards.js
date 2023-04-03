function isAuth() {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401).json({ msg: "Please log in" });
    }
  };
}

function isGuest() {
  return (req, res, next) => {
    if (!req.user) {
      next();
    } else {
      res.status(400).json({ msg: "You are already signed in !" });
    }
  };
}

module.exports = {
  isAuth,
  isGuest,
};
