const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const api = require("./routes/api");

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/", api);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
