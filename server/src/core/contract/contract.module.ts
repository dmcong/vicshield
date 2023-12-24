import { Module } from '@nestjs/common'

import { ContractController } from './contract.controller'
import { ContractService } from './contract.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ContractModel, ContractSchema } from './contract.entity'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContractModel.name, schema: ContractSchema },
    ]),
    UserModule,
  ],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
