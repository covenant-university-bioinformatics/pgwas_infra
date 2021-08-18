import * as jwt from "jsonwebtoken";
import { User } from "./user.model";
import { ErrorResponse } from "./error.response";

// declare module "express" {
//   export interface Request {
//     user: UserDoc;
//   }
// }

const authMiddleware = async (req: any, res: any, next: any) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req?.cookies?.accessToken) {
    //Set token from cookie
    token = req.cookies.accessToken;
    // console.log("Cookie");
  }

  if (!token) {
    console.log("No token");
    return next(new ErrorResponse("Unauthorized", 401, "User not authorized"));
  }

  const decoded = jwt.verify(token, process?.env?.JWT_KEY!);
  const { username } = decoded as any;
  const user = await User.findOne({ username });

  if (!user) {
    console.log("No user");
    return next(new ErrorResponse("Unauthorized", 401, "User not authorized"));
  }

  next();
};

export default authMiddleware;
