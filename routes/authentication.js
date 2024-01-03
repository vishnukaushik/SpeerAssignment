const router = require("express").Router();
const jwt = require("json-web-token");

router.post("/login", (req, res, next) => {
  res.send({ message: "Success" });
});

router.post("/signup", (req, res, next) => {
  res.send({ message: "Success" });
});

module.exports = router;
