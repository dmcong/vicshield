import { Body, Controller, Post, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ContractService } from './contract.service'
import { CreateContractDto } from './dto/create-contract.dto'
import configuration from 'src/configs'
import { FileInterceptor } from '@nestjs/platform-express'

const {
  storage: { maxSize },
} = configuration()
@Controller('/contract')
@ApiTags('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: maxSize } }))
  async create(@Body() dto: CreateContractDto) {
    return this.contractService.create(dto)
  }
}
