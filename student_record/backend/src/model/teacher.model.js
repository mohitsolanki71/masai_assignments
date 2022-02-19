const bcrypt = require("bcryptjs");

const { Schema, model } = require("mongoose");

const teacherSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

teacherSchema.pre("save", function (next) {
  // create and update

  if (!this.isModified("password")) return next();
  // Store hash in your password DB.

  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

teacherSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);

      return resolve(same);
    });
  });
};

module.exports = model("user", teacherSchema);
