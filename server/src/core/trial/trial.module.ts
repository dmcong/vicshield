import { Module } from '@nestjs/common'
import { TrialService } from './trial.service'
import { TrialController } from './trial.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { TrialModel, TrialSchema } from './entities/trial.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TrialModel.name, schema: TrialSchema }]),
  ],
  controllers: [TrialController],
  providers: [TrialService],
})
export class TrialModule {}
