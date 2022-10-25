import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const generateToken = async (request, response, next) => {
  const { userName, password } = request.body;
  const user = User.findOne({ userName });
  if (user) {
    const payLoad = {
      userName,
      password,
      email: "yunusemremermer@gmail.com",
    };
    const token = jwt.sign(payLoad, request.app.get("api_secret_key"), {
      expiresIn: 120,
    });
    response.json({
      status: true,
      token,
    });
  } else {
    console.log("kullanıcı mevcut değil")
  }
};
