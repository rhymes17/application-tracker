import { Request, Response } from "express";

// @desc   Create new order
// @route  POST /api/order
// @access Private
const registerUser = async (req: Request, res: Response) => {
  try {
    res.status(201).json({ message: "Auth controller working" });
  } catch (error) {
    res.status(401);
    throw new Error("Unable to register user");
  }
};

export { registerUser };
