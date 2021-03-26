import { Document, Model } from "mongoose";

export interface ITestUser {
    firstName: string;
    lastName: string;
    email: string,
    passwort: string
    dateOfEntry?: Date;
    lastUpdated?: Date;
}
export interface ITestUserDocument extends ITestUser, Document {
    setLastUpdated: (this: ITestUserDocument) => Promise<void>;
    sameLastName: (this: ITestUserDocument) => Promise<Document[]>;
}
export interface ITestUserModel extends Model<ITestUserDocument> {
    findOneOrCreate: (
        this: ITestUserModel,
        {
            firstName,
            lastName,
            email,
            passwort
        }: { firstName: string; lastName: string; email: string, passwort: string}
    ) => Promise<ITestUserDocument>;
}