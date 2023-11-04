const jwt = require('jsonwebtoken');
const config = require('../config');

// Implement your user-related controller functions here

module.exports = {
  signup,
  login,
  getAllUsers,
  getUserById,
  getUserByEmail,
  deleteUser,
  updateUser,
};
