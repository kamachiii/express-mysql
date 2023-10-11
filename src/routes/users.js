const express = require("express");
const UserController = require("../controller/users");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.createNewUsers);
router.patch("/:id", UserController.updateDataUsers);
router.delete("/:id", UserController.deletedUsers);

module.exports = router;
