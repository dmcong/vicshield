import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { ContractService } from './contract.service'
import { CreateContractDto } from './dto/create-contract.dto'
import { AuthGuard } from 'src/shared/guards/auth.guard'
import { AuthContext } from 'src/types/auth-context.type'
import { FindContractByContentDto } from './dto/find-contract-by-content.dto'
import { FindContractByIdDto } from './dto/find-contract-by-id.dto'
import { FindListContractDto } from './dto/find-list-contract.dto'

@Controller('/contract')
@ApiTags('contract')
@UseGuards(AuthGuard)
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async create(
    @Body() dto: CreateContractDto,
    @Req() { user }: AuthContext<Request>,
  ) {
    return this.contractService.create(dto, user._id)
  }

  @Post('/:contractId/active')
  async active(@Body() { contractId }: FindContractByIdDto) {
    return this.contractService.active(contractId)
  }

  @Post('/find')
  async findByContent(@Body() { content }: FindContractByContentDto) {
    return this.contractService.findByContent(content)
  }

  @Get()
  async findMine(
    @Req() { user }: AuthContext<Request>,
    @Query() dto: FindListContractDto,
  ) {
    return this.contractService.findMine(user.wallet, dto)
  }

  @Get('/:contractId')
  async findById(@Param() { contractId }: FindContractByIdDto) {
    return this.contractService.findById(contractId)
  }

  @Post('/:contractId/sign')
  async sign(
    @Req() { user }: AuthContext<Request>,
    @Param() { contractId }: FindContractByIdDto,
  ) {
    return this.contractService.sign(contractId, user.wallet)
  }
}
