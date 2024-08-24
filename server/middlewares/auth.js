import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const auth = async (req, res, next) => {
  try {
    if (!req.cookies.token) {
      throw new Error("un-aunthicated user");
    }

    const { id } = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    const user = await User.findOne({ _id: id });

    if (!user) {
      throw new Error("user not found");
    }

    req.id = user._id;
    next();
  } catch (error) {
    return res.json({ sucess: false, message: error.message });
  }
};
