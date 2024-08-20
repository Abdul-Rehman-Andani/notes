import dotenv from "dotenv";
dotenv.config();
import expess from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./utils/connection.js";

const app = expess();

app.use(cors({credentials : true}));
app.use(expess.json());
app.use(expess.urlencoded({extended : true}));
app.use(cookieParser());


app.listen(process.env.PORT, () => {
    connectDB();
    console.log("server");
});
