import jsonwebtoken from "jsonwebtoken";

export function validateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401);
      return res.json({ message: "User is not authorized or token is missing." });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded.user;
    return next();
  } catch (err) {
    console.error("Token validation error:", err.message || err);
    res.status(401);
    return res.json({ message: "User is not authorized" });
  }
}