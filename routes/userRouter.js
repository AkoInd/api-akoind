const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get("/", userController.index)
            .post("/", userController.store)
            .patch("/:id", userController.update)
            .delete("/:id", userController.destroy)
// userRouter.get("/", (req, res) => {
//     res.send("user");
// });

module.exports = userRouter;