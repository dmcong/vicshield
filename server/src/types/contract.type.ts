import { Types } from 'mongoose'

export interface IContract {
  _id: Types.ObjectId | string

  categoryId: Types.ObjectId | string

  signatures: ISignature[]

  content: string

  value: number

  recipient?: string

  expiredDate?: Date
}

export type ISignature = {
  userId: Types.ObjectId | string

  timestamp?: Date

  hasSigned: boolean
}
