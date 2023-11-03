import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument, Model } from "mongoose"


@Schema()
export class User {
    @Prop()
    name: string
    @Prop()
    password: string
    @Prop()
    email: string
}


export type userDocument = HydratedDocument<User>
export const UserSchema = SchemaFactory.createForClass(User)
export type UserModel = Model<User>
