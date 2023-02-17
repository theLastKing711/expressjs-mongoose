import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: './config.env' });

if (!process.env.MONGO_URL) {
  console.log("lkdjalsdasldajlskd asld lkdjalsdasldajlskd asldlkdjalsdasldajlskd asldlkdjalsdasldajlskd asldlkdjalsdasldajlskd asld",process.env.MONGO_URL)
  throw new Error("Please add the MONGO_URL environment variable");
}

mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on(
  "error",
  console.error.bind(console, "❌ mongodb connection error"),
);
database.once("open", () => console.log("✅ mongodb connected successfully"));

mongoose.Promise = Promise;
