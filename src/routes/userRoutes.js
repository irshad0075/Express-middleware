const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.use(authenticateToken); // Apply authentication middleware to the routes below

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.get("/byEmail/:email", userController.getUserByEmail);
router.delete("/:userId", userController.deleteUser);
router.patch("/:userId", userController.updateUser);

module.exports = router;
