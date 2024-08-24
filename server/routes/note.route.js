import express from "express";
import { auth } from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";
import { create, del, read } from "../controllers/note.controller.js";

const router = express.Router();

router
  .post("/", auth, upload.single("img"), create)
  .get("/", auth, read)
  .delete("/:id", del);

export default router;
