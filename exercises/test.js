const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/users");
};

const user = new mongoose.Schema({
  firstName: "String",
});

const User = mongoose.model("user", user);

connect()
  .then(async (connection) => {
    const user = await User.create({ firstName: "Harry" });
    console.log(user);
  })
  .catch((e) => console.error(e));
