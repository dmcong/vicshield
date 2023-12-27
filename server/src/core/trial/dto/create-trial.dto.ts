import { IsString } from 'class-validator'

export class CreateTrialDto {
  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  email: string

  @IsString()
  title: string

  @IsString()
  company: string

  @IsString()
  employees: string

  @IsString()
  phone: string

  @IsString()
  country: string
}
