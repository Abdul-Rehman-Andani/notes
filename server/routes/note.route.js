import express from "express";
import { auth } from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";
import {
  completed,
  create,
  del,
  read,
  show,
  upadte,
  upadteStatus,
} from "../controllers/note.controller.js";

const router = express.Router();

router
  .post("/", auth, upload.single("img"), create)
  .get("/", auth, read)
  .get("/completed", auth, completed)
  .get("/:id", show)
  .patch("/:id", upadte)
  .patch("/update-status/:id", upadteStatus)
  .delete("/:id", del);

export default router;
