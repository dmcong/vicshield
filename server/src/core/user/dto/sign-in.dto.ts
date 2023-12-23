import { IsString } from 'class-validator'

export class SignInDto {
  @IsString()
  wallet: string

  @IsString()
  username: string
}
