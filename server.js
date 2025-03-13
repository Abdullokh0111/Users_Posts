const app = require("./middlewares/app");
const connectDb = require("./config/db");

require("dotenv").config();

connectDb();
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
