import express from "express";
import { signin, signup, signout } from "../controllers/user.controller.js";

const router = express.Router();

router
    .post("/signin", signin)
    .post("/signup", signup)
    .get("/signout",signout)


export default router;