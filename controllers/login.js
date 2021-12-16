const Login = require("../models/Login");

exports.list = (req, res) => {
  Login.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Ocurrió un error" });
    });
};

exports.details = (req, res) => {
  Login.findById(req.params._id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Ocurrió un error" });
    });
};
