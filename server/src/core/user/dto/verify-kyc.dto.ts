import { IsBoolean, IsString } from 'class-validator'

export class VerifyKYCDto {
  @IsString()
  wallet: string

  @IsBoolean()
  valid: boolean
}
