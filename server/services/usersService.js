const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const JWT_SECRET = "uhasdiuhqwekljh12i3yt12874yhuiy42h187yt28174t6gfdsasd";
const blacklist = [];

async function register(username, email, town, password) {
  const existing = await getUserByUsername(username);

  if (existing) {
    throw new Error("Username exist!");
  }

  const user = new User({
    username,
    email,
    town,
    hashedPassword: await hash(password, 10),
  });
  await user.save();

  return createSession(user);
}

async function login(username, password) {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new Error("Incorrect username");
  }

  const hasMatch = await compare(password, user.hashedPassword);
  if (!hasMatch) {
    throw new Error("Incorrect password");
  }

  return createSession(user);
}

function logout(token) {
  blacklist.push(token);
}

async function getUserByUsername(username) {
  const user = await User.findOne({ username: new RegExp(`^${username}$`, "i") });

  return user;
}

function createSession(user) {
  return {
    username: user.username,
    _id: user._id,
    accessToken: jwt.sign(
      {
        username: user.username,
        _id: user._id,
      },
      JWT_SECRET
    ),
  };
}

function verifySession(token) {
  const payload = jwt.verify(token, JWT_SECRET);

  if (blacklist.includes(token)) {
    throw new Error("Token is invalidated");
  }

  return {
    username: payload.username,
    _id: payload._id,
    token,
  };
}

module.exports = {
  login,
  register,
  logout,
  verifySession,
};
