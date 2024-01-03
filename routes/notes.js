const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ message: "Success" });
});

module.exports = router;
