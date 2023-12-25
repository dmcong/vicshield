import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, SchemaTypes } from 'mongoose'

import { IUser, KYC } from 'src/types/user.type'

export type UserDocument = HydratedDocument<UserModel>

@Schema({ timestamps: true, autoIndex: true, optimisticConcurrency: true })
export class UserModel implements Omit<IUser, '_id'> {
  @Prop({ type: SchemaTypes.String, index: true })
  wallet: string

  @Prop({ type: Object })
  kyc: KYC

  @Prop({ type: SchemaTypes.Boolean, default: false })
  isKyc: boolean
}

export const UserSchema = SchemaFactory.createForClass(UserModel)
