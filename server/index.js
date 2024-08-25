import dotenv from "dotenv";
dotenv.config();
import expess from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./utils/connection.js";
import userRouter from "./routes/user.route.js";
import noteRouter from "./routes/note.route.js";

const app = expess();

// app middleware
app.use(cors({credentials : true, origin : ["http://localhost:5173", "http://localhost:9000"]}));
app.use(expess.json());
app.use(expess.urlencoded({extended : true}));
app.use(expess.static("public"));
app.use(cookieParser());

// api routes middlewares
app.use("/auth", userRouter);
app.use("/note", noteRouter)


app.listen(process.env.PORT, () => {
    connectDB();
    console.log("server");
});
