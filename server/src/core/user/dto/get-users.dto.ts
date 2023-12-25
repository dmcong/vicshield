import { Type } from 'class-transformer'
import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class GetUsersDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  page: number

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  limit: number

  @IsOptional()
  @IsBoolean()
  isKyc?: boolean
}
