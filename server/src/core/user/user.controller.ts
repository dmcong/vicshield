import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { UserService } from './user.service'

@Controller('/contract')
@ApiTags('contract')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
