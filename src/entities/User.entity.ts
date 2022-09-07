//entity
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { prop } from '@typegoose/typegoose';
import { Field, ObjectType } from '@nestjs/graphql';
export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
    @Prop({ required: true })
    @prop()
    @Field({ nullable: true })
    readonly userId: string;

    @Prop({ required: false })
    @prop()
    @Field({ nullable: true })
    readonly group: string;

    @Prop({ required: true, unique: true, type: String })
    @prop()
    @Field({ nullable: true })
    readonly email: string;

    @Prop({ required: false })
    @prop()
    @Field({ nullable: true })
    readonly phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
