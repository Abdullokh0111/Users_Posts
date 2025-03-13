const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose
      .connect(
        process.env.DATABASE.replace("<db_password>", process.env.PASSWORD)
      )
      .then(() => {
        console.log("Db connected");
      });
  } catch (error) {
    console.log("Xatolik yuz berdi", error);
  }
};
