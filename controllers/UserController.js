const User = require("../models/User");
const bcrypt = require("bcryptjs");

class UserController {
  async index(req, res) {
    try {
      const users = await User.get();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
  }

  async store(req, res) {
    try {
      let {password, ...data} = req.body;

      if (password) {
        data['password'] = bcrypt.hashSync(password, 10);
      }

      const user = await User.create(data);
      res.status(200).json(
        {
          message: "User created",
          data: {
            ...data
          }
        }
      );
    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
  }

  async update(req, res) {
    try {
      const {id} = req.params;
      let {password, ...data} = req.body;

      if (password) {
        data['password'] = bcrypt.hashSync(password, 10);
      }

      data['updated_at'] = new Date();

      const user = await User.update(data, id);
      res.status(200).json(
        {
          message: "User updated",
          data: {
            ...data
          }
        }
      );
    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
  }

  async destroy(req, res) {
    try {
      const {id} = req.params;
      const user = await User.delete(id);
      res.status(200).json(
        {
          message: "User deleted"
        }
      );
    } catch (err) {
      res.status(500).json({
        message: err.message
      });
    }
  }
}

module.exports = new UserController();