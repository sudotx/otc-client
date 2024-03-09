import bcrypt from "bcryptjs";
import User, { IUser } from "../models/User";

class authController {
  getAuthenticatedUser = async (userId: string) => {
    // create a new user
    try {
      const user: IUser = await User.findById(userId).select("-password");
    } catch (err) {
      console.error(err.message);
    }
  };
  loginUserAndGetToken = async (email: string, password: string) => {
    // create a new user
    try {
      let user: IUser = await User.findOne({ email });

      const isMatch = await bcrypt.compare(password, user.password);
    } catch (err) {
      console.error(err.message);
    }
  };
}

export default new authController();
