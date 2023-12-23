import { Types } from 'mongoose'
import { Type } from 'class-transformer'
import {
  IsString,
  IsNumber,
  IsMongoId,
  IsOptional,
  IsDate,
  IsBoolean,
  ValidateNested,
} from 'class-validator'

import { ISignature } from 'src/types/contract.type'

export class CreateContractDto {
  @IsMongoId()
  categoryId: Types.ObjectId | string

  @Type(() => SignatureDto)
  @ValidateNested()
  signatures: SignatureDto[]

  @IsString()
  content: string

  @Type(() => Number)
  @IsNumber()
  value: number

  @IsOptional()
  @IsString()
  recipient?: string

  @Type(() => Date)
  @IsDate()
  expiredDate?: Date
}

class SignatureDto {
  userId: Types.ObjectId | string

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  timestamp?: Date

  @IsBoolean()
  hasSigned: boolean
}
