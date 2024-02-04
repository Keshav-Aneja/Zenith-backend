import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server listening on port", process.env.PORT || 8080);
    });
    app.on("error", () => {
      console.log(
        "Database connected but, application not able to talk to database"
      );
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection failed!!", err);
  });
