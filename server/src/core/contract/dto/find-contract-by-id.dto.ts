import { IsString } from 'class-validator'

export class FindContractByIdDto {
  @IsString()
  contractId: string
}
