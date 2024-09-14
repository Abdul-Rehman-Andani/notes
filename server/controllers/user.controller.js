import {User} from "../models/user.model.js";
import bcrypt from "bcrypt";
import { setToken } from "../utils/setToken.js";
import {sendEmail} from "../utils/mailer.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const isUserExist = await User.findOne({ email: email });
      if (isUserExist) {
        throw new Error("user is already exist");
      }
  
      const hashPassword = await bcrypt.hash(password, 10);
  
      const user = new User({ name, email, password: hashPassword });
      await user.save();
      const token = setToken(user._id);
      return res
        .cookie("token", token).cookie("name", user.name)
        .json({ success: true, message: "user created" });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  };
  
  // endpoint for signin
  export const signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        throw new Error("User does not exist");
      }
  
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        throw new Error("Invalid password");
      }
  
      const token = setToken(user._id);
      return res
        .cookie("token", token).cookie("name", user.name)
        .json({ success: true, message: "user login" });

      // await sendEmail(email, "verify", user._id);

      // return res.json("ckeck mail");

    } catch (error) {
      return res.status(500).json({ status: false, message: error.message });
    }
  };
  

  // endpoint for signout
export const signout = async (req, res) => {
  try {
    return res.clearCookie("token").clearCookie("name").json({success : true, message: "user signout"})
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}