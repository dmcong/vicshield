import { Injectable } from '@nestjs/common'

import { InjectModel } from '@nestjs/mongoose'

import { ContractDocument, ContractModel } from './contract.entity'
import { Model } from 'mongoose'
import { CreateContractDto } from './dto/create-contract.dto'

@Injectable()
export class ContractService {
  constructor(
    @InjectModel(ContractModel.name)
    private contractModel: Model<ContractDocument>,
  ) {}

  async create(dto: CreateContractDto) {}
}
