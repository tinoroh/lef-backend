import { model } from "mongoose";
import { ITestUserDocument } from "./testuser.types";
import TestUserSchema from "./testuser.schema";

export const TestUserModel = model<ITestUserDocument>("testuser", TestUserSchema);