import { IsOptional, IsString } from 'class-validator'

export class SignUpDto {
  @IsString()
  wallet: string

  @IsString()
  username: string

  @IsString()
  fullName: string

  @IsString()
  @IsOptional()
  avatar?: string

  @IsString()
  role: string
}
