import { Types } from 'mongoose'
import { Type } from 'class-transformer'
import { IsString, IsMongoId, IsDate } from 'class-validator'

export class CreateContractDto {
  @IsMongoId()
  categoryId: Types.ObjectId | string

  @IsString({ each: true })
  signatories: string[]

  @IsString()
  content: string

  @IsString()
  value: string

  @IsString()
  recipient: string

  @Type(() => Date)
  @IsDate()
  expirationDate: Date
}
