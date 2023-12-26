import { Type } from 'class-transformer'
import { IsString, IsDate, IsOptional } from 'class-validator'

export class CreateContractDto {
  @IsString()
  categoryId: string

  @IsString({ each: true })
  signatories: string[]

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
}
