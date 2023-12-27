import { Types } from 'mongoose'

export interface IContract {
  _id: Types.ObjectId | string

  category: string

  owner: string

  signatories: ISignatory[]

  reviewers: string[]

  content: string

  value: string

  recipient: string

  expirationDate: Date

  signDeadline: Date

  contractExpirationDate?: Date

  title: string

  description: string
}

export enum SignStatus {
  Signed = 'Signed',
  Rejected = 'Rejected',
  Pending = 'Waiting to sign',
}

export class ISignatory {
  wallet: string

  timestamp?: Date

  status: SignStatus
}
