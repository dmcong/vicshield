import { IUser } from './user.type'

export type AuthContext<T extends object> = T & {
  user: IUser
}

export type ValidateAuthResult = {
  valid: boolean
  user: IUser
}
