import { ITestUserDocument, ITestUserModel } from "./testuser.types";

export async function findOneOrCreate(
    this: ITestUserModel,
    userId: string
): Promise<ITestUserDocument> {
    const record = await this.findOne({ userId });
    if (record) {
        return record;
    } else {
        return this.create({ userId });
    }
}
export async function findByEmail(
    this: ITestUserModel,
    email: string
): Promise<ITestUserDocument> {
    return this.findOne({ email });
}