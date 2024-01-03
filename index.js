require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const authentication = require("./routes/authentication");
const notes = require("./routes/notes");
const logger = require("./middlewares/logger");

app.use(cors());
app.use(logger);
app.use("/api/auth", authentication);
app.use("/api/notes", notes);

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
