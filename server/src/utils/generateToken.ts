import { Response } from "express";
import jwt from "jsonwebtoken";

const generateToken = (res: Response, userId: string) => {
  const accessTokenSecretKey = process.env.ACCESS_TOKEN_SECRET_KEY;

  try {
    if (!accessTokenSecretKey) {
      throw new Error("No secret key found");
    }
    const token = jwt.sign({ userId }, accessTokenSecretKey);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    return error;
  }
};

export default generateToken;
