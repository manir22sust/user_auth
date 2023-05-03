import jwt from "jsonwebtoken";

export const createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: duration });
};
