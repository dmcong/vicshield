export interface DataType {
  contractId: string
  contractName: string

  createdAt: string

  updatedAt: string
  status: STATUS
}

export enum STATUS {
  CANCEL = 0,
  SUCCESS = 1,
  WAITING = 2,
  EXPIRE = 3,
}

export type CreateContractDto = {
  content: string
  signatories: string[]
  value?: string
  recipient?: string
  title: string
  signDeadline: string
  expirationDate: string
  category: string
  reviewers: string[]
  description: string
}
