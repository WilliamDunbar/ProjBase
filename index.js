const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const rfs = require("rotating-file-stream");
const dotenv = require("dotenv");
dotenv.config();
const connectDatabase = require("./src/config/db.config");
connectDatabase()

const port = process.env.PORT || 3333;
const isProduction = process.env.NODE_ENV === "production";
const app = express();

const accessLogStream = rfs.createStream("access.log", {
  //   interval: "id",
  path: path.join(__dirname, "log"),
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  isProduction ? morgan("combined", { stream: accessLogStream }) : morgan("dev")
);

app.use("/api", require("./src/routes/router.js")); // Khi nao dung toi /api/ thi se dung use

app.get("/", (req, res) => {
  res.json({
    message: "Hello Minh",
  });
});

app.get("*", (req, res) => {
  res.json({
    message: "Hello Minh",
  });
});

app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
