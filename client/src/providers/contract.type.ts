export interface IContract {
  _id: string

  title: string

  description: string

  categoryId: string

  owner: string

  signatories: ISignatory[]

  content: string

  value: string

  recipient: string

  expirationDate: Date

  contractExpirationDate?: Date

  createdAt: string
}

export enum SignStatus {
  Signed = 'Signed',
  Rejected = 'Rejected',
  Pending = 'Waiting to sign',
}
export interface ISignatory {
  wallet: string

  timestamp?: Date

  status: SignStatus
}
