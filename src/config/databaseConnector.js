import mongoose from "mongoose";
import "dotenv/config";

const dbConnection = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try {
  mongoose.connection.once("connected", () => {
    console.log("Database connected successfully ✅");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Database connection failed", error);
  });
} catch (error) {
  console.log(error.message);
}

export default dbConnection;
