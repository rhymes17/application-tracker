import { NextFunction, Request, Response } from "express";
import { AppError } from "../middleware/errorHandler";
import { User } from "../models/userModel";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";
import { asyncHandler } from "../utils/asyncHandler";

// @desc   Register a new User
// @route  POST /api/auth/register
// @access Public
const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, fullName, email, password } = req.body;

      // Validation
      if (!username || !fullName || !email || !password) {
        throw new AppError("Kindly fill all required fields", 404);
      }

      // Check if user already exists
      const usernameTaken = await User.findOne({ username });
      if (usernameTaken) {
        throw new AppError("username already taken", 403);
      }

      const emailAlreadyRegistered = await User.findOne({ email });
      if (emailAlreadyRegistered) {
        throw new AppError("User already registered with this email", 403);
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        username,
        fullname: fullName,
        email,
        password: hashedPassword,
      });

      if (!user) {
        throw new AppError("Failed to register user, Try again!", 500);
      }

      console.log({ user });

      generateToken(res, user.id);

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          userId: user._id,
          username: user.username,
          fullName: user.fullname,
          email: user.email,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

export { registerUser };
