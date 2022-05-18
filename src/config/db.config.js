const mongoose = require("mongoose");

const connectDatabase = () => {
  const mongoDbUrl =
    "mongodb://"+ String(process.env.MONGO_HOST) + ":" + String(process.env.MONGO_PORT)+"/"+String(process.env.MONGO_DB);
  console.log("Connecting to ", mongoDbUrl);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedtopology: true
    })
    .then(() => {
      console.log("Connect successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

module.exports = connectDatabase;
