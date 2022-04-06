import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { Document } from 'mongoose'

export type userDocument = User & Document

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  userId: string

  @Prop({ required: true })
  username: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  createDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
