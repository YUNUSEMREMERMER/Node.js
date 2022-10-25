import { User } from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send("kullanıcı oluştu");
    console.log("user created");
  } catch (error) {
    console.log(error);
  }
};
