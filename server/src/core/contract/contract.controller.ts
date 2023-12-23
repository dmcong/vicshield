import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ContractService } from './contract.service'
import { CreateContractDto } from './dto/create-contract.dto'

@Controller('/contract')
@ApiTags('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async create(@Body() dto: CreateContractDto) {
    return this.contractService.create(dto)
  }
}
