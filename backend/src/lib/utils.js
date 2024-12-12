import User from "../models/user.model.js"; // Ensure the path is correct and use .js if required
import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {

    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true, // Prevent XSS attacks
        sameSite: "strict", // Prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development", // Only use secure cookies in production
    });

    return token;
};
