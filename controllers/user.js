const User = require("../models/User");

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

exports.create = (req, res) => {
  const newUser = new User(req.body);
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
