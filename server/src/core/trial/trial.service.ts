import { Injectable } from '@nestjs/common'
import { CreateTrialDto } from './dto/create-trial.dto'

import { InjectModel } from '@nestjs/mongoose'
import { TrialDocument, TrialModel } from './entities/trial.entity'
import { Model } from 'mongoose'

@Injectable()
export class TrialService {
  constructor(
    @InjectModel(TrialModel.name)
    private trialModel: Model<TrialDocument>,
  ) {}

  create(createTrialDto: CreateTrialDto) {
    return this.trialModel.create(createTrialDto)
  }

  findAll() {
    return this.trialModel.find()
  }
}
