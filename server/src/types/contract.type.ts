import { Types } from 'mongoose'

export interface IContract {
  _id: Types.ObjectId | string

  categoryId: Types.ObjectId | string

  signatories: ISignatory[]

  content: string

  value: string

  recipient?: string

  expirationDate: Date

  contractExpirationDate?: Date
}

export class ISignatory {
  wallet: string

  timestamp?: Date

  hasSigned: boolean
}
