import { Type } from 'class-transformer'
import { IsMongoId, IsNumber, IsOptional } from 'class-validator'

export class FindListContractDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page: number

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  limit: number

  @IsOptional()
  @IsMongoId()
  categoryId?: string
}
