const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mohitsolanki:mohitsolanki@cluster0.wnueu.mongodb.net/Tution_assignment"
  );
};

module.exports = connect;
