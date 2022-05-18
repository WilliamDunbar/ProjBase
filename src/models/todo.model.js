const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "Account",
  }
);

const TodoModel = mongoose.model("TodoModel", TodoSchema, "Account");

module.exports = TodoModel;
