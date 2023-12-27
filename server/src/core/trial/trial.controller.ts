import { Controller, Get, Post, Body } from '@nestjs/common'
import { TrialService } from './trial.service'
import { CreateTrialDto } from './dto/create-trial.dto'

@Controller('trial')
export class TrialController {
  constructor(private readonly trialService: TrialService) {}

  @Post()
  create(@Body() createTrialDto: CreateTrialDto) {
    return this.trialService.create(createTrialDto)
  }

  @Get()
  findAll() {
    return this.trialService.findAll()
  }
}
