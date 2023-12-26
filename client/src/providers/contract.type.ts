export interface IContract {
  _id: string

  categoryId: string

  owner: string

  signatories: ISignatory[]

  content: string

  value: string

  recipient: string

  expirationDate: Date

  contractExpirationDate?: Date
}

export interface ISignatory {
  wallet: string

  timestamp?: Date

  hasSigned: boolean
}
