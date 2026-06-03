import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password || email === "" || password === "") {
      return next(errorHandler(400, "All Fields are required"));
    }
    const validUser = await User.findOne({ email: email.toLowerCase() });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        _id: validUser._id,
        username: validUser.username,
        email: validUser.email,
      });
  } catch (error) {
    next(error);
  }
};
