import { Schema } from "mongoose";
import { findByEmail, findOneOrCreate } from "./testuser.statics";
import { setLastUpdated, sameLastName, checkPassword } from "./testuser.methods";

const TestUserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
TestUserSchema.statics.findOneOrCreate = findOneOrCreate;
TestUserSchema.statics.findByEmail = findByEmail
TestUserSchema.methods.setLastUpdated = setLastUpdated;
TestUserSchema.methods.sameLastName = sameLastName;
TestUserSchema.methods.checkPassword = checkPassword;
export default TestUserSchema;