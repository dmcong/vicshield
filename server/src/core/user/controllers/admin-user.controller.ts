import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { UserService } from '../user.service'
import { AuthGuard } from 'src/shared/guards/auth.guard'
import { VerifyKYCDto } from '../dto/verify-kyc.dto'
import { GetUsersDto } from '../dto/get-users.dto'

@Controller('/admin/user')
@ApiTags('admin/user')
@UseGuards(AuthGuard)
export class AdminUserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query() dto: GetUsersDto) {
    return this.userService.getUsers(dto)
  }

  @Post('/verify-kyc')
  createKYC(@Body() dto: VerifyKYCDto) {
    return this.userService.verifyKYC(dto)
  }
}
