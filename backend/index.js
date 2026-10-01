import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/messageRoute.js";
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 8000;
// middleware
app.use(express.json());
app.use(cockie-cookieParser());

// Register Routes 

app.use("/api/v1/user", userRouter);
app.use("/api/v1/message",messageRouter);
app.listen(PORT, () => {
    connectDB();
  console.log(`server is running on PORT ${PORT}....`);
});
