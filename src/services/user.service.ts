import bcrypt from "bcryptjs";
import config from "config";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";

import User, { TUser } from "../models/User";
import Payload from "../types/Payload";

class userController {
  create = async (email: string, password: string) => {
    // create a new user
    try {
      const options: gravatar.Options = {
        s: "200",
        r: "pg",
        d: "mm",
      };

      const avatar = gravatar.url(email, options);

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      // Build user object based on TUser
      const userFields: TUser = {
        email,
        password: hashed,
        avatar,
      };

      let user = new User(userFields);

      await user.save();

      const payload: Payload = {
        userId: user.id,
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: config.get("jwtExpiration") },
        (err, token) => {
          if (err) throw err;
          console.log(token);
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  // get user id from wallet address
  get = async (walletAddress: string) => {
    // get user id from wallet address
    // check database for user id related to a specific address
    // revert if unsuccessful.
  };
}

export default new userController();
