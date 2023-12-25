import { SchemaType, Types } from 'mongoose'

export interface IUser {
  _id: Types.ObjectId | string

  wallet: string

  kyc: KYC

  isKyc: boolean
}

export interface KYC {
  id: string

  fullName: string

  birthday: Date
}
