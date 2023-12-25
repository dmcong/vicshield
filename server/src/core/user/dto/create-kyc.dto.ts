import { Type } from 'class-transformer'
import { IsDate, IsString } from 'class-validator'

export class CreateKYCDto {
  @IsString()
  fullName: string

  @IsString()
  id: string

  @Type(() => Date)
  @IsDate()
  birthday: Date
}
