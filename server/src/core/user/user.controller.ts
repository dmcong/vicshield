import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { UserService } from './user.service'
import { SignUpDto } from './dto/sign-up.dto'
import { SignInDto } from './dto/sign-in.dto'

@Controller('/contract')
@ApiTags('contract')
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
}
