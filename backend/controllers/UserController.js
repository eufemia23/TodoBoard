import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jsonwebtoken from "jsonwebtoken";

//@desc register a user
//@route POST /api/users/register
//@access public
export async function registerUser(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("That email is already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ", hashedPassword); //delete after
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  const accessToken = jsonwebtoken.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "24h" }
  );

  console.log(`User created ${user}`); //delete after

  if (user) {
    res.status(201).json({ accessToken, userId: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
}

//@desc log in a user
//@route POST /api/users/login
//@access public
export async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jsonwebtoken.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({ accessToken, userId: user.id });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
}

//@desc show current user
//@route GET /api/users/current
//@access private
export async function currentUser(req, res) {
  try {
    const user = await User.findById(req.params.userid);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
