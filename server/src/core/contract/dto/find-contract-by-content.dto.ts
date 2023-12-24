import { IsString } from 'class-validator'

export class FindContractByContentDto {
  @IsString()
  content: string
}
