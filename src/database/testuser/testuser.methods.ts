import { Document } from "mongoose";
import { ITestUserDocument } from "./testuser.types";

export async function setLastUpdated(this: ITestUserDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}
export async function sameLastName(this: ITestUserDocument): Promise<Document[]> {
    return this.model("user").find({ lastName: this.lastName });
}

export async function generateHash(this: ITestUserDocument): Promise<void> {
    // TODO
}

export async function checkPassword(this:ITestUserDocument, password: String) {
    return this.passwort === password? true : false;
}