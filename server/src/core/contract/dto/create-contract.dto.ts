import { Type } from 'class-transformer'
import { IsString, IsDate, IsOptional } from 'class-validator'

export class CreateContractDto {
  @IsString()
  title: string

  @IsString()
  description: string

  @IsString()
  category: string

  @IsString({ each: true })
  signatories: string[]

  @IsString({ each: true })
  reviewers: string[]

  @IsString()
  content: string

  @IsString()
  @IsOptional()
  value: string

  @IsString()
  @IsOptional()
  recipient: string

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  expirationDate: Date

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  signDeadline: Date
}
