import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "This email is already taken"],
    },
    username: {
      type: String,
      required: [true, "Please add the username"],
      unique: [true, "This username is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;