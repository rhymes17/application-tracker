import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;

    // This helps capture the stack trace properly
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  const statusCode = "statusCode" in err ? (err as any).statusCode : 500;

  res.status(statusCode).json({
    success: false,
    error: err.message || "Something went wrong",
  });
};
