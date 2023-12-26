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
