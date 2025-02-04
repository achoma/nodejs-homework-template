const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST = "mongodb+srv://admin:Kamil2009@cluster0.wk2zx.mongodb.net/";

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(`Database connection error: ${error.message}`);
    process.exit(1);
  });
