import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { UserService } from '../user.service'
import { SignUpDto } from '../dto/sign-up.dto'
import { SignInDto } from '../dto/sign-in.dto'
import { CreateKYCDto } from '../dto/create-kyc.dto'
import { AuthGuard } from 'src/shared/guards/auth.guard'
import { AuthContext } from 'src/types/auth-context.type'

@Controller('/user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  signUp(@Body() dto: SignUpDto) {
    return this.userService.signUp(dto)
  }

  @Post('sign-in')
  signIn(@Body() dto: SignInDto) {
    return this.userService.signIn(dto)
  }

  @Post('kyc')
  @UseGuards(AuthGuard)
  createKYC(@Body() dto: CreateKYCDto, @Req() { user }: AuthContext<Request>) {
    return this.userService.createKYC(dto, user.wallet)
  }
}
