const express = require("express")
const router = express.Router()

const {createUser, getAllUsers, getUser, getUserByEmail} = require("../controllers/userController")
router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:name/:id', getUser);
router.get('/:id', getUserByEmail);

module.exports = router;