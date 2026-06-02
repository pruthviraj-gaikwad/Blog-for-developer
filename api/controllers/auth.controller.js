import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All Fields are required"));
  }

  const bcryptPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: bcryptPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "sign up successful" });
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern?.username) {
        return next(errorHandler(409, "Username already exists"));
      }
      if (error.keyPattern?.email) {
        return next(errorHandler(409, "Email already exists"));
      }
    }
    next(error);
  }
};
