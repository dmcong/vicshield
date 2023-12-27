import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'
import { OneIDCore } from '@oneid-xyz/core'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private oneid = new OneIDCore({
    provider: 'https://web3js.readthedocs.io',

    authority: {
      getPerSign: () => {
        return ''
      },
    },
    sendTransaction: async () => {
      return ''
    },
  })

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('/oneid/:id')
  async findById(@Param() { id }: { id: string }) {
    await this.oneid.systemConfig.initConfig()
    const wallets = await this.oneid.search(id)
    return wallets
  }
}
