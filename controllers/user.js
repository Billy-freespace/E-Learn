const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.list = (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Ocurrió un error" });
    });
};

exports.details = (req, res) => {
  User.findById(req.params._id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Ocurrió un error" });
    });
};

exports.create = async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    passwordHash,
  });
  newUser
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Ocurrió un error" });
    });
};
