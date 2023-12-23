import { Module } from '@nestjs/common'

import { ContractController } from './contract.controller'
import { ContractService } from './contract.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ContractModel, ContractSchema } from './contract.entity'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContractModel.name, schema: ContractSchema },
    ]),
  ],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
