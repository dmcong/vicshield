import { BadRequestException, Injectable } from '@nestjs/common'

import { InjectModel } from '@nestjs/mongoose'

import { ContractDocument, ContractModel } from './contract.entity'
import { Model, Types } from 'mongoose'
import { CreateContractDto } from './dto/create-contract.dto'
import VicShieldSdk from 'src/vicshieldSdk'
import { ConfigService } from '@nestjs/config'
import { EnvironmentVariables } from 'src/configs'
import { UserService } from '../user/user.service'
import { ISignatory } from 'src/types/contract.type'

@Injectable()
export class ContractService {
  private readonly vicshieldSdk: VicShieldSdk
  constructor(
    @InjectModel(ContractModel.name)
    private contractModel: Model<ContractDocument>,
    private config: ConfigService<EnvironmentVariables>,
    private userService: UserService,
  ) {
    this.vicshieldSdk = new VicShieldSdk(config.get('net') ?? 'testnet')
  }

  async create(dto: CreateContractDto, userId: string | Types.ObjectId) {
    const existedContract = await this.findByContent(dto.content)

    if (existedContract) throw new BadRequestException()

    const user = await this.userService.findById(userId)

    if (!user) throw new BadRequestException()

    const tx = await this.vicshieldSdk.generateCreateContractTx({
      owner: user.wallet,
      base64Content: dto.content,
      signatories: dto.signatories,
      expirationDate: dto.expirationDate,
      value: dto.value,
      recipient: dto.recipient,
    })

    await this.contractModel.create({
      ...dto,
      signatories: dto.signatories.map<ISignatory>((signatory) => ({
        wallet: signatory,
        hasSigned: false,
      })),
    })

    return tx
  }

  async findByContent(content: string) {
    return this.contractModel.findOne({ content })
  }

  async findById(contractId: string | Types.ObjectId) {
    return this.contractModel.findById(contractId)
  }

  async active(contractId: string | Types.ObjectId) {
    return this.contractModel.findByIdAndUpdate(contractId, { active: true })
  }
}
