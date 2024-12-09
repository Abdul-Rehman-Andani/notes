import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./utils/connection.js";
import userRouter from "./routes/user.route.js";
import noteRouter from "./routes/note.route.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();
dotenv.config();

// app middleware
app.use(cors({credentials : true, origin : ["http://localhost:5173", "http://localhost:9000"]}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(helmet()); // prevents XSS attack
app.use(cookieParser());

// api routes middlewares
app.use("/auth", userRouter);
app.use("/note", noteRouter)


app.listen(process.env.PORT, () => {
    connectDB();
    console.log("server");
});


app.use(errorHandler);